import React from 'react';

import '../css/Controls.css';

import { Item } from './Item';

export function Controls({ collectItem, dropItem, displayCollectItem, displayDropItem }) {
  return (
    <div className='controls'>
      <ControlButton name='Collect' onClick={collectItem} displayIcon={displayCollectItem} />
      <ControlButton name='Drop' onClick={dropItem} displayIcon={displayDropItem} />
      <ControlButton name='Lock In' onClick={() => {}} displayIcon={null} />
    </div>
  )
}

function ControlButton({ name, onClick, displayIcon }) {
  const isLive = displayIcon !== null;
  
  return (
    <div className={`control-button ${isLive ? 'live' : 'disabled'}`} onClick={isLive ? onClick : () => {}}>
      <h3>{name}</h3>
      {displayIcon === null ? null : <Item type={displayIcon} />}
    </div>
  );
}