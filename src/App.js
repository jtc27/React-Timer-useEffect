// https://www.youtube.com/watch?v=sWKz9aLovjY  hBlevs  40:19

// UseEffect lets us use code sometimes, not on every render
// callback funct / [array] (dependency array) if this data has changed, then callback funct

import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
    

  // Using setInterval, callback function
  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSeconds(seconds => seconds+1); // callback; uses the updated value of seconds
      }, 1000);
      return () => window.clearInterval(id); //cleanup function
    }
    return undefined 
  }, [isRunning]); 

  return ( //JSX
    <div className="app">
      <button onClick={() => setSeconds(seconds + 1)}>inc seconds</button>
      <div className='time-circle'>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div className="buttons">
        {isRunning 
        ?  (
          <button className="play-pause" onClick={() => {
          setIsRunning(false);
          }}>
            <i className="fa fa-pause fa-2x" />
          </button>
        )
        : (
          <button className="play-pause" 
          onClick={() => setIsRunning(true)}>
            <i className="fa fa-play fa-2x" />
          </button>
          )
        }
          <button 
          disabled={!isRunning}
          className='reset' onClick={() => { 
          setIsRunning(false);
          setSeconds(0);      
          }}>Reset
          </button>        
      </div>
    </div>
  );
}

export default App;
