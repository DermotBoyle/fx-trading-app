import React, { Component } from "react";
import Select from "react-select";

class Auto extends Component {
  render() {
    console.log(this.props.options.List);

    return (
      <div>
        <Select
          className="inputContainer"
          id="from"
          value={this.props.options.List}
          options={this.props.options.List}
        />
        <Select
          className="InputContainer"
          id="to"
          value={this.props.options.List}
          options={this.props.options.List}
        />
      </div>
    );
  }
}
export default Auto;
