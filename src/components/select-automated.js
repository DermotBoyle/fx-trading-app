import React, { Component } from "react";
import Select from "react-select";

class Auto extends Component {
  render() {
    return (
      <div>
        <Select
          className="inputContainer"
          id="from"
          options={this.props.options.List}
          onChange={this.props.handleChangeFrom}
        />
        <Select
          className="InputContainer"
          id="to"
          options={this.props.options.List}
          onChange={this.props.handleChangeTo}
        />
      </div>
    );
  }
}
export default Auto;
