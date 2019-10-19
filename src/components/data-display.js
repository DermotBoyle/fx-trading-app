import React, { Component } from "react";
import Trade from "./card-data";
import API from "./utils/api";
require("dotenv").config();

class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: false,
      from: null,
      to: null,
      open: [],
      close: [],
      high: [],
      low: [],
      timeStamp: null,
      interval: null,
      isLoading: null,
      urlFrom: "",
      urlTo: ""
    };
  }

  async componentDidMount() {
    const firstValue = "Time Series FX (5min)";
    const metaData = "Meta Data";
    const API_KEY = process.env.API_KEY;

    let tradeData = await API.get(
      `query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=${API_KEY}`
    );
    let y = Object.entries(tradeData.data[metaData])
      .slice(0, 10)
      .map(item => item);
    let toData = y[2];
    toData = toData[1];
    let fromData = y[1];
    fromData = fromData[1];
    let timeData = y[3];
    timeData = timeData[1];
    let x = Object.entries(tradeData.data[firstValue])
      .slice(0, 10)
      .map(item => item[1]);
    let openArr = [];
    let closeArr = [];
    let lowArr = [];
    let highArr = [];
    for (let item in x) {
      openArr.push(x[item]["1. open"]);
      closeArr.push(x[item]["4. close"]);
      lowArr.push(x[item]["3. low"]);
      highArr.push(x[item]["2. high"]);
    }

    this.setState({
      open: openArr,
      close: closeArr,
      high: highArr,
      low: lowArr,
      timeStamp: timeData,
      from: fromData,
      to: toData
    });
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
      <div className="dataContainer" id="dataStateContainer">
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
