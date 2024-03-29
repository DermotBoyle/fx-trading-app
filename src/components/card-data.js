import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faDoorOpen,
  faDoorClosed,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Candles from "../images/candlestick.svg";
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
      <div className="cardContainer">
        <CardHeader className="cardHeader">
          {from} &nbsp;
          <FontAwesomeIcon icon={faExchangeAlt} />
          &nbsp;
          {to}
        </CardHeader>
        <div className="candleContainer">
          <CardImg src={Candles} />
        </div>
        <CardBody>
          <CardTitle>{interval}</CardTitle>
          <ul style={{ listStyle: "none" }}>
            <li>
              <FontAwesomeIcon icon={faDoorOpen} />
              &nbsp;
              {open[0]}
            </li>
            <li>
              <FontAwesomeIcon icon={faDoorClosed} />
              &nbsp;
              {close[0]}
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
              &nbsp;
              {high[0]}
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
              &nbsp;
              {low[0]}
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              &nbsp;
              {timeStamp}
            </li>
          </ul>
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
  timeStamp: PropTypes.string,
  interval: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Trade;
