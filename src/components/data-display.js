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
      open: null,
      close: null,
      high: null,
      low: null,
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

    var day = new Date(Math.round(date.getTime() / coeff) * coeff)
      .toLocaleTimeString("en-UK", { timeZone: "UK/London" })
      .split(" ")[0];
    console.log(day);

    const searchValue = `${year} ${day}`;
    const firstValue = "Time Series FX (5min)";

    const API_KEY = process.env.API_KEY;
    let tradeData = await API.get(
      `query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=${API_KEY}`
    );
    this.setState({
      data: [
        ...this.state.data,
        tradeData.data[firstValue]
        /*"2019-10-01 15:40:00"*/
      ]
    });
    let mydata = this.state.data;
    console.log(mydata);
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

    const TradeData = this.state.data;

    var NewData = TradeData;

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
