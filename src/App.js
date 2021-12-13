// https://www.youtube.com/watch?v=sWKz9aLovjY  hBlevs

// UseEffect lets us use code sometimes, not on every render
// callback funct / [array] (dependency array) if this data has changed, then callback funct

import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0)
    
  useEffect(() => {
    console.log('seconds', seconds)
  }, [seconds]);  //see the value of seconds, only when seconds changes

  console.log('count', count)

  //setSeconds(seconds + 1)

  return ( //JSX
    <div className="app">
      <button onClick={() => setSeconds(seconds + 1)}>inc seconds</button>
      <button onClick={() => setCount(count + 1)}>inc count</button>
      <div className='time-circle'>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div className="buttons">
        <button className="play-pause">
          <i className="fa fa-play fa-2x" />
        </button>
        <button className="play-pause">
          <i className="fa fa-pause fa-2x" />
        </button>``
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
