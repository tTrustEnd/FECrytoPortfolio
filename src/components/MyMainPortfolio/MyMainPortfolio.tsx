import React from "react";
import styles from "./MyMainPortfolio.module.css";
import { Button, Flex } from "antd";
type Props = {};

const MyMainPortfolio = (props: Props) => {
  return (
    <div className={styles.inforPortfolio}>

      <div className={styles.leftInforPortfolio}>
        <div className={styles.name}>
          <div className={styles.avt} style={{color:"red"}}>♥</div>
          <div>My Main Portfolio</div>
        </div>
        <div className={styles.totalMoney}>$111,666.98</div>
        <div className={styles.Profit_loss}>+ $111,666.98 (24h)</div>
      </div>

      <div className={styles.rightInforPortfolio}>
        <Flex gap="small" wrap="nowrap">
          <Button>Default Button</Button>
          <Button type="primary">+ Add Transition</Button>
        </Flex>
      </div>

    </div>
  );
};
export default MyMainPortfolio;
