import React, { Component } from "react";
import Select from "react-select";

class UrlTo extends Component {
  handleChange = e => {
    console.log(e);
    this.setState = {
      urlTo: e
    };
  };

  render() {
    return (
      <div>
        <Select
          className="inputContainer"
          id="urlFrom"
          options={this.props.options.List}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
export default UrlTo;
