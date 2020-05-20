import React from "react";

export class Item extends React.Component {
  render() {
    const { content } = this.props;
    return <div>{content}</div>;
  }
}
