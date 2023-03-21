import './App.css';
import { Game } from './components/Game'

function App() {
  const setups = [
    {
      goal: [7, 3, 5],
      board: [
        [2, 0, 3, 1, 1, 0],
        [2, 3, 0, 1, 1, 1],
        [3, 0, 3, 1, 1, 1],
        [1, 1, 1, 3, 0, 3],
        [1, 1, 1, 0, 0, 2],
        [0, 1, 1, 3, 2, 2],
      ],
      playerPositions: [[5, 0]]
    }
  ]

  return (
    <Game setup={setups[0]}/>
  );
}

export default App;
