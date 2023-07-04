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

export function MazeGame({ }) {
  const player = usePlayer();
  const round = useRound();

  const board = round.get('board');
  const bag = round.get('bag');
  const [nextCollect, setNextCollect] = useState(null);
  const [nextDrop, setNextDrop] = useState(null);

  const movePlayer = (itemType, row, col) => {
    // const updatePlayersHistory = playersHistory => {
    //   const playerNum = parseInt(itemType.slice(-1));
    //   const copyPlayersHistory = playersHistory.map(
    //     playerHistory => playerHistory.map(position => position.map(coord => coord))
    //   );
    //   copyPlayersHistory[playerNum - 1].push([row, col]);
    //   return copyPlayersHistory;
    // }

    // setPlayersHistory(updatePlayersHistory);
    // setNextCollect(() => null);
  }

  const selectNextCollectItem = (item) => {
    // const total = bag.reduce((currSum, e) => currSum + e, 0);
    // if (total < setup.capacity) setNextCollect(() => item);
  }

  const selectNextDropItem = (item) => {
    // if (bag[item] > 0) setNextDrop(item);
  }

  const collectItem = () => {
    // const playerPositions = getPlayerPositions(playersHistory);
    // const pRow = playerPositions[0][0];
    // const pCol = playerPositions[0][1];

    // if (nextCollect !== null) {
    //   const updateBoard = board => {
    //     const copyBoard = board.map(row => row.map(cell => cell.map(item => item)));
    //     const itemIndex = copyBoard[pRow][pCol].indexOf(nextCollect)
    //     if (itemIndex !== -1) {
    //       copyBoard[pRow][pCol].splice(itemIndex, 1);
    //     }
    //     return copyBoard;
    //   }

    //   const updateBag = bag => {
    //     const copyBag = bag.slice();
    //     copyBag[nextCollect] += 1;
    //     return copyBag
    //   }
  
    //   setBoard(updateBoard);
    //   setBag(updateBag);
    //   setNextCollect(() => null);
    //   setNextDrop(() => null);
    // }
  }

  const dropItem = () => {
    // const playerPositions = getPlayerPositions(playersHistory);
    // const pRow = playerPositions[0][0];
    // const pCol = playerPositions[0][1];

    // if (nextDrop !== null) {
    //   const updateBoard = board => {
    //     const copyBoard = board.map(row => row.map(cell => cell.map(item => item)));
    //     copyBoard[pRow][pCol].push(nextDrop);
    //     return copyBoard;
    //   }

    //   const updateBag = bag => {
    //     const copyBag = bag.slice();
    //     copyBag[nextDrop] -= 1;
    //     return copyBag
    //   }
  
    //   setBoard(updateBoard);
    //   setBag(updateBag);
    //   setNextCollect(() => null);
    //   setNextDrop(() => null);
    // }
  }

  return (
    <div className='game'>
      <h1>Maze Game</h1>
      <div className='game-board'>
        <Board
          // board={board}
          // playerPositions={getPlayerPositions(playersHistory)}
          // movePlayer={(itemType, row, col) => movePlayer(itemType, row, col)}
          // selectNextCollectItem={selectNextCollectItem}
        />
        <Dashboard
          // goal={setup.goal}
          // bag={bag}
          // capacity={setup.capacity}
          // numDistinctItems={numDistinctItems}
          // selectNextDropItem={selectNextDropItem}
        />
      </div>
      <Controls collectItem={collectItem} dropItem={dropItem} displayCollectItem={nextCollect} displayDropItem={nextDrop} />
    </div>
  )
}