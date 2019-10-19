import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryCandlestick
} from "victory";

function Chart(props) {
  console.log(props);
  return (
    <div className="victory">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: "time" }}
      >
        <VictoryAxis /*tickFormat={t => `${t.getDate()}/${t.getMonth()}`}*/ />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          width="15"
        />
      </VictoryChart>
    </div>
  );
}

export default Chart;
