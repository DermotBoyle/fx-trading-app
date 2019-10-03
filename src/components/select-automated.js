import React, { Component } from "react";
import Select from "react-select";

class Auto extends Component {
  render() {
    const List = this.props;
    console.log(List);
    return (
      <div>
        <Select options={List} />
      </div>
    );
  }
}
export default Auto;
