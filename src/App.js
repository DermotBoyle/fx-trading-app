import React, { Component } from "react";
import NavBar from "./components/navbar";
import IntroGrid from "./components/intro-grid";
import MainMenu from "./components/main-menu";

import "./App.scss";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Home">
        <NavBar style={{ backgroundColor: "#07041B" }} />
        <div className="Container">
          <IntroGrid />
        </div>
        <MainMenu />
      </div>
    );
  }
}

export default App;
