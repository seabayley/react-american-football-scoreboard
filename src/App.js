//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState, useEffect } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  })

  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let secondsRemainder = Math.floor(seconds % 60);
    let minStr = minutes.toString().padStart(2, '0');
    let hourStr = hours.toString().padStart(2, '0');
    let secRStr = secondsRemainder.toString().padStart(2, '0');
    return (`${hourStr}:${minStr}:${secRStr}`);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{secondsToMinutes(seconds)}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore((homeScore + 7))}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore((homeScore + 3))}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore((awayScore + 7))}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore((awayScore + 3))}>Away Field Goal </button>
        </div>
      </section>
    </div>
  );
}

export default App;
