"use client";
// import LineChart from "@/components/Chart/LineChart";
import MyAssets from "@/components/MyAssets/MyAssets";
import MyMainPortfolio from "@/components/MyMainPortfolio/MyMainPortfolio";
import PortfolioPerformer from "@/components/PortfolioPerformer/PortfolioPerformer";
import { AppContext, AppProvider } from "@/context/AppContext";
import React, { useContext } from "react";
// import "chart.js/auto"; // Importing 'chart.js/auto' for Chart.js version 3.x

export default function Home() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
      <div id="container">
        <AppProvider>
          <MyMainPortfolio />
          <PortfolioPerformer />
          {/* <LineChart /> */}
          <MyAssets />
        </AppProvider>
      </div>
    </>
  );
}
