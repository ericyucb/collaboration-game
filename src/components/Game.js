import React, { useState } from 'react';

import { Board } from './Board';
import { Dashboard } from './Dashboard';
import { Controls } from './Controls';

export function Game({ setup }) {
  const [board, setBoard] = useState(setup.board);
  const [bag, setBag] = useState(setup.goal.map(() => 0));
  const [round, setRound] = useState(0);
  const [playersHistory, setPlayersHistory] = useState(setup.playerPositions.map(position => [position.map(coord => coord)]));

  const getPlayerPositions = (playersHistory) => {
    console.log(playersHistory);
    return playersHistory.map(playerHistory => playerHistory[playerHistory.length - 1])
  }

  const movePlayer = (itemType, row, col) => {
    const updatePlayersHistory = playersHistory => {
      const playerNum = parseInt(itemType.slice(-1));
      const copyPlayersHistory = playersHistory.map(
        playerHistory => playerHistory.map(position => position.map(coord => coord))
      );
      copyPlayersHistory[playerNum - 1].push([row, col]);
      return copyPlayersHistory;
    }

    setPlayersHistory(updatePlayersHistory);
    setRound(round => round + 1);
  }

  const collectItem = () => {
    const playerPositions = getPlayerPositions(playersHistory);
    const pRow = playerPositions[0][0];
    const pCol = playerPositions[0][1];
    const currItem = board[pRow][pCol] - 1;

    if (currItem !== -1) {
      const updateBoard = board => {
        const copyBoard = board.map(row => row.map(col => col));
        copyBoard[pRow][pCol] = 0;
        return copyBoard;
      }
      const updateBag = bag => {
        const copyBag = bag.filter(() => true);
        copyBag[currItem] += 1;
        return copyBag
      }
  
      setBoard(updateBoard);
      setBag(updateBag);
      setRound(round => round + 1);
    }
  }

  return (
    <div className='game'>
      <h1>Maze Game</h1>
      <div className='gameBoard'>
        <Board
          board={board}
          playerPositions={getPlayerPositions(playersHistory)}
          movePlayer={(itemType, row, col) => movePlayer(itemType, row, col)}
        />
        <Dashboard round={round} goal={setup.goal} bag={bag} />
      </div>
      <Controls collectItem={collectItem}/>
    </div>
  )
}