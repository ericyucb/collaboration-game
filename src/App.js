import './App.css';
import React from 'react';
import { Game } from './components/Game'

function App() {
  const setups = [
    {
      goal: [7, 3, 5],
      board: [
        [[2], [ ], [3], [1], [1], [ ]],
        [[2], [3], [ ], [1], [1], [1]],
        [[3], [ ], [3], [1], [1], [1]],
        [[1], [1], [1], [3], [ ], [3]],
        [[1], [1], [1], [ ], [ ], [2]],
        [[ ], [1], [1], [3], [2], [2]],
      ],
      playerPositions: [[5, 0]],
      capacity: 10,
    },
    {
      goal: [7, 3, 5, 0, 0],
      board: [
        [[1, 2, 3, 4], [ ], [2], [0], [0], [ ]],
        [[1], [2], [ ], [0], [0], [0]],
        [[2], [ ], [2], [0], [0], [0]],
        [[0], [0], [0], [2], [ ], [2]],
        [[0], [0], [0], [ ], [ ], [1]],
        [[ ], [0], [0], [2], [1], [1]],
      ],
      playerPositions: [[5, 0]],
      capacity: 1,
    }
  ]

  return (
    <Game setup={setups[1]}/>
  );
}

export default App;
