import React from 'react'
import { useState, useEffect } from 'react';

function List() {

const [people, setPeople] = useState([]);
const [name, setName] = useState();


const _changeName = (e) => {
  setName(e.target.value);
}

const _addPerson = (e) => {
  e.preventDefault();
  e.target.reset();
  name && setPeople([...people, name]);
}

// runs on every re-render
useEffect(() => {
  console.log('I run everytime');
});

// runs on initial page render only
useEffect(() => {
  console.log('Initial mount');
});

// runs any time a name changes
useEffect(() => {
  console.log('Name changed to:', name);
}, [name]);

// runs when a name is added / people changes
useEffect(() => {
  console.log('Person added:', people);
}, [people]);

  return (
    <div>
      <h3>Folks:</h3>
      <form onSubmit={_addPerson}>
        <input type="text" onChange={_changeName} />
      </form>

      <ul id="people">
      {
        people.map(person => 
          <li key={person}>{person}</li>
          )
      }
      </ul>

    </div>
  )
}

export default List
