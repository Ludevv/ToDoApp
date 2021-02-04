import React, { Component, Fragment } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    task: [
      {
        id: 0,
        text: "zagraj w wiedźmina",
        date: "2021-02-14",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zagraj w spidermana",
        date: "2021-05-06",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "zagraj w last of us",
        date: "2021-03-31",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "zagraj w ghosta",
        date: "2021-01-31",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "zagraj w residenta",
        date: "2021-05-14",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "zagraj w wago",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  handleClick = (id) => {
    const tasks = [...this.state.task];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      task: tasks,
    });
  };

  handleDelete = (id) => {
    const task = this.state.task.filter((task) => task.id !== id);

    this.setState({
      task,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.state.task.length,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };

    let tasks = [...this.state.task];
    tasks = tasks.concat(task);

    this.setState({
      task: tasks,
    });

    return true;
  };

  render() {
    return (
      <Fragment>
        <AddTask add={this.addTask} />
        <TaskList
          task={this.state.task}
          clickDone={this.handleClick}
          clickDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

export default App;
