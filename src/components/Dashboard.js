import React from 'react';
import { ITEM_NAMES } from '../settings';

export function Dashboard({ round, goal, bag, capacity, numDistinctItems, selectNextDropItem }) {
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
      <h1 className='round-title'>{`Round ${round + 1}`}</h1>
      <div className='bag'>
        <h2 className='bag-title'><u>Bag</u></h2>
        <h5 className='capacity'>Bag Total: <span style={bagTotal === capacity ? {color: 'red'} : {}}>{bagTotal}/{capacity}</span></h5>
        {ITEM_NAMES.slice(0, numDistinctItems).map(createBagListItem)}
      </div>
    </div>
  )
}