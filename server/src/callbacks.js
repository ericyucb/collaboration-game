import { ClassicListenersCollector } from "@empirica/core/admin/classic";
import SETUPS from "./setups";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const setup = SETUPS[0];

  const round = game.addRound({
    name: `Round 1`,
    board: setup.board,
    goal: setup.goal,
    capacity: setup.capacity,
    bag: setup.goal.map(() => 0),
    numDistinctItems: setup.board.reduce(
        (currMax, row) => row.reduce(
          (rowMax, cell) => cell.reduce(
            (cellMax, item) => Math.max(cellMax, item),
          rowMax),
        currMax),
      -1) + 1,
  });

  round.addStage({
    name: 'maze',
    duration: 10000,
  });

  game.players.forEach((player, index) => {
    player.set('position', setup.playerPositions[index]);
  });
});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});