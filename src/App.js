import React from 'react';
// import { UseState } from 'react';
import './App.css';

import Counter from '../src/components/Counter.js';
import List from '../src/components/List.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <List />
    </div>
  );
}

export default App;
