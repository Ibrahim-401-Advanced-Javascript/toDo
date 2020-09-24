// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = (url) => {
  // return 'hello';

  // handle toggle of isLoading
  // start with true
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      // const response = await axios.get('http://localhost:3000/api/todos');
      const response = await axios.get(url);
      // console.log(response.data);
      const results = response.data.results;

      setList(results);

      setIsLoading(false);
    } 
    fetchData();
  }, [url])

  return {
    list, 
    isLoading,
  }

  // end with false

}

export default useAjax;
