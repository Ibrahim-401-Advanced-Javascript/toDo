import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Swapi from './components/Swapi.js';
// import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Swapi />
      {/* {isLoading && <p>Loading...</p>} */}

    </div>
  );
}

export default App;
