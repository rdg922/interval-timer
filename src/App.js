import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [currentTimeout, setCurrentTimeout] = React.useState(setTimeout(0));
  const [paused, setPaused] = useState(false);
  // Suggested by Laurent
  React.useEffect(() => {
    if (counter > 0 && !paused) setCurrentTimeout(setTimeout(() => setCounter(counter - 1), 1000))
  }, [counter]);

  const setTimer = (seconds) => {
    if (counter != seconds) {
      clearTimeout(currentTimeout)
      setCounter(seconds);
    }
  }

  const getTime = () => {
    const seconds = (counter % 60);
    const minutes = Math.floor(counter / 60);
    return ((minutes > 9) ? (minutes) : ("0" + minutes)) + ":" + (seconds > 9 ? (seconds) : ("0" + seconds))
  }

  const onPause = () => {
    if (paused) {
      setCurrentTimeout(setTimeout(() => setCounter(counter - 1, 1000)))
    } else {
      clearTimeout(currentTimeout)
    }
    setPaused(!paused)
  }

  return (
    <div className="background">
      <div className="bg-circle-1" />
      <div className="bg-circle-2" />
      <div className="bg-circle-3" />

      <div className="main">

        {/* <div className="ball-4" />
        <div className="ball-1" /> */}
        {/* <div className="ball-1-shadow" /> */}
        {/* <div className="card"> */}

          <div className="card-content">
            <div className="card-top">
              <h1>{getTime()}</h1>
            </div>
            <div className="card-bottom">
              <button className="controls-timer" onClick={() => setTimer(50 * 60)}><p>50</p></button>
              <button className="controls-main" onClick={onPause}>
                {
                  (paused) ?
                    <i class="fa fa-play" /> :
                    <i class="fa fa-pause" />
                }
              </button>
              <button className="controls-timer" onClick={() => setTimer(20 * 60)}><p>20</p></button>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="ball-2" />
        <div className="ball-3" /> */}
      </div>
    </div >
  );
}

export default App;