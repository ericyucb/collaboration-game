import React from 'react';

import { CellDropTarget } from './CellDropTarget';

export function Cell({ row, col, movePlayer, dropTargets, children }) {
  return (
    dropTargets.length === 0 ?
    <div
      className='cell'
    >
      {children}
    </div> :
    <CellDropTarget row={row} col={col} dropTargets={dropTargets} movePlayer={movePlayer}>
      <div className='cell'>
        {children}
      </div>
    </CellDropTarget>
  );
}