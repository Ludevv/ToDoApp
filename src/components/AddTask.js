import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  handleDate = (e) => {
    const date = e.target.value;
    this.setState({
      date,
    });
  };

  handleText = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handleCheck = (e) => {
    const checked = e.target.checked;
    this.setState({
      checked,
    });
  };

  handleClick = (e) => {
    const { text, checked, date } = this.state;
    const add = this.props.add(text, date, checked);
    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10),
      });
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div>
        <input
          type="text"
          placeholder="dodaj zadanie..."
          value={this.state.text}
          onChange={this.handleText}
        ></input>{" "}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheck}
        ></input>{" "}
        <label>Priorytet</label>
        <br />
        <br />
        <label>Do kiedy zrobić </label>
        <input
          type="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
          onChange={this.handleDate}
        ></input>
        <br />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
