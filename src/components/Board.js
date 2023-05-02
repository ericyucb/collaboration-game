import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Cell } from './Cell';
import { Player } from './Player';
import { Magazine } from './Item';

export function Board({ board, playerPositions, movePlayer, selectItem }) {
  const numRows = board.length;
  const numCols = board[0].length;

  const generateCells = (numRows, numCols, playerPositions) => {
    const cells = [];
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        const playerNum = playerPositions.findIndex(position => r === position[0] && c === position[1]);
        const maxAbsVal = arr => Math.max(...arr.map(Math.abs));
        const moveAdj = playerPositions.map(
          positions => Math.abs(positions[0] - r) + Math.abs(positions[1] - c) === 1
        ).reduce((acc, val, index) => val ? acc.concat([index + 1]) : acc, []);
        const visionAdj = playerPositions.some(
          positions => maxAbsVal([positions[0] - r, positions[1] - c]) <= 1
        );
        const hasPlayer = playerNum !== -1;

        cells.push(
          <Cell
            key={`${r} ${c}`}
            row={r} col={c}
            movePlayer={movePlayer}
            dropTargets={moveAdj}
            visionAdj={visionAdj}
          >
            {hasPlayer ? <Player number={playerNum + 1} /> : null}
            {board[r][c].length === 0 ?
              null :
              <Magazine items={board[r][c]} corner={hasPlayer} live={hasPlayer} selectItem={selectItem} />
            }
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