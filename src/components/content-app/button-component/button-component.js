import React from "react";

export class ButtonComponent extends React.Component {
  render() {
    const { text, type } = this.props;
    return <button type={type}>{text}</button>;
  }
}
