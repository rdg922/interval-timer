import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(10000);
  const [currentTimeout, setCurrentTimeout] = React.useState(setTimeout(0));
  const [paused, setPaused] = useState(false);
  const [overrideTime, setOverrideTime] = useState(["00", "00", "00"]);
  const [oneTime, setOneTime] = useState(["00", "50", "00"]);
  const [twoTime, setTwoTime] = useState(["00", "10", "00"]);

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
    const hours = Math.floor(counter / 60 / 60);
    const minutes = Math.floor(counter / 60) - (hours * 60);
    const seconds = (counter % 60);

    let output = "";

    if (hours > 0) {
      output += ((hours > 9) ? (hours) : ("0" + hours)) + ":"
    }

    output += ((minutes > 9) ? (minutes) : ("0" + minutes)) + ":"
    output += (seconds > 9 ? (seconds) : ("0" + seconds))

    return output
  }

  const onPause = () => {
    if (paused) {
      setCurrentTimeout(setTimeout(() => setCounter(counter - 1, 1000)))
    } else {
      clearTimeout(currentTimeout)
    }
    setPaused(!paused)
  }

  const onButtonOnePress = () => {
    console.log(oneTime);
    setTimer((parseInt(oneTime[0]) * 60 * 60) + (parseInt(oneTime[1]) * 60) + parseInt(oneTime[2]));
  }

  const onButtonTwoPress = () => {
    setTimer((parseInt(twoTime[0]) * 60 * 60) + (parseInt(twoTime[1]) * 60) + parseInt(twoTime[2]));
  }

  const onOverideButton = () => {
    setTimer((parseInt(overrideTime[0] * 60 * 60) + (parseInt(overrideTime[1] * 60) + parseInt(overrideTime[2]))))
  }

  return (
    <div className="background">


      <div className="card">
        <div className="card-top">
          <h1>{getTime()}</h1>
        </div>

        <div className="card-bottom">
          <button className="controls-timer" onClick={onButtonOnePress}><p>1</p></button>
          <button className="controls-main" onClick={onPause}>
            {
              (paused) ?
                <i class="fa fa-play" /> :
                <i class="fa fa-pause" />
            }
          </button>
          <button className="controls-timer" onClick={onButtonTwoPress}><p>2</p></button>
        </div>


        <div className="timer-bar">

        </div>

        <div className="reset-timer top-button" >
          {/* <input value={overrideTime} onChange={(event) => setOverrideTime(event.target.value)}/> */}
          <div className="inputs">
            <input
              value={overrideTime[0]}
              type="number"
              maxlength="2"
              onChange={(event) => setOverrideTime([event.target.value, overrideTime[1], overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={overrideTime[1]}
              type="number"
              maxlength="2"
              onChange={(event) => setOverrideTime([overrideTime[0], event.target.value, overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={overrideTime[2]}
              type="number"
              maxlength="2"
              onChange={(event) => setOverrideTime([overrideTime[0], overrideTime[1], event.target.value])}
            />
          </div>
          <button onClick={onOverideButton}> <i className="fa fa-arrow-circle-right"></i></button>
        </div>

        <div className="timer-1 top-button" >
          <div className="inputs">
            <input
              value={oneTime[0]}
              type="number"
              maxlength="2"
              onChange={(event) => setOneTime([event.target.value, overrideTime[1], overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={oneTime[1]}
              type="number"
              maxlength="2"
              onChange={(event) => setOneTime([overrideTime[0], event.target.value, overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={oneTime[2]}
              type="number"
              maxlength="2"
              onChange={(event) => setOneTime([overrideTime[0], overrideTime[1], event.target.value])}
            />
          </div>
          <p>1</p>
        </div>

        <div className="timer-2 top-button" >
          <div className="inputs">
            <input
              value={twoTime[0]}
              type="number"
              maxlength="2"
              onChange={(event) => setTwoTime([event.target.value, overrideTime[1], overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={twoTime[1]}
              type="number"
              maxlength="2"
              onChange={(event) => setTwoTime([overrideTime[0], event.target.value, overrideTime[2]])}
            />
            <p>:</p>
            <input
              value={twoTime[2]}
              type="number"
              maxlength="2"
              onChange={(event) => setTwoTime([overrideTime[0], overrideTime[1], event.target.value])}
            />
          </div>
          <p>2</p>
        </div>

      </div>
    </div >
  );
}

export default App;
