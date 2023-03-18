import React from 'react';

export function Dashboard({ round, goal, bag }) {
  const itemNames = ['pink', 'red', 'blue'];

  return (
    <div className='dashboard'>
      <h1 className='roundTitle'>{`Round ${round + 1}`}</h1>
      <div className='tasks'>
        <h2><u>Task Checklist</u></h2>
        {itemNames.map((itemName, i) => (<p key={i} className='listItem'>{`${goal[i]} ${itemNames[i]}`}</p>))}
      </div>
      <div className='bag'>
        <h2><u>Bag</u></h2>
        {itemNames.map((itemName, i) => (<p key={i} className='listItem'>{`${bag[i]} ${itemNames[i]}`}</p>))}
      </div>
    </div>
  )
}