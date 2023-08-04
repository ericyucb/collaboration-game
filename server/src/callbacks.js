import { ClassicListenersCollector } from "@empirica/core/admin/classic";
import { OnePlayerSetups, TwoPlayerSetups } from "./setups";
import { updateGame } from '../../Utils';
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const setup = game.players.length === 1 ? OnePlayerSetups[0] : TwoPlayerSetups[0];

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

  for (let i = 0; i < 10; i++) {
    round.addStage({
      name: `maze`,
      duration: 10000,
    });
  }
});

Empirica.onRoundStart(({ round }) => {
  const setup = round.currentGame.players.length === 1 ? OnePlayerSetups[0] : TwoPlayerSetups[0];

  round.currentGame.players.forEach((player, index) => {
    player.round.set('position', setup.playerPositions[index]);
    player.round.set('bag', setup.goal.map(() => 0));
  });
});

Empirica.onStageStart(({ stage }) => {
  stage.currentGame.players.forEach(player => {
    player.stage.set('action', null);
    player.stage.set('collect item', null);
    player.stage.set('drop item', null);
  });
});

Empirica.onStageEnded(({ stage }) => {
  let board = stage.round.get('board');
  const players = stage.currentGame.players;
  
  players.forEach(player => {
    const [ newBoard, playerPos, playerBag ] = updateGame(board, player.stage.get('action'), player);

    board = newBoard;
    player.round.set('position', playerPos);
    player.round.set('bag', playerBag);
  });

  stage.round.set('board', board);
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});