import MyAssets from "@/components/MyAssets/MyAssets";
import MyMainPortfolio from "@/components/MyMainPortfolio/MyMainPortfolio";
import PortfolioPerformer from "@/components/PortfolioPerformer/PortfolioPerformer";
import React from "react";

export default function Home() {
  return (
    <div id="container">
    <MyMainPortfolio/>
    <PortfolioPerformer/>
    <MyAssets/>
    </div>
  );
}
