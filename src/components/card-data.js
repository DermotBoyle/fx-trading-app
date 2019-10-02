import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react";
import PropTypes from "prop-types";

class Trade extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      from,
      to,
      interval,
      timeStamp,
      open,
      close,
      high,
      low,
      isLoading
    } = this.props;

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    const TradeDetails = (
      <div>
        <CardHeader>
          {from}
          {to}
        </CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>{interval}</CardTitle>
          <ol>
            <li>{open}</li>
            <li>{close}</li>
            <li>{high}</li>
            <li>{low}</li>
            <li>{timeStamp}</li>
          </ol>
        </CardBody>
        <CardFooter></CardFooter>
      </div>
    );

    return (
      <div className="CardDataContainer">
        <Card style={{ maxWidth: "300px" }}>
          {isLoading ? loadingMessage : TradeDetails}
        </Card>
      </div>
    );
  }
}

Trade.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  open: PropTypes.array,
  close: PropTypes.array,
  high: PropTypes.array,
  low: PropTypes.array,
  timeStamp: PropTypes.array,
  interval: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Trade;
