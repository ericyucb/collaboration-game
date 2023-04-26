import React from 'react';

export function Controls({collectItem}) {
  return (
    <div className='controls'>
      <div className='controlButton' onClick={collectItem}>
        <h3>Collect</h3>
      </div>
      <div className='controlButton'>
        <h3>Lock In</h3>
      </div>
    </div>
  )
}

