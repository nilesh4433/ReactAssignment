import React from "react";

export default class DemoForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="button"
          value="Red"
          onClick={() => {
            this.props.newHandleColor("red");
          }}
        />
        <input
          type="button"
          value="Blue"
          onClick={() => {
            this.props.newHandleColor("blue");
          }}
        />
      </form>
    );
  }
}
