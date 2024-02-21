"use client";
import MyAssets from "@/components/MyAssets/MyAssets";
import MyMainPortfolio from "@/components/MyMainPortfolio/MyMainPortfolio";
import PortfolioPerformer from "@/components/PortfolioPerformer/PortfolioPerformer";
import { AppContext, AppProvider } from "@/context/AppContext";
import React, { useContext, useState } from "react";

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
          <MyAssets />
        </AppProvider>
      </div>
    </>
  );
}
