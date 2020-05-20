import React from "react";

export class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.ref = "";
  }
  handleChangeText = (e) => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      return onChangeText(e);
    }
  };

  handleSubmit = (e) => {
    //refs =[key: string]
    const taskName = this.refs.taskInput.value;
    //prevent sent e to server
    e.preventDefault();
    this.props.addItem(taskName);
    //reset and focus again on input
    this.refs.taskInput.value = "";
    this.refs.taskInput.focus();
  };

  render() {
    const { placeholder, typeButton, text } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder={placeholder}
          ref="taskInput"
          onChange={this.handleChangeText}
        ></input>
        <button type={typeButton}>{text}</button>
      </form>
    );
  }
}
