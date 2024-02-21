import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { RightOutlined } from "@ant-design/icons";
import MdAddTransition from "./MdAddTransition";
import { Coin } from "@/type/type";
import { handleGetCoinList } from "@/api/coin";

const MdSelectCoin = ({ isMdSelectCoinOpen, setIsMdSelectCoinOpen }: any) => {
  const [isMAddTransitionOpen, setIsMAddTransition] = useState<boolean>(false);
  const [searchInput, setsearchInput] = useState<string>("");
  const handleSelectCoin = () => {
    setIsMAddTransition(true);
    setIsMdSelectCoinOpen(false);
  };
  const [listCoins, setListCoins] = useState<any>([]);
  const [listCoinsSearch, setListCoinsSearch] = useState<any>([]);
  const getData = async () => {
    const res = await handleGetCoinList();
    setListCoins(res);
    setListCoinsSearch(res);
  };
  const searchCoin = (value: string) => {
    setsearchInput(value);

    const data = listCoinsSearch?.filter((item: Coin) => {
      return (
        item?.symbol?.toLowerCase().includes(value.toLowerCase()) ||
        item?.name?.toLowerCase().includes(value.toLowerCase())
      );
    });
    setListCoins(data);
  };
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  console.log("data", listCoins);
  return (
    <>
      <MdAddTransition
        isMAddTransitionOpen={isMAddTransitionOpen}
        setIsMAddTransition={setIsMAddTransition}
        coin=""
        listCoins={listCoins}
      />
      <Modal
        title={<h2>Select Coin</h2>}
        open={isMdSelectCoinOpen}
        onCancel={() => (setIsMdSelectCoinOpen(false), setsearchInput(""))}
        footer={false}
      >
        <Input
          value={searchInput}
          onChange={(e) => searchCoin(e.target.value)}
          placeholder="Search"
        />
        <div style={{ overflow: "auto", height: 400 }}>
          {listCoins?.map((item: Coin, index: number) => {
            return (
              <div
                key={`${item.id}`}
                className={styles.Mcoins}
                onClick={() => handleSelectCoin()}
              >
                <div className={styles.McoinsLeft}>
                  <div className={styles.imgCoin}>
                    <img
                      src={`${item?.image}`}
                      alt={`${item?.symbol}+logo`}
                      width="24px"
                    />
                  </div>
                  <div className={styles.nameCoin}>{item?.name}</div>
                  <div className={styles.tagcoin}>{item?.symbol}</div>
                </div>
                <div className={styles.McoinsRight}>
                  <RightOutlined />
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default MdSelectCoin;
