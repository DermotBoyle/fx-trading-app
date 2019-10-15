import React, { Component } from "react";
import TradeUpdate from "./card-props";

class PropsDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      urlFrom,
      urlTo,
      open,
      close,
      high,
      low,
      timeStamp,
      interval,
      isLoading
    } = this.props;

    return (
      <div className="dataPropsContainer">
        <TradeUpdate
          urlFrom={urlFrom}
          urlTo={urlTo}
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
