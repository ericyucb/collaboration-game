import './App.css';
import React from 'react';
import SETUPS from './setups';
import { Game } from './components/Game'

function App() {
  return (
    <div className='page'>
      <Game setup={SETUPS[0]} />
    </div>
  );
}

export default App;
