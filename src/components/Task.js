import React from "react";

const Task = (props) => {
  const { important, text, date, id, active, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <span style={important ? { color: "red" } : null}>{text}</span> - do{" "}
        {date}{" "}
        <button onClick={() => props.clickDone(id)}>Zostało zrobione</button>
        <button onClick={() => props.clickDelete(id)}>X</button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div>
        <span>{text}</span>
        <em> (Zrobić do {date})</em>{" "}
        <button onClick={() => props.clickDelete(id)}>X</button>
        <br />
        <span>Wykonano: {finish}</span>
      </div>
    );
  }
};

export default Task;
