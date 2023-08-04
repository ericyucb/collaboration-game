import React from 'react';

import '../css/Cell.css';

import { CellDropTarget } from './CellDropTarget';

export function Cell({ row, col, movePlayer, moveAdj, visionAdj, children }) {
  if (!visionAdj && false) { // Remove false condition once done debugging
    return (
      <div className='cell invis' />
    )
  }

  return (
    moveAdj ?
    <CellDropTarget row={row} col={col} movePlayer={movePlayer}>
      <div className='cell'>
        {children}
      </div>
    </CellDropTarget> :
    <div
      className='cell'
    >
      {children}
    </div>
  );
}