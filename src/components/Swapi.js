import React from 'react';
import useAjax from '../hooks/ajax.js';

function People() {
  const { list } = useAjax('https://swapi.dev/api/people')


  return(
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      <ul>
        {/* {list.map(item => <li key={item._id}>{item.taskname}</li>)} */}
        {list.map(item => <li key={item.url}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default People;