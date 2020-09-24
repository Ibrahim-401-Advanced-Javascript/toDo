import React from 'react';
import { useEffect, useState } from 'react';
import useAjax from './hooks/ajax.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Swapi from './components/Swapi.js';
// import axios from 'axios';

function App() {

  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const { list, setList } = useAjax('https://swapi.dev/api/people');
  // const hookResult = useAjax();
  // console.log(hookResult);

  // useEffect(() => {
  //   setIsLoading(true);
  //   async function fetchData() {
  //     // const response = await axios.get('http://localhost:3000/api/todos');
  //     const response = await axios.get('https://swapi.dev/api/people');
  //     // console.log(response.data);
  //     const results = response.data.results;

  //     setList(results);
  //     setIsLoading(false);
  //   } 
  //   fetchData();
  // }, [])



  return (
    <div className="App">
      <Header />
      <Main />
      <Swapi />
      {/* {isLoading && <p>Loading...</p>} */}
      {/* <ul> */}
        {/* {list.map(item => <li key={item._id}>{item.taskname}</li>)} */}
        {/* {list.map(item => <li key={item.url}>{item.name}</li>)} */}
      {/* </ul> */}
    </div>
  );
}

export default App;
