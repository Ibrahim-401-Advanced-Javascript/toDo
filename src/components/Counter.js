import React from 'react';
import { useState } from 'react';

// will track which tasks have been marked completed

function Counter() {

  const [tally, setClickCount] = useState(0);
  const [factorOfFive, toggleFactor] = useState(false);

  const handleClick = () => {
    // increment click counter by one each time button is clicked
    setClickCount(tally + 1);

    // document true if tally is divisible by 5
    const newTally = tally + 1;
    if (newTally % 5 === 0) {
      toggleFactor(true);
    } else toggleFactor(false);
    
  }

  return (
    <div>
      <h3>Count: {tally}</h3>
      <h3>Factor of Five? {factorOfFive.toString()}</h3>
      <button onClick={handleClick}>click this</button>
    </div>
  )

}

export default Counter;