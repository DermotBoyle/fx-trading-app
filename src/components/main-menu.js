import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import Select from "./select-automated";

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
    return (
      <div className="MainMain">
        <div className="MainContainer">
          <div className="optionsInputContainer">
            <img className="exchange" src={Exchange}></img>
            <InputGroup>
              <InputGroupAddon addonType="prepend"></InputGroupAddon>
              <Input
                className="OptionsInputField"
                placeholder="Search FX/Crypto/Stock"
              />
            </InputGroup>
            <Select />
          </div>
          <DataDisplay />
        </div>
      </div>
    );
  }
}

export default MainMenu;
