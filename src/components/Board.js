import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Cell } from './Cell';
import { Player } from './Player';
import { Item } from './Item';

export function Board({ board, playerPositions, movePlayer }) {
  const numRows = board.length;
  const numCols = board[0].length;

  const generateCells = (numRows, numCols, playerPositions) => {
    const cells = [];
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const playerNum = playerPositions.findIndex(position => r === position[0] && c === position[1]);
        const maxAbsVal = arr => Math.max(...arr.map(Math.abs))
        const playerAdj = playerPositions.map(
          positions => maxAbsVal([positions[0] - r, positions[1] - c]) === 1
        ).reduce((acc, val, index) => val ? acc.concat([index + 1]) : acc, []);

        cells.push(
          <Cell
            key={`${r} ${c}`}
            row={r} col={c}
            movePlayer={movePlayer}
            dropTargets={playerAdj}
          >
            {board[r][c] === 0 ? null : <Item type={board[r][c] - 1} />}
            {playerNum === -1 ? null : <Player number={playerNum + 1} />}
          </Cell>
        );
      }
    }

    return cells;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board' style={{gridTemplateRows: `repeat(${numRows}, 1fr)`, gridTemplateColumns: `repeat(${numCols}, 1fr)`}}>
        {generateCells(numRows, numCols, playerPositions)}
      </div>
    </DndProvider>
  );
}