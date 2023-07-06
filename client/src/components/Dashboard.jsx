import React from 'react';
import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";

import { ITEM_NAMES } from '../settings';
import '../css/Dashboard.css';

export function Dashboard({ goal, capacity, bag, canMove }) {
  const player = usePlayer();
  const round = useRound();

  const bagTotal = bag.reduce((currSum, num) => currSum + num, 0);

  const createBagListItem = (itemName, item) => {
    let classes = 'list-item';
    if (bag[item] >= goal[item]) classes += ' list-item-complete';
    if (bag[item] !== 0) classes += ' can-drop';

    return (
      <p key={item} className={classes} onClick={() => 
        canMove && bag[item] !== 0 ? player.stage.set('drop item', item) : null
      }>
        {`${bag[item]}/${goal[item]} ${itemName}`}
      </p>
    );
  }

  return (
    <div className='dashboard'>
      <div className='bag'>
        <h2 className='bag-title'><u>Bag</u></h2>
        <h5 className='capacity'>Bag Total: <span style={bagTotal === capacity ? {color: 'red'} : {}}>{bagTotal}/{capacity}</span></h5>
        {ITEM_NAMES.slice(0, round.get('numDistinctItems')).map(createBagListItem)}
      </div>
    </div>
  )
}