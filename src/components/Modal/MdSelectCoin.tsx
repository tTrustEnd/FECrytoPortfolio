import { Input, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { RightOutlined } from "@ant-design/icons";
import MdAddTransition from "./MdAddTransition";
import { Coin } from "@/type/type";
import { AppContext } from "@/context/AppContext";

const MdSelectCoin = ({ isMdSelectCoinOpen, setIsMdSelectCoinOpen }: any) => {
  const [isMAddTransitionOpen, setIsMAddTransition] = useState<boolean>(false);
  const [searchInput, setsearchInput] = useState<string>("");
  const handleSelectCoin = (item: Coin) => {
    setcoinSelected(item.name);
    setIsMAddTransition(true);
    setIsMdSelectCoinOpen(false);
  };
  const { listCoins, setListCoins, setcoinSelected }: any =
    useContext(AppContext);
  const [listCoinsSearch, setListCoinsSearch] = useState<any>([]);
  useEffect(() => {
    setListCoinsSearch(listCoins);

    return () => {
      setListCoinsSearch([]);
    };
  }, [listCoinsSearch]);

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
  return (
    <>
      <MdAddTransition
        isMAddTransitionOpen={isMAddTransitionOpen}
        setIsMAddTransition={setIsMAddTransition}
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
                onClick={() => handleSelectCoin(item)}
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
                  <div className={styles.tagcoin}>
                    {item?.symbol.toUpperCase()}
                  </div>
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
