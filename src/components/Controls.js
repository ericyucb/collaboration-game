import React from 'react';
import { Item } from './Item';

export function Controls({ collectItem, dropItem, displayCollectItem, displayDropItem }) {
  return (
    <div className='controls'>
      <div className='control-button' onClick={collectItem}>
        <h3>Collect</h3>
        {displayCollectItem === null ? null : <Item type={displayCollectItem} />}
      </div>
      <div className='control-button' onClick={dropItem}>
        <h3>Drop</h3>
        {displayDropItem === null ? null : <Item type={displayDropItem} />}
      </div>
      <div className='control-button'>
        <h3>Lock In</h3>
      </div>
    </div>
  )
}

