import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import '../css/Board.css';

import { Cell } from './Cell';
import { Player } from './Player';
import { Magazine } from './Item';
import { samePos, adjPos, surroundPos } from '../../../Utils';

export function Board({ board, playerPos, playerId, otherPos, otherId, vision, canMove }) {
  const numRows = board.length;
  const numCols = board[0].length;

  const cells = [];
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      let cellPlayerId = '';
      let hasPlayer = false;
      let hasCurrentPlayer = false;

      if (samePos(playerPos, [r, c])) {
        cellPlayerId = playerId;
        hasPlayer = true;
        hasCurrentPlayer = true;
      } else if (samePos(otherPos, [r, c])) {
        cellPlayerId = otherId;
        hasPlayer = true;
      }

      const moveAdj = canMove && adjPos(playerPos, [r, c]);
      const visionAdj = surroundPos(vision, [r, c]);

      cells.push(
        <Cell
          key={`${r} ${c}`}
          row={r} col={c}
          moveAdj={moveAdj}
          visionAdj={visionAdj}
        >
          {hasPlayer ? <Player id={cellPlayerId} draggable={canMove && hasCurrentPlayer} /> : null}
          {board[r][c].length === 0 ?
            null :
            <Magazine items={board[r][c]} corner={hasPlayer} isLive={canMove && hasCurrentPlayer} />
          }
        </Cell>
      );
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board' style={{gridTemplateRows: `repeat(${numRows}, 1fr)`, gridTemplateColumns: `repeat(${numCols}, 1fr)`}}>
        {cells}
      </div>
    </DndProvider>
  );
}