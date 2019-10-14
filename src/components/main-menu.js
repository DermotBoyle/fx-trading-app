import React, { Component } from "react";
import { Button } from "shards-react";
import Exchange from "../images/exchange.svg";
import DataDisplay from "./data-display";
import PropsDisplay from "./props-display";
import UrlFrom from "./select-automated";
import UrlTo from "./urltoselect";
import ForexData from "./forex.json";
import API from "./utils/api";
require("dotenv").config();

class MainMenu extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedFrom: null,
      selectedTo: null,
      urlFrom: "",
      urlTo: "",
      open: [],
      close: [],
      high: [],
      low: [],
      timeStamp: null,
      data: []
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChangeFrom = txt => {
    console.log(txt);

    this.setState({ urlFrom: txt }, () => console.log("state", this.state));
  };
  "";
  handleChangeTo = txt => {
    console.log(txt);
    this.setState(
      {
        urlTo: txt
      },
      () => console.log("state", this.state)
    );
  };

  handleSubmit = () => {
    const from = this.state.urlFrom.label;
    const to = this.state.urlTo.label;
    const API_KEY = process.env.API_KEY;
    var coeff = 1000 * 60 * 5;
    var date = new Date();
    var year = new Date(Math.round(date.getTime() / coeff) * coeff)
      .toISOString()
      .split("T")[0];

    var day = new Date(Math.floor(date.getTime() / coeff) * coeff)
      .toUTCString()
      .split(" ")[4];
    const timeStamp = `${year} ${day}`;
    const firstValue = "Time Series FX (5min)";
    const metaData = "Meta Data";
    const metaKey = "4. Last Refreshed";
    const extfrom = "2. From Symbol";
    const extto = "3. To Symbol";

    API.get(
      `query?function=FX_INTRADAY&from_symbol=${from}&to_symbol=${to}&interval=5min&apikey=${API_KEY}`
    ).then(res => {
      this.setState({
        data: [...this.state.data],
        timeStamp: [...this.state.data, res.data[metaData][metaKey]],
        open: [...this.state.data, res.data[firstValue][timeStamp]["1. open"]],
        close: [
          ...this.state.data,
          res.data[firstValue][timeStamp]["4. close"]
        ],
        low: [...this.state.data, res.data[firstValue][timeStamp]["3. low"]],
        high: [...this.state.data, res.data[firstValue][timeStamp]["2. high"]],
        from: [...this.state.data, res.data[metaData][extfrom]],
        to: [...this.state.data, res.data[metaData][extto]]
      });
    });
    console.log(this.state.timeStamp);
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
          {this.state.data ? (
            <PropsDisplay
              urlfrom={this.state.urlFrom}
              urlTo={this.state.urlTo}
              open={this.state.open}
              close={this.state.close}
              high={this.state.high}
              low={this.state.low}
              timeStamp={this.state.timeStamp}
            />
          ) : (
            <DataDisplay
              urlfrom={this.state.urlFrom}
              urlTo={this.state.urlTo}
              open={this.state.open}
              close={this.state.close}
              high={this.state.high}
              low={this.state.low}
              timeStamp={this.state.timeStamp}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MainMenu;
