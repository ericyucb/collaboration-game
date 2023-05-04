import React from 'react';
import { useDrop } from 'react-dnd';

export function CellDropTarget({ row, col, dropTargets, movePlayer, children }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: dropTargets.map(playerNum => `p${playerNum}`),
      drop: (item, monitor) => movePlayer(monitor.getItemType(), row, col),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    []
  );

  return (
    <div
      className='cell-drop-target'
      ref={drop}
    >
      {canDrop && !isOver && <div className='highlight-possible' />}
      {canDrop && isOver && <div className='highlight-hover' />}
      {children}
    </div>
  )
}