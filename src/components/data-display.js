import React, { Component } from "react";
import Trade from "./card-data";
import API from "./utils/api";
require("dotenv").config();
const axios = require("axios");

class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      isLoading: false,
      from: null,
      to: null,
      open: [],
      close: [],
      high: [],
      low: [],
      timeStamp: null,
      interval: null,
      isLoading: null
    };
  }

  async componentDidMount() {
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
    const from = "2. From Symbol";
    const to = "3. To Symbol";

    const API_KEY = process.env.API_KEY;
    let tradeData = await API.get(
      `query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=${API_KEY}`
    );
    this.setState({
      timeStamp: [...this.state.data, tradeData.data[metaData][metaKey]],
      open: [
        ...this.state.data,
        tradeData.data[firstValue][timeStamp]["1. open"]
      ],
      close: [
        ...this.state.data,
        tradeData.data[firstValue][timeStamp]["4. close"]
      ],
      low: [
        ...this.state.data,
        tradeData.data[firstValue][timeStamp]["3. low"]
      ],
      high: [
        ...this.state.data,
        tradeData.data[firstValue][timeStamp]["2. high"]
      ],
      from: [...this.state.data, tradeData.data[metaData][from]],
      to: [...this.state.data, tradeData.data[metaData][to]]
    });
    /*let mydata = this.state.data;
    console.log(mydata);*/
  }

  render() {
    const {
      from,
      to,
      open,
      close,
      high,
      low,
      timeStamp,
      interval,
      isLoading
    } = this.state;

    return (
      <div className="dataContainer">
        <Trade
          from={from}
          to={to}
          open={open}
          close={close}
          high={high}
          low={low}
          timeStamp={timeStamp}
          interval={interval}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default DataDisplay;
