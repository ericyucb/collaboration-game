import React from 'react';
import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";

import { ITEM_NAMES } from '../settings';
import '../css/Dashboard.css';

export function Dashboard(
    // { goal, bag, capacity, numDistinctItems, selectNextDropItem }
  ) {
  const round = useRound();
  const goal = round.get('goal');
  const bag = round.get('bag');
  const capacity = round.get('capacity');

  const bagTotal = bag.reduce((currSum, num) => currSum + num, 0);

  const createBagListItem = (itemName, i) => {
    let classes = 'list-item';
    if (bag[i] >= goal[i]) classes += ' list-item-complete';
    if (bag[i] !== 0) classes += ' can-drop';

    return (
      <p key={i} className={classes} onClick={() => bag[i] === 0 ? null : selectNextDropItem(i)}>
        {`${bag[i]}/${goal[i]} ${itemName}`}
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