import React, { Component } from "react";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import Select from "./select-automated";
import ForexData from "./forex.json";

class MainMenu extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    console.log(this.props.List);
    return (
      <div className="MainMain">
        <div className="MainContainer">
          <div className="optionsInputContainer">
            <img className="exchange" src={Exchange}></img>

            <Select className="inputContainer" options={ForexData} />
          </div>
          <DataDisplay />
        </div>
      </div>
    );
  }
}

export default MainMenu;
