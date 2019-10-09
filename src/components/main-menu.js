import React, { Component } from "react";
import { Button } from "shards-react";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import UrlFrom from "./select-automated";
import UrlTo from "./urltoselect";
import ForexData from "./forex.json";
import API from "./utils/api";

class MainMenu extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedFrom: null,
      selectedTo: null,
      urlFrom: "",
      urlTo: ""
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChangeFrom = txt => {
    console.log(txt);

    this.setState({ urlFrom: txt });
    console.log(this.state.urlFrom);
  };

  handleChangeTo = txt => {
    console.log(txt);
    this.setState({
      urlTo: txt
    });
    console.log(this.state.urlTo);
  };

  handleSubmit() {
    console.log("here");
    const urlFrom = this.state.urlFrom;
    const urlTo = this.state.urlTo;
    const API_KEY = process.env.API_KEY;
    require("dotenv").config();
    API.get(
      `query?function=FX_INTRADAY&from_symbol=${urlFrom}&to_symbol=${urlTo}&interval=5min&apikey=${API_KEY}`
    );
    this.setState({
      selectedFrom: this.state.selectedFrom,
      selectedTo: this.state.selectedTo
    });
    console.log(this.state.selectedFrom);
  }

  render() {
    return (
      <div className="MainMain">
        <div className="MainContainer">
          <div className="optionsInputContainer">
            <img className="exchange" src={Exchange}></img>

            <UrlFrom
              className="inputContainer"
              urlFrom={this.state.urlFrom}
              value={this.state.urlFrom}
              onChange={e => this.handleChangeFrom(e)}
              options={ForexData}
            />
            <UrlTo
              className="inputContainer"
              urlTo={this.state.urlTo}
              value={this.state.urlFrom}
              onChange={e => this.handleChangeTo(e)}
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
