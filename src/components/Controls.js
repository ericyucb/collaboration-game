import React from 'react';
import { Item } from './Item';

export function Controls({ collectItem, displayItem }) {
  return (
    <div className='controls'>
      <div className='controlButton' onClick={collectItem}>
        <h3>Collect</h3>
        {displayItem === null ? null : <Item type={displayItem} />}
      </div>
      <div className='controlButton'>
        <h3>Lock In</h3>
      </div>
    </div>
  )
}

