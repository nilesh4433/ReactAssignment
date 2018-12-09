import React from "react";
import DemoForm from "./Form";

export default class ChildForm extends React.Component {
  render() {
    return (
      <div>
        <DemoForm newHandleColor={this.props.newHandleColor} />;
      </div>
    );
  }
}
