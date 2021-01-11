import React, { createContext, useEffect, useState } from "react";
import dayOfYear from "../util/getDay";
import getTotalMiles from "../util/getTotalMiles";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [ahead, setAhead] = useState(true);
  const [date, setDate] = useState(dayOfYear());
  const [runs, setRuns] = useState([
    {
      id: "sdfjk",
      date: "1/1/21",
      miles: 2.29
    },
    {
      id: "sdgbt",
      date: "1/3/21",
      miles: 3.85
    },
    {
      id: "nhdxh",
      date: "1/5/21",
      miles: 1.3
    },
    {
      id: "mjfyu",
      date: "1/7/21",
      miles: 0.0
    },
    {
      id: "lebyu",
      date: "1/9/21",
      miles: 26.02
    }
  ]);
  const [totalMiles, setTotalMiles] = useState(getTotalMiles(runs));

  useEffect(() => {
    setTotalMiles(getTotalMiles(runs));
    console.log(totalMiles);
  }, [setRuns, totalMiles, runs]);

  useEffect(() => {
    setAhead(date < totalMiles ? true : false);
  }, [totalMiles]);
  return (
    <ThemeContext.Provider
      value={{
        ahead,
        setAhead,
        date,
        setDate,
        runs,
        setRuns,
        totalMiles,
        setTotalMiles
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
