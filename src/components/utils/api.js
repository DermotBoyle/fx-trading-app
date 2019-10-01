import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  responseType: "json"
});
