import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.task.filter((task) => task.active);
  if (active.length > 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  const deactive = props.task.filter((task) => !task.active);
  if (deactive.length > 2) deactive.sort((a, b) => b.finishDate - a.finishDate);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      clickDone={props.clickDone}
      clickDelete={props.clickDelete}
    />
  ));
  const deactiveTasks = deactive.map((task) => (
    <Task
      key={task.id}
      task={task}
      clickDone={props.clickDone}
      clickDelete={props.clickDelete}
    />
  ));

  return (
    <React.Fragment>
      <hr />
      {activeTasks.length ? (
        <h2>Zadania do zrobienia:</h2>
      ) : (
        <h2>Nie masz nic do zrobienia :)</h2>
      )}

      {activeTasks}
      <hr />
      <h2> Zadania zrobione ({deactiveTasks.length})</h2>
      {deactiveTasks.length > 5 && <span>Wyświetlono 5 ostatnich tasków</span>}
      {deactiveTasks.slice(0, 5)}
    </React.Fragment>
  );
};

export default TaskList;
