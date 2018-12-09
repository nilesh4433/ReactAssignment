import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildForm from "./ChildForm";
import DemoHeader from "./HeaderColor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "orange"
    };
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor(newColor) {
    console.log(this);
    this.setState({
      color: newColor
    });
  }

  render() {
    return (
      <div className="App">
        <DemoHeader color={this.state.color} />
        <ChildForm newHandleColor={this.handleColor} />
      </div>
    );
  }
}

export default App;
