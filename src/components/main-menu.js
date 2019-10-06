import React, { Component } from "react";
import { Button } from "shards-react";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import Select from "./select-automated";
import ForexData from "./forex.json";
import api from "./utils/api";

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      urlFrom: null,
      urlTo: null
    };

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
    console.log(this.state.selectedFrom);
  }

  handleChangeTo() {
    this.setState(
      {
        selectedTo: this.state.selectedTo
      },
      () => console.log(this.state.selectedTo)
    );
  }

  handleSubmit() {
    const urlFrom = this.state.urlFrom;
    const urlTo = this.state.urlTo;
    const API_KEY = process.env.API_KEY;
    import API from "./utils/api";
    require("dotenv").config();
    api.get(
      `query?function=FX_INTRADAY&from_symbol=${urlFrom}&to_symbol=${urlTo}&interval=5min&apikey=${API_KEY}`
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
            <Button
              className="submitButton"
              label="here"
              onClick={this.handleSubmit}
            >
              Get Quote!
            </Button>
          </div>

          <DataDisplay />
        </div>
      </div>
    );
  }
}

export default MainMenu;
