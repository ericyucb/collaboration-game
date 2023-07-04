import React from 'react';

import '../css/Cell.css';

import { CellDropTarget } from './CellDropTarget';

export function Cell({ row, col, movePlayer, dropTargets, visionAdj, children }) {
  if (!visionAdj && false) {
    return (
      <div className='cell invis' />
    )
  }

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