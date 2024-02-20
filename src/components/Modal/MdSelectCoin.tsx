import { Input, Modal } from "antd";
import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RightOutlined } from "@ant-design/icons";
import MdAddTransition from "./MdAddTransition";
const MdSelectCoin = ({ isMdSelectCoinOpen, setIsMdSelectCoinOpen }: any) => {
  const [isMAddTransitionOpen, setIsMAddTransition] = useState<boolean>(false);
  const handleSelectCoin = () => {
    setIsMAddTransition(true);
    setIsMdSelectCoinOpen(false);
  };
  return (
    <>
      <MdAddTransition
        isMAddTransitionOpen={isMAddTransitionOpen}
        setIsMAddTransition={setIsMAddTransition}
        coin=""
      />
      <Modal
        title={<h2>Select Coin</h2>}
        open={isMdSelectCoinOpen}
        onCancel={() => setIsMdSelectCoinOpen(false)}
        footer={false}
      >
        <Input placeholder="Search" />
        <div className={styles.Mcoins} onClick={() => handleSelectCoin()}>
          <div className={styles.McoinsLeft}>
            <div className={styles.imgCoin}>
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt="BTC logo"
                width="24px"
              />
            </div>
            <div className={styles.nameCoin}>Bitcoin</div>
            <div className={styles.tagcoin}>BTC</div>
          </div>
          <div className={styles.McoinsRight}>
            <RightOutlined />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MdSelectCoin;
