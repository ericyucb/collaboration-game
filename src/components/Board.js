import React, { useState } from 'react';
import { Cell } from './Cell';
import { Player } from './Player';
import { Item } from './Item';

export function Board() {
  const numRows = 6;
  const numCols = 6;

  const [boardArr, setBoardArr] = useState(
    [
      ['i', 'i', 'i', 'i', 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i'],
      ['player', 'i', 'i', 'i', 'i', 'i']
    ]
  )

  const generateRows = (numRows, numCols) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(<Row key={i} rowArr={boardArr[i]} />);
    }

    return rows;
  }

  return (
    <div className='board'>
      {generateRows(numRows, numCols)}
    </div>
  );
}

export function Row({ rowArr }) {
  const generateRow = rowArr => {
    const row = [];
    for (let i = 0; i < rowArr.length; i++) {
      row.push(
        <Cell key={i}>
          {rowArr[i] === 'player' ? <Player /> : <Item>{rowArr[i]}</Item> }
        </Cell>
      );
    }

    console.log(rowArr);
    
    return row;
  }

  return (
    <div className='row'>
      {generateRow(rowArr)}
    </div>
  )
}