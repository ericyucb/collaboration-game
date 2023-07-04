import React from "react";
import { useDrag } from 'react-dnd';

import '../css/Player.css';

export function Player({ number }) {
  const [, drag] = useDrag(() => ({
    type: `p${number}`,
  }))

  return (
    <div className='target' ref={drag}>
      <h1 className='player'>
        {`P${number}`}
      </h1>
    </div>
  );
}