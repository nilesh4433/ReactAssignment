import React from "react";

export default class DemoHeader extends React.Component {
  render() {
    return <h1 style={{ color: this.props.color }}>Hello World</h1>;
  }
}
