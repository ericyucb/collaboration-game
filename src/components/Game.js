import React, { useState } from 'react';

import { Board } from './Board';
import { Dashboard } from './Dashboard';
import { Controls } from './Controls';

export function Game({ setup }) {
  const [board, setBoard] = useState(setup.board);
  const [bag, setBag] = useState(setup.goal.map(() => 0));
  const [round, setRound] = useState(0);
  const [collect, setCollect] = useState(null);
  const [playersHistory, setPlayersHistory] = useState(setup.playerPositions.map(position => [position.map(coord => coord)]));

  const getPlayerPositions = (playersHistory) => {
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
    setCollect(() => null);
  }

  const selectItem = (item) => {
    const total = bag.reduce((currSum, e) => currSum + e, 0);
    if (total < setup.capacity) setCollect(() => item);
  }

  const collectItem = () => {
    const playerPositions = getPlayerPositions(playersHistory);
    const pRow = playerPositions[0][0];
    const pCol = playerPositions[0][1];

    if (collect !== null) {
      const updateBoard = board => {
        const copyBoard = board.map(row => row.map(col => col));
        const itemIndex = copyBoard[pRow][pCol].indexOf(collect)
        console.log(copyBoard[pRow][pCol]);
        if (itemIndex !== -1) {
          copyBoard[pRow][pCol].splice(itemIndex, 1);
        }
        console.log(copyBoard[pRow][pCol]);
        return copyBoard;
      }
      const updateBag = bag => {
        const copyBag = bag.filter(() => true);
        copyBag[collect] += 1;
        return copyBag
      }
  
      setBoard(updateBoard);
      setBag(updateBag);
      setCollect(() => null)
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
          selectItem={selectItem}
        />
        <Dashboard round={round} goal={setup.goal} bag={bag} capacity={setup.capacity} />
      </div>
      <Controls collectItem={collectItem} displayItem={collect} />
    </div>
  )
}