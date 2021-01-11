import React from "react";

//Styles
const rowStyle = {
  display: "flex"
};

const colStyle = {
  flex: 1
};

//Primitave table that displays a hearer and maps over stored runs to creat rows
const Runs = (props) => {
  //Destructure Props
  const { runs, setRuns } = props;

  const handleRemove = (e) => {
    //blocks page reload
    e.preventDefault();
    const newRuns = runs.filter((run) => run.id !== e.target.id);
    setRuns(newRuns);
  };

  return (
    <section>
      {/* //header Row  */}
      <header style={rowStyle}>
        <div style={colStyle}>Date</div>
        <div style={colStyle}>Miles</div>
        <div style={colStyle}></div>
      </header>
      {/* maps over each run in the runs prop and cratse a row in the table*/}
      {runs.map((run) => (
        <div style={rowStyle} key={run.id}>
          <div style={colStyle}>{run.date}</div>
          <div style={colStyle}>{run.miles}</div>
          <div style={colStyle}>
            <button
              id={run.id}
              onClick={(e) => {
                handleRemove(e);
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Runs;
