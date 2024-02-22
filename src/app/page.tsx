"use client";
import LineChart from "@/components/Chart/LineChart";
import MyAssets from "@/components/MyAssets/MyAssets";
import MyMainPortfolio from "@/components/MyMainPortfolio/MyMainPortfolio";
import PortfolioPerformer from "@/components/PortfolioPerformer/PortfolioPerformer";
import { AppContext, AppProvider } from "@/context/AppContext";
import React, { useContext } from "react";
import "chart.js/auto"; 
import Head from "next/head";

export default function Home() {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>

      <div id="container">
        <AppProvider>
          <MyMainPortfolio />
          <PortfolioPerformer />
          <LineChart />
          <MyAssets />
        </AppProvider>
      </div>
    </>
  );
}
