import React from 'react';
import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";

import { ITEM_NAMES } from '../settings';
import '../css/Dashboard.css';

export function Dashboard({ goal, individualGoal, capacity, bag, collectiveBag, canMove }) {
  const bagTotal = bag.reduce((currSum, num) => currSum + num, 0);

  return (
    <div className='dashboard'>
      <div className='bag'>
        <h2 className='bag-title'><u>Bag</u></h2>
        <h5 className='capacity'>Bag Total: <span style={bagTotal === capacity ? {color: 'red'} : {}}>{bagTotal}/{capacity}</span></h5>
        {
          individualGoal ?
          <>
            <h3><u>Individual Goal</u></h3>
            <BagList
              bag={bag}
              goal={individualGoal}
              canMove={canMove}
            />
            <h3><u>Shared Goal</u></h3>
            <BagList
              bag={collectiveBag}
              goal={goal}
              canMove={false}
              showProgress={false}
            />
            <h3><u>Shared Goal (Admin)</u></h3>
            <BagList
              bag={collectiveBag}
              goal={goal}
              canMove={false}
            />
          </> :
          <>
            <h3><u>Goal</u></h3>
            <BagList
              bag={bag}
              goal={goal}
              canMove={canMove}
            />
          </>
        }
      </div>
    </div>
  )
}

function BagList({ bag, goal, canMove, showProgress=true }) {
  const player = usePlayer();
  const round = useRound();

  const createBagListItem = (itemName, item) => {
    let classes = 'list-item';
    if (bag[item] >= goal[item]) classes += ' list-item-complete';
    if (canMove && bag[item] !== 0) classes += ' can-drop';

    return (
      <p key={item} className={classes} onClick={() => 
        canMove && bag[item] !== 0 ? player.stage.set('drop item', item) : null
      }>
        {
          showProgress ?
          `${bag[item]}/${goal[item]} ${itemName}` :
          `${goal[item]} ${itemName}`
        }
      </p>
    );
  }

  return (
    <>
      {ITEM_NAMES.slice(0, round.get('numDistinctItems')).map(createBagListItem)}
    </>
  )
}