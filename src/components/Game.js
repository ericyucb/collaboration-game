import React, { useState } from 'react';
import { Board } from './Board';
import { Dashboard } from './Dashboard';

export function Game({ setup }) {
  const [board, setBoard] = useState(setup.board);
  const [playerPositions, setPlayerPositions] = useState(setup.playerPositions);
  const [bag, setBag] = useState(setup.goal.map(() => 0));
  const [round, setRound] = useState(1);

  return (
    <div className='game'>
      <h1>Maze Game</h1>
      <div className='gameBoard'>
        <Board board={board} playerPositions={playerPositions} />
        <Dashboard round={round} goal={setup.goal} bag={bag} />
      </div>
    </div>
  )
}