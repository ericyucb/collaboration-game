import { ClassicListenersCollector } from "@empirica/core/admin/classic";
import { OnePlayerSetups, TwoPlayerSetups } from "./setups";
import { updateGame, goalFulfilled } from '../../Utils';
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const setup = game.players.length === 1 ? OnePlayerSetups[2] : TwoPlayerSetups[2];

  const round = game.addRound({
    name: `Round 1`,
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
    name: `maze`,
    duration: 10000,
  });

  // for (let i = 0; i < 10; i++) {
  //   round.addStage({
  //     name: `maze`,
  //     duration: 10000,
  //   });
  // }
});

Empirica.onRoundStart(({ round }) => {
  const setup = round.currentGame.players.length === 1 ? OnePlayerSetups[2] : TwoPlayerSetups[2];

  round.currentGame.players.forEach((player, index) => {
    player.round.set('position', setup.playerPositions[index]);
    player.round.set('bag', setup.goal.map(() => 0));

    if (round.currentGame.players.length === 2) {
      player.round.set('individual goal', setup.individualGoals[index]);
    }
  });
});

Empirica.onStageStart(({ stage }) => {
  stage.currentGame.players.forEach(player => {
    player.stage.set('action', null);
    player.stage.set('collect item', null);
    player.stage.set('drop item', null);
  });

  if (stage.round.get('completed')) {
    stage.currentGame.players.forEach(player => {
      player.stage.set('submit', true);
    })
  }
});

Empirica.onStageEnded(({ stage }) => {
  let board = stage.round.get('board');
  const players = stage.currentGame.players;
  const playerBags = [];
  
  players.forEach(player => {
    const [ newBoard, playerPos, playerBag ] = updateGame(board, player.stage.get('action'), player);

    board = newBoard;
    player.round.set('position', playerPos);
    player.round.set('bag', playerBag);

    playerBags.push(playerBag);
  });

  stage.round.set('board', board);

  if (players.length === 1) {
    if (!goalFulfilled(playerBags[0], stage.round.get('goal'))) {
      stage.round.addStage({
        name: `maze`,
        duration: 10000,
      });
    }
  } else {
    const collectiveBag = playerBags[0].map((itemNum, index) => itemNum + playerBags[1][index]);
    if (!(goalFulfilled(playerBags[0], players[0].round.get('individual goal')) &&
      goalFulfilled(playerBags[1], players[1].round.get('individual goal')) &&
      goalFulfilled(collectiveBag, stage.round.get('goal'))))
    {
      stage.round.addStage({
        name: `maze`,
        duration: 10000,
      });
    }
  }
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});