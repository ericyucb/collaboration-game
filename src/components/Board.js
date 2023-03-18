import React, { useState } from 'react';
import { Cell } from './Cell';
import { Player } from './Player';
import { Item } from './Item';

export function Board({ board, playerPositions }) {
  const numRows = 6;
  const numCols = 6;

  const [boardArr, setBoardArr] = useState(board);

  const generateRows = (numRows, numCols) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(<Row key={i} rowNum={i} rowArr={boardArr[i]} playerPositions={playerPositions} />);
    }

    return rows;
  }

  return (
    <div className='board'>
      {generateRows(numRows, numCols)}
    </div>
  );
}

export function Row({ rowNum, rowArr, playerPositions }) {
  const generateRow = rowArr => {
    const row = [];
    for (let i = 0; i < rowArr.length; i++) {
      row.push(
        <Cell key={i}>
          {rowArr[i] === 0 ? null : <Item type={rowArr[i] - 1} />}
          {playerPositions.map(
            (position, index) => rowNum === position[0] && i === position[1] ? <Player number={index + 1} /> : null
          )}
        </Cell>
      );
    }
    
    return row;
  }

  return (
    <div className='row'>
      {generateRow(rowArr)}
    </div>
  )
}