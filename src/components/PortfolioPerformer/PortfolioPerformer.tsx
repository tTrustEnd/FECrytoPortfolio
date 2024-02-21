import { AppContext } from "@/context/AppContext";
import { Coin } from "@/type/type";
import {
  CaretDownFilled,
  CaretUpOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import React, { useContext } from "react";

type Props = {};

const PortfolioPerformer = (props: Props) => {
  const {
    listCoins,
    setListCoins,
    myCoins,
    setMyCoins,
    coinSelected,
    setcoinSelected,
  }: any = useContext(AppContext);

  const data = myCoins?.map((item: any, index: number) => {
    return {
      key: index,
      name: item?.state,
      Price: listCoins?.find((coins: Coin) => {
        return coins.name === item?.state;
      })?.current_price,
      Holdings: item?.quantity,
      AvgBuyPrice: item?.AvgPurchasePrice,
      Profit_Loss: null,
      img: item?.item?.image,
      symbol: item?.item?.symbol,
    };
  });
  let allprofit: number = 0;
  let allprofitPer: number = 0;
  let coinBest: any = {};
  let coinWorst: any = {};
  let max: number = 0;
  let min = 10000000000000;
  data?.map((item: any) => {
    allprofit += (item.Price - item.AvgBuyPrice) * item.Holdings;
    allprofitPer +=
      (((item.Price - item.AvgBuyPrice) * item.Holdings) / item.AvgBuyPrice) *
      100;
    if ((item.Price - item.AvgBuyPrice) * item.Holdings >= max) {
      max = allprofitPer;
      coinBest = item;
    }
    if ((item.Price - item.AvgBuyPrice) * item.Holdings < min) {
      min = allprofitPer;
      coinWorst = item;
    }
  });
  return (
    <Row gutter={24}>
      <Col span={5} sm={12} lg={8} md={12}>
        <Card bordered={false}>
          <Statistic
            title="All-time profit"
            value={allprofit}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<PlusOutlined style={{ fontSize: 15 }} />}
            suffix="$"
          />
          <Statistic
            value={allprofitPer}
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={<CaretUpOutlined style={{ fontSize: 15 }} />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5} sm={12} lg={8} md={12}>
        <Card bordered={false}>
          <Statistic
            title="Worst Performer"
            value={coinBest?.symbol?.toUpperCase()}
            precision={2}
            prefix={<img src={`${coinBest?.img}`} width="24px" />}
          />
          <Statistic
            value={
              (((coinBest.Price - coinBest.AvgBuyPrice) * coinBest.Holdings) /
                coinBest.AvgBuyPrice) *
              100
            }
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={
              coinBest.Price - coinBest.AvgBuyPrice >= 0 ? (
                <CaretUpOutlined style={{ fontSize: 15 }} />
              ) : (
                <CaretDownFilled style={{ fontSize: 15, color: "red" }} />
              )
            }
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5} sm={12} lg={8} md={12}>
        <Card bordered={false} style={{ display: "flex" }}>
          <Statistic
            title="Worst Performer"
            value={coinWorst?.symbol?.toUpperCase()}
            precision={2}
            prefix={<img src={`${coinWorst?.img}`} width="24px" />}
          />
          <Statistic
            value={
              (((coinWorst.Price - coinWorst.AvgBuyPrice) *
                coinWorst.Holdings) /
                coinWorst.AvgBuyPrice) *
              100
            }
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={
              coinWorst.Price - coinWorst.AvgBuyPrice >= 0 ? (
                <CaretUpOutlined style={{ fontSize: 15 }} />
              ) : (
                <CaretDownFilled style={{ fontSize: 15, color: "red" }} />
              )
            }
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default PortfolioPerformer;
