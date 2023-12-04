import React, { useState } from "react";
import Statistics from "./Statistics";
import Buttons from "./Buttons";
import StationSales from "./StationSales";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";
import List from "./List";

function Main() {
  const [showChart, setShowChart] = useState(true);

  return (
    <main className="ml-[115px] relative">
      <Statistics />
      <Buttons showChart={showChart} setShowChart={setShowChart} />

      {showChart ? <BarChart /> : <List />}

      <RadarChart />
      <StationSales />
    </main>
  );
}

export default Main;
