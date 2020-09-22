import React from 'react'
import { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import './Main.css';

function Main() {

// ----------------------------
// Task Creation Functions Below
const [task, setTasks] = useState([]);
const [taskName, setTaskName] = useState();


const _writeTask = (e) => {
  setTaskName(e.target.value);
}

const _addTask = (e) => {
  e.preventDefault();
  e.target.reset();
  taskName && setTasks([...task, taskName]);
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
  console.log('Typed:', taskName);
}, [taskName]);

// runs when a name is added / task changes
useEffect(() => {
  console.log('Task added:', task);
}, [task]);



// ----------------------------
// Task Completion Checks Below
const [tally, setClickCount] = useState(0);
const [completeCheck, toggleFactor] = useState(false);

const handleClick = () => {
  // increment click counter by one each time button is clicked
  setClickCount(tally + 1);

  // document true if tally is divisible by 5
  const newTally = tally + 1;
  if (newTally % 5 === 0) {
    toggleFactor(true);
  } else toggleFactor(false);
  
}
// ----------------------------

  return (
    <section className="Main">

      <div>

        <section id="form">
          <h5 id="taskprompt">What needs to be done?</h5>
          <form onSubmit={_addTask}>
            <input type="text" onChange={_writeTask} />
          </form>
        </section>

        <section id="cards">

          <div>
            <h5>Completed: {tally} / {task.length}</h5>
            {/* <h3>Factor of Five? {completeCheck.toString()}</h3> */}
            {/* <button onClick={handleClick}>click this</button> */}
          </div>

          <Card id="tasklist" style={{ width: '18rem' }}>
          {
            task.map(task => 

            <ListGroup variant="flush">
              <ListGroup.Item key={task}>
                {task} <button onClick={handleClick}>Done</button>
              </ListGroup.Item>
            </ListGroup>

            )
          }
          </Card>

        </section>

      </div>

  

    </section>
  )
}

export default Main;
