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
      className='cellDropTarget'
      ref={drop}
    >
      {canDrop && !isOver && <div className='highlightPossible' />}
      {canDrop && isOver && <div className='highlightHover' />}
      {children}
    </div>
  )
}