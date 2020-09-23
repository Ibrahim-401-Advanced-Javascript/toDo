import React from 'react'
import { useState, useEffect } from 'react'

function Form() {


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


  return (
    <section id="form">
    <h5 id="taskprompt">What needs to be done?</h5>
    <form onSubmit={_addTask}>
      <input type="text" id="formfield" onChange={_writeTask} />
      <input type="submit" id="add" value="add"></input>
    </form>
  </section>
  )
}

export default Form
