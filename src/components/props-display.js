import React, { Component } from "react";
import TradeUpdate from "./card-props";

class PropsDisplay extends Component {
  constructor() {
    super();
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
    } = this.props;

    return (
      <div className="dataContainer">
        <TradeUpdate
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

export default PropsDisplay;
