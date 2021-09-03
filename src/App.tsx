import React from 'react';

import './App.css';
import { Morpion } from './Morpion';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>tic-tac-toe</h1>
        <Morpion />
      </div>
    </div>
  );
};

export default App;
