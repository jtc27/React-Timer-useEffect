// https://www.youtube.com/watch?v=sWKz9aLovjY  hBlevs  33:09

// UseEffect lets us use code sometimes, not on every render
// callback funct / [array] (dependency array) if this data has changed, then callback funct

import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0)
    
  //useEffect(() => {
  // console.log('seconds', seconds)
    // window.setInterval(() => setSeconds(seconds+1), 1000);
  //}, [seconds]);  //only runs this if the value of 'seconds' changes 
  // it's called useEffect because it's a side effect

  // Using setTimeout, this works
  //useEffect(() => {
  //  console.log('first render', seconds)
  //  window.setTimeout(() => {
  //    console.log('tick', seconds);
  //    setSeconds(seconds+1);
  //  }, 1000);
  //}, [seconds]); 

  // Using setInterval, callback function
  useEffect(() => {
    console.log('first render', seconds)
    window.setInterval(() => {
      console.log('tick', seconds);
      setSeconds(seconds => seconds+1); // callback; uses the updated value of seconds
    }, 1000);
  }, []); 



  console.log('count', count)

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
