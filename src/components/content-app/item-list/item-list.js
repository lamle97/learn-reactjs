//using hook = useState
import React from "react";
import { Item } from "./item";

export class ItemList extends React.Component {
  createTasks = (item) => {
    return <li key={item.index}>{item.text}</li>;
  };
  render() {
    const { entries } = this.props;
    const itemList = entries.map(this.createTasks);

    return <ul className="itemList">{itemList}</ul>;
  }
}
