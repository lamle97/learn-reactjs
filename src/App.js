import React from "react";
import { UID, uid } from "react-uid";
import "./App.css";
import { Header, InputComponent, ItemList, Item } from "./components";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }
  handleValue = (e) => {
    this.setState({
      [e.target.value]: e.target.value,
    });
  };

  addItem = (taskName) => {
    const newTask = {
      text: taskName,
      index: Date.now(),
    };
    if (taskName !== null && taskName !== "") {
      //Spread syntax in array literals
      //push newTask into items list
      const items = [...this.state.items, newTask];
      this.setState({ items });
    }
  };
  // renderItem() {
  //   const itemComponents = [];
  //   for (let i = 0; i < 5; i++) {
  //     itemComponents.push(<Item content={`item ${i}`}></Item>);
  //   }
  //   return itemComponents;

  render() {
    return (
      <div>
        <Header title="Hello Phuong" />
        <InputComponent
          addItem={this.addItem}
          typeButton="submit"
          placeholder="What you need to do?"
          ref="taskInput"
          text="Add"
          onChangeText={this.handleValue}
        ></InputComponent>
        {/* <ButtonComponent type="submit" text="Add"></ButtonComponent> */}
        <ItemList entries={this.state.items}></ItemList>
      </div>
    );
  }
}

export default App;
