"use client";
import React, { useContext, useState } from "react";
import styles from "./MyAssets.module.css";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import MdAddTransition from "../Modal/MdAddTransition";
import MdRemoveCoin from "../Modal/MdRemoveCoin";
import { Coin } from "@/type/type";
import { AppContext } from "@/context/AppContext";
type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  Price: number;
  Holdings: number;
  AvgBuyPrice: number;
  Profit_Loss: number;
}
const MyAssets = (props: Props) => {
  const [isMAddTransitionOpen, setIsMAddTransition] = useState<boolean>(false);
  const [isMRemoveCoin, setisMRemoveCoin] = useState<boolean>(false);

  const { myCoins }: any = useContext(AppContext);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
      render: (_, record, text) => (
        <div className={styles.nameTable}>
          <div>
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
              alt="BTC logo"
              width="24px"
            />
          </div>
          <div className={styles.nameCoin}>{record.name}</div>
          <div>Tag</div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "Price",
      sorter: {
        compare: (a, b) => a.Price - b.Price,
        multiple: 3,
      },
    },
    {
      title: "Holdings",
      dataIndex: "Holdings",
      sorter: {
        compare: (a, b) => a.Holdings - b.Holdings,
        multiple: 2,
      },
    },
    {
      title: "Avg. Buy Price",
      dataIndex: "AvgBuyPrice",
      sorter: {
        compare: (a, b) => a.AvgBuyPrice - b.AvgBuyPrice,
        multiple: 2,
      },
    },
    {
      title: "Profit/Loss",
      dataIndex: "Profit_Loss",
      sorter: {
        compare: (a, b) => a.Profit_Loss - b.Profit_Loss,
        multiple: 2,
      },
    },
    {
      title: "Action",
      key: "operation",
      width: 100,
      render: () => (
        <div className={styles.action}>
          <PlusOutlined
            onClick={() => setIsMAddTransition(true)}
            title="Add Transaction"
          />{" "}
          <DeleteOutlined
            onClick={() => setisMRemoveCoin(true)}
            title="Delete Transaction"
          />
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "ohn Brown",
      Price: 98,
      Holdings: 60,
      AvgBuyPrice: 70,
      Profit_Loss: 5,
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className={styles.cMyAssets}>
      <MdAddTransition
        isMAddTransitionOpen={isMAddTransitionOpen}
        setIsMAddTransition={setIsMAddTransition}
        coin=""
      />
      <MdRemoveCoin
        isMRemoveCoin={isMRemoveCoin}
        setisMRemoveCoin={setisMRemoveCoin}
      />
      <h3>Assets</h3>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        style={{ overflow: "auto" }}
      />
    </div>
  );
};

export default MyAssets;
