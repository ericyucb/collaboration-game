import React, { useState, useEffect } from 'react';

import { Board } from './Board';
import { Dashboard } from './Dashboard';
import { Controls } from './Controls';

export function Game({ setup }) {
  const [board, setBoard] = useState(setup.board);
  const [playerPositions, setPlayerPositions] = useState(setup.playerPositions.map(position => position.map(coord => coord)));
  const [bag, setBag] = useState(setup.goal.map(() => 0));
  const [round, setRound] = useState(1);

  const movePlayer = (itemType, row, col) => {
    const updatePlayerPositions = playerPositions => {
      const playerNum = parseInt(itemType.slice(-1));
      const copyPlayerPositions = playerPositions.map(position => position.map(coord => coord));
      copyPlayerPositions[playerNum - 1] = [row, col];
      return copyPlayerPositions;
    }
    setPlayerPositions(updatePlayerPositions);
  }

  return (
    <div className='game'>
      <h1>Maze Game</h1>
      <div className='gameBoard'>
        <Board
          board={board}
          playerPositions={playerPositions}
          movePlayer={(itemType, row, col) => movePlayer(itemType, row, col)}
        />
        <Dashboard round={round} goal={setup.goal} bag={bag} />
      </div>
      <Controls />
    </div>
  )
}