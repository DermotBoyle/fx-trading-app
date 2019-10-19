import React, { Component } from "react";
import { Button } from "shards-react";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import PropsDisplay from "./props-display";
import UrlFrom from "./select-automated";
import UrlTo from "./urltoselect";
import ForexData from "./forex.json";
import API from "./utils/api";
import Chart from "./chart-component";
require("dotenv").config();

class MainMenu extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      urlFrom: [],
      urlTo: [],
      open: [],
      close: [],
      high: [],
      low: [],
      timeStamp: null,
      data: ""
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChangeFrom = s => {
    let taco = s.label;
    this.setState({ urlFrom: taco }, () => console.log("state", this.state));
  };
  "";
  handleChangeTo = txt => {
    let burrito = txt.label;
    this.setState(
      {
        urlTo: burrito
      },
      () => console.log("state", this.state)
    );
  };

  handleSubmit = () => {
    const from = this.state.urlFrom;
    const to = this.state.urlTo;
    const API_KEY = process.env.API_KEY;

    const firstValue = "Time Series FX (5min)";
    const metaData = "Meta Data";
    const metaKey = "4. Last Refreshed";
    const metaOpen = "1. open";
    const metaHigh = "2. high";
    const metaLow = "3. low";
    const metaClose = "4. close";

    API.get(
      `query?function=FX_INTRADAY&from_symbol=${from}&to_symbol=${to}&interval=5min&apikey=${API_KEY}`
    ).then(res => {
      //const newArr = res.data[firstValue].slice(0, 5);
      let x = res.data[firstValue];
      const timeData = Object.entries(x)
        .slice(5, 25)
        .map(item => item[0]);

      const openData = Object.entries(x)
        .slice(5, 25)
        .map(item => item[1][metaOpen]);

      const highData = Object.entries(x)
        .slice(5, 25)
        .map(item => item[1][metaHigh]);

      const lowData = Object.entries(x)
        .slice(5, 25)
        .map(item => item[1][metaLow]);

      const closeData = Object.entries(x)
        .slice(5, 25)
        .map(item => item[1][metaClose]);

      this.setState(
        {
          timeStamp: timeData,
          open: openData,
          high: highData,
          low: lowData,
          close: closeData,
          data: [{ openData }, { highData }, { lowData }, { closeData }]
        },
        () => console.log(this.state.data)
      );
    });
  };

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
              value={this.state.urlTo}
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
          {this.state.timeStamp !== null ? (
            <PropsDisplay
              urlFrom={this.state.urlFrom}
              urlTo={this.state.urlTo}
              open={this.state.open}
              close={this.state.close}
              high={this.state.high}
              low={this.state.low}
              timeStamp={this.state.timeStamp}
            />
          ) : (
            <DataDisplay />
          )}
          <Chart
            open={this.state.open}
            close={this.state.close}
            high={this.state.high}
            low={this.state.low}
            x={this.state.timeStamp}
          />
        </div>
      </div>
    );
  }
}

export default MainMenu;
