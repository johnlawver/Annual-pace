import React from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import ProgressBar from "./components/ProgressBar";
import MilageInput from "./components/MilageInput";
import Runs from "./components/Runs";
import "./styles.css";

export default function App() {
  const behindStyle = {
    backgroundColor: "#ff5800"
  };

  const aheadStyle = {
    backgroundColor: "#94c54b"
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { ahead, date, runs, setRuns, totalMiles } = context;
        return (
          <div className="App" style={ahead ? aheadStyle : behindStyle}>
            <div className="header">
              <ProgressBar color="#00c1ed" day={date} ran={totalMiles} />
            </div>
            <div className="content">
              <div>
                <h1>Racing the days {totalMiles}</h1>
                <h2>Can you run more miles than days in the year?</h2>
                <MilageInput />
                <Runs runs={runs} setRuns={setRuns} />
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
