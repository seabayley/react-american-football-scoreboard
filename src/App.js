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
  const [currentDown, setCurrentDown] = useState(0);
  const [currentQuarter, setCurrentQuarter] = useState(0);
  const [currentYtg, setCurrentYtg] = useState(0);
  const [currentYards, setCurrentYards] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  })

  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsRemainder = Math.floor(seconds % 60);
    let minStr = minutes.toString().padStart(2, '0');
    let secRStr = secondsRemainder.toString().padStart(2, '0');
    return (`${minStr}:${secRStr}`);
  }

  function changeScore(team, amount) {
    if (team === 'home') {
      setHomeScore(homeScore + amount);
    }
    else if (team === 'away') {
      setAwayScore(awayScore + amount);
    }
  }

  function nextDown() {
    if (currentDown === 4) {
      setCurrentDown(1);
    }
    else {
      setCurrentDown(currentDown + 1);
    }

  }

  function nextQuarter() {
    if (currentQuarter === 4) {
      setCurrentQuarter(1);
    }
    else {
      setCurrentQuarter(currentQuarter + 1);
    }
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
        <BottomRow props={[currentDown, currentQuarter, currentYards, currentYtg]} />
      </section>
      <section className="buttons">
        <div className="boardButtons">
          <button className="down_button" onClick={() => nextDown()}>Current Down</button>
          <button className="down_button" onClick={() => setCurrentYtg(currentYtg + 1)}>Yards to Go</button>
          <button className="down_button" onClick={() => setCurrentYards(currentYards + 1)}>Ball On</button>
          <button className="down_button" onClick={() => nextQuarter()}>Quarter</button>
        </div>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => changeScore('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => changeScore('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => changeScore('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => changeScore('away', 3)}>Away Field Goal </button>
        </div>
      </section>
    </div>
  );
}

export default App;
