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

  const collectItem = () => {
    console.log('collect');
    const pRow = playerPositions[0][0];
    const pCol = playerPositions[0][1];
    const currItem = board[pRow][pCol] - 1;
    const updateBoard = board => {
      const copyBoard = board.map(row => row.map(col => col));
      copyBoard[pRow][pCol] = 0;
      return copyBoard;
    }
    setBoard(updateBoard);
    const updateBag = bag => {
      const copyBag = bag.filter(() => true);
      copyBag[currItem] += 1;
      return copyBag
    }
    setBag(updateBag);
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
      <Controls collectItem={collectItem}/>
    </div>
  )
}