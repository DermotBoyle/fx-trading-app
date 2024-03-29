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
import UrlTo from "./urltoselect";

class TradeUpdate extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      data,
      urlFrom,
      urlTo,
      interval,
      timeStamp,
      open,
      close,
      high,
      low,
      isLoading
    } = this.props;

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
    console.log(urlFrom);
    console.log(urlTo);

    const TradeDetails = (
      <div className="cardContainer">
        <CardHeader className="cardHeader">
          {urlFrom} &nbsp;
          <FontAwesomeIcon icon={faExchangeAlt} />
          &nbsp;
          {urlTo}
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
              {timeStamp[0]}
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

TradeUpdate.propTypes = {
  urlFrom: PropTypes.string,
  urlTo: PropTypes.string,
  open: PropTypes.string,
  close: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  timeStamp: PropTypes.string,
  interval: PropTypes.string,
  isLoading: PropTypes.bool
};

export default TradeUpdate;
