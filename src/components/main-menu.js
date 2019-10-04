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
      dropdownOpen: false,
      selectedFrom: null,
      selectedTo: null
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChangeFrom() {
    this.setState(
      {
        selectedFrom: this.state.selectedFrom
      },
      () => console.log(this.state.selectedFrom)
    );
  }

  render() {
    return (
      <div className="MainMain">
        <div className="MainContainer">
          <div className="optionsInputContainer">
            <img className="exchange" src={Exchange}></img>

            <Select
              className="inputContainer"
              value={this.state.selectedFrom}
              value={this.state.selectedTo}
              onChange={this.handleChangeTo}
              OnChange={this.handleChangeFrom}
              options={ForexData}
            />
          </div>
          <DataDisplay />
        </div>
      </div>
    );
  }
}

export default MainMenu;
