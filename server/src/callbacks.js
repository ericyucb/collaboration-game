import { ClassicListenersCollector } from "@empirica/core/admin/classic";
import { OnePlayerSetups, TwoPlayerSetups, Iterations } from "./setups";
import { updateGame, goalFulfilled } from '../../Utils';
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  let setups = game.players.length === 1 ? OnePlayerSetups : TwoPlayerSetups;

  setups = setups
    .map((setup, index) => ({ setup, setupIndex: index, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ setup, setupIndex }) => ({ setup, setupIndex }));

  game.set('setups', setups);

  console.log('Creating rounds')
  setups.forEach((setup, index) => {
    let setupIndex = setup.setupIndex;
    setup = setup.setup;

    for (let i = 0; i < Iterations; i++) {
      const roundName = `Round ${index * Iterations + i + 1} | Setup ${setupIndex + 1} | Trial ${i + 1}`
      const round = game.addRound({
        name: roundName,
        setup: setup,
        setupIndex: setupIndex,
        board: setup.board, // Mutable
        goal: setup.goal,
        capacity: setup.capacity,
        numDistinctItems: setup.board.reduce(
            (currMax, row) => row.reduce(
              (rowMax, cell) => cell.reduce(
                (cellMax, item) => Math.max(cellMax, item),
              rowMax),
            currMax),
          -1) + 1,
      });
  
      round.addStage({
        name: 'Maze Game',
        duration: 10000,
      });
      console.log(`Created ${roundName}`)
    }
  });
  console.log();
});

Empirica.onRoundStart(({ round }) => {
  console.log(`Starting ${round.get('name')}`);
  const setup = round.get('setup');

  round.currentGame.players.forEach((player, index) => {
    if (!player.round.get('position')) { // For weird Heisenbug round reset
      player.round.set('position', setup.playerPositions[index]);
      player.round.set('bag', setup.goal.map(() => 0));
      player.round.set('score', 0);
    }

    if (round.currentGame.players.length === 2) {
      player.round.set('individual goal', setup.individualGoals[index]);
    }
  });
});

Empirica.onStageStart(({ stage }) => {
  console.log('Starting action');
  console.log(`DEBUG: At the start of action, player 0's bag is ${stage.currentGame.players[0].round.get('bag')}`);
  if (stage.get('name') === 'Maze Game') {
    stage.currentGame.players.forEach(player => {
      if (player.stage !== undefined) {
        player.stage.set('action', null);
        player.stage.set('collect item', null);
        player.stage.set('drop item', null);
      }
    });
  }
});

Empirica.onStageEnded(({ stage }) => {
  if (stage.round.get('completed')) {
    return;
  }

  let board = stage.round.get('board');
  const players = stage.currentGame.players;
  const playerBags = [];
  
  players.forEach(player => {
    const [ newBoard, playerPos, playerBag ] = updateGame(board, player.stage.get('action'), player);
    console.log(`Setting bag to ${playerBag}`);

    board = newBoard;
    player.round.set('position', playerPos);
    player.round.set('bag', playerBag);
    player.round.set('score', player.round.get('score') + 1);

    playerBags.push(playerBag);
  });

  stage.round.set('board', board);

  let goalsFullfilled = (players.length === 1 && goalFulfilled(playerBags[0], stage.round.get('goal')))
    || (players.length === 2 && goalFulfilled(playerBags[0], players[0].round.get('individual goal')) &&
    goalFulfilled(playerBags[1], players[1].round.get('individual goal')) &&
    goalFulfilled(collectiveBag, stage.round.get('goal')))

  if (goalsFullfilled) {
    stage.round.set('completed', true)
    stage.round.addStage({
      name: `Maze Game End`,
      duration: 10000,
    });
    console.log('Goals fulfilled')
  } else {
    stage.round.addStage({
      name: `Maze Game`,
      duration: 10000,
    });
    console.log('Goals unfulfilled')
  }
  console.log(`DEBUG: At the end of action, player 0's bag is ${players[0].round.get('bag')}`);
  console.log('Ending action')
  console.log()
});

Empirica.onRoundEnded(({ round }) => {
  console.log(`Ending ${round.get('name')}`)
});

Empirica.onGameEnded(({ game }) => {});