import { CaretUpOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import React from "react";

type Props = {};

const PortfolioPerformer = (props: Props) => {
  return (
    <Row gutter={16}>
      <Col span={5}>
        <Card bordered={false}>
          <Statistic
            title="All-time profit"
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<PlusOutlined style={{ fontSize: 15 }} />}
            suffix="$"
          />
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={<CaretUpOutlined style={{ fontSize: 15 }} />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5} style={{ display: "flex" }}>
        <Card bordered={false} style={{ display: "flex" }}>
          <Statistic
            title="Worst Performer"
            value={"BTC"}
            precision={2}
            prefix={
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png?_=87f381d"
                width="24px"
              />
            }
          />
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={<CaretUpOutlined style={{ fontSize: 15 }} />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5} style={{ display: "flex" }}>
        <Card bordered={false} style={{ display: "flex" }}>
          <Statistic
            title="Worst Performer"
            value={"BTC"}
            precision={2}
            prefix={
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png?_=87f381d"
                width="24px"
              />
            }
          />
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={<CaretUpOutlined style={{ fontSize: 15 }} />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default PortfolioPerformer;
