"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./MyAssets.module.css";
import { Statistic, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  CaretDownFilled,
  CaretUpOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import MdAddTransition from "../Modal/MdAddTransition";
import MdRemoveCoin from "../Modal/MdRemoveCoin";
import { Coin } from "@/type/type";
import { AppContext } from "@/context/AppContext";
import { dataDemo } from "@/function/utilities";
type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  Price: number;
  Holdings: number;
  AvgBuyPrice: number;
  Profit_Loss: number;
  img: String;
  symbol: String;
}
const MyAssets = (props: Props) => {
  const [isMAddTransitionOpen, setIsMAddTransition] = useState<boolean>(false);
  const [isMRemoveCoin, setisMRemoveCoin] = useState<boolean>(false);

  const { listCoins, myCoins, setcoinSelected }: any = useContext(AppContext);
  const data: DataType[] = myCoins?.map((item: any, index: number) => {
    return {
      key: index,
      name: item?.state,
      Price: listCoins?.find((coins: Coin) => {
        return coins.name === item.state;
      }).current_price,
      Holdings: item?.quantity,
      AvgBuyPrice: item?.AvgPurchasePrice,
      Profit_Loss: null,
      img: item?.item?.image,
      symbol: item?.item?.symbol,
    };
  });

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
            <img src={`${record?.img}`} alt="BTC logo" width="24px" />
          </div>
          <div className={styles.nameCoin}>{record.name}</div>
          <div>{record?.symbol?.toUpperCase()}</div>
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
      render: (_, record, text) => <>{record?.Price?.toLocaleString("en")} </>,
    },
    {
      title: "Holdings",
      dataIndex: "Holdings",
      sorter: {
        compare: (a, b) => a.Holdings - b.Holdings,
        multiple: 5,
      },
      render: (_, record, text) => (
        <div>
          <div className={styles.nameCoin}>
            $ {(record.Holdings * record?.Price).toLocaleString("en")}
          </div>
          <div>
            {record.Holdings} {record.symbol.toUpperCase()}
          </div>
        </div>
      ),
    },
    {
      title: "Avg. Buy Price",
      dataIndex: "AvgBuyPrice",
      sorter: {
        compare: (a, b) => a.AvgBuyPrice - b.AvgBuyPrice,
        multiple: 5,
      },
      render: (_, record, text) => (
        <>{record?.AvgBuyPrice?.toLocaleString("en")} </>
      ),
    },
    {
      title: "Profit/Loss",
      dataIndex: "Profit_Loss",
      sorter: {
        compare: (a, b) => a.Profit_Loss - b.Profit_Loss,
        multiple: 5,
      },
      render: (_, record, text) => (
        <div>
          <Statistic
            value={
              (record.Price - record.AvgBuyPrice) * record.Holdings < 0
                ? (record.Price - record.AvgBuyPrice) * record.Holdings * -1
                : (record.Price - record.AvgBuyPrice) * record.Holdings
            }
            precision={2}
            valueStyle={{ fontSize: 15 }}
            prefix={
              <>{record.Price - record.AvgBuyPrice >= 0 ? "+ " : "- "}$</>
            }
          />
          <Statistic
            value={
              (((record.Price - record.AvgBuyPrice) * record.Holdings) /
                record.AvgBuyPrice) *
              100
            }
            precision={2}
            valueStyle={{ color: "#3f8600", fontSize: 15 }}
            prefix={
              record.Price - record.AvgBuyPrice >= 0 ? (
                <CaretUpOutlined style={{ fontSize: 15 }} />
              ) : (
                <CaretDownFilled style={{ fontSize: 15, color: "red" }} />
              )
            }
            suffix="%"
          />
        </div>
      ),
    },
    {
      title: "Action",
      key: "operation",
      width: 100,
      render: (_, record, text) => (
        <div className={styles.action}>
          <PlusOutlined
            onClick={() => {
              setIsMAddTransition(true);
              setcoinSelected(record.name);
            }}
            title="Add Transaction"
          />
          <DeleteOutlined
            onClick={() => {
              setisMRemoveCoin(true);
              setcoinSelected(record.name);
            }}
            title="Delete Transaction"
          />
        </div>
      ),
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
