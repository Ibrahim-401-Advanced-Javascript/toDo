import React from 'react'
import { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function List() {

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


  return (
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
  )
}

export default List
