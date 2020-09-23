import React from 'react'
import { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

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
// const [completeCheck, toggleFactor] = useState(false);

const handleDone = () => {
  // increment click counter by one each time button is clicked
  setClickCount(tally + 1);
  // change background color to green
}

const handleEdit = () => {
  console.log(`editing ${task}`);
  // bring up form to allow user to change text of task card
}

const handleDelete = () => {

  // remove task card from the list
  console.log(task.length);

  console.log(`${task} deleted`);
  
  // decrement task.length in Completed section
  console.log(task.length - 1);
}
// ----------------------------

  return (
    <section className="Main">

      <div>
        <Navbar bg="dark" variant="dark">
          <Nav id="header-title">
            <h3>Task Manager: {tally} / {task.length} </h3>
          </Nav>
        </Navbar>
      </div>

      <div>

        <section id="form">
          <h5 id="taskprompt">What needs to be done?</h5>
          <form onSubmit={_addTask}>
            <input type="text" id="formfield" onChange={_writeTask} />
            <input type="submit" id="add" value="add"></input>
          </form>
        </section>

        <section id="cards">

          <div>
            <h5>Completed: {tally} / {task.length}</h5>
          </div>

          <Card id="tasklist" style={{ width: '18rem' }}>
          {
            task.map(task => 

            <ListGroup variant="flush">
              <ListGroup.Item id="card" key={task}>
                {task}
                <button id="done" onClick={handleDone}>done</button>
                <button id="edit" onClick={handleEdit}>edit</button>
                <button id="delete" onClick={handleDelete}>delete</button>
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
