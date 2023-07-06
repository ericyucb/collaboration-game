import React, { useState } from 'react';
import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";

import '../css/Game.css';

import { Board } from '../components/Board';
import { Dashboard } from '../components/Dashboard';
import { Controls } from '../components/Controls';
import { updateGame } from '../utils/Utils';

export function MazeGame() {
  const round = useRound();
  const player = usePlayer();
  const players = usePlayers();

  const otherPlayer = players.filter(p => p.id !== player.id)[0];

  const action = player.stage.get('action');
  const capacity = round.get('capacity');

  const canMove = action === null;

  const [ nextBoard, nextPlayerPos, nextPlayerBag ] = updateGame(round.get('board'), action, player);

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          board={nextBoard}
          playerPos={nextPlayerPos}
          playerId={player.id}
          otherPos={otherPlayer.round.get('position')}
          otherId={otherPlayer.id}
          vision={player.round.get('position')}
          canMove={canMove}
        />
        <Dashboard
          goal={round.get('goal')}
          capacity={round.get('capacity')}
          bag={nextPlayerBag}
          canMove={canMove}
        />
      </div>
      <Controls canMove={canMove} />
    </div>
  )
}