"use client";
import React from "react";
import styles from "./MyAssets.module.css";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
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
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
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
          <PlusOutlined title="Add Transaction" />{" "}
          <DeleteOutlined title="Delete Transaction" />
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