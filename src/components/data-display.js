import React, { Component } from "react";
import Trade from "./card-data";
import API from "./utils/api";
require("dotenv").config();

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
      isLoading: null,
      urlFrom: "",
      urlTo: ""
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
    const urlFrom = this.state.urlFrom;
    const urlTo = this.state.urlTo;

    const API_KEY = process.env.API_KEY;

    let tradeData = await API.get(
      `query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=${API_KEY}`
    );
    this.setState({
      data: [...this.state.data],
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
      isLoading,
      data
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
