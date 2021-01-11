import React from "react";

import { ReactComponent as StartLogo } from "../../public/start.svg";
import { ReactComponent as FinishLogo } from "../../public/finish.svg";
import { ReactComponent as RunnerLogo } from "../../public/runner.svg";
import { ReactComponent as SunLogo } from "../../public/sun.svg";

const ProgressBar = (props) => {
  const { ran, day, color } = props;

  const dayPercentage = Math.floor((day / 365) * 100);
  const ranPercentage = Math.floor((ran / 365) * 100);

  const containerStyle = {
    width: "100%",
    height: 100,
    marginTop: 15,
    backgroundColor: color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottom: "2px solid #000"
  };

  const backgroundStyle = {
    width: "99%",
    height: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "flex-end"
  };

  const contentStyle = {
    position: "relative",
    height: "100%",
    flex: 1
  };

  const sunStyle = {
    position: "absolute",
    left: dayPercentage + "%"
  };

  const runStyle = {
    position: "absolute",
    left: ranPercentage + "%",
    bottom: "-8px"
  };
  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}>
        <StartLogo height="70px" />
        <div style={contentStyle}>
          <span style={sunStyle}>
            <SunLogo height="54px" />
          </span>
          <span style={runStyle}>
            <RunnerLogo height="50px" />
          </span>
        </div>
        <FinishLogo height="70px" />
      </div>
    </div>
  );
};

export default ProgressBar;
