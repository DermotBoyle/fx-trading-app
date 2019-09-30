import React, { Component } from "react";
import Ipad from "../images/ipad.svg";
import Pips from "../images/pips.svg";
import Reports from "../images/reports.svg";
import "../App.scss";

class IntroGrid extends Component {
  render() {
    return (
      <div className="introContainer">
        <div className="r1c1">
          <img className="ipad" alt="ipad trading logo" src={Ipad}></img>
          <h3 className="introTitle">What we do</h3>
          <p className="introDescription">
            A desktop app designed to make it easy for you to keep an eye on the
            markets. We offer live data from the forex, cryptocurrency and stock
            markets.
          </p>
        </div>
        <div className="r1c2">
          <img
            className="pips"
            alt="pips inside magnifying glass"
            src={Pips}
          ></img>

          <h3 className="introTitle">Services we offer</h3>
          <p className="introDescription">
            Find and save your currency pairs or stock choices. Place alarms for
            certain price action levels so that you will always be informed of
            key market movements that are of interest to you.
          </p>
        </div>
        <div className="r1c3">
          <img className="reports" src={Reports}></img>

          <h3 className="introTitle">Track your progress</h3>
          <p className="introDescription">
            We know how important it is know to keep track of our winners and
            the ones that turned against us. Keep your journal with us and
            improve your win ratio by collecting your data.
          </p>
        </div>
      </div>
    );
  }
}

export default IntroGrid;
