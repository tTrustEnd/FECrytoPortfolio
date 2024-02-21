import React, { useContext, useState } from "react";
import styles from "./MyMainPortfolio.module.css";
import { Button, Flex, Switch } from "antd";
import MdSelectCoin from "../Modal/MdSelectCoin";
import { AppContext } from "@/context/AppContext";
import { Coin } from "@/type/type";
type Props = {};

const MyMainPortfolio = (props: Props) => {
  const [isMdSelectCoinOpen, setIsMdSelectCoinOpen] = useState<boolean>(false);
  const {
    listCoins,
    setListCoins,
    myCoins,
    setMyCoins,
    coinSelected,
    setcoinSelected,
  }: any = useContext(AppContext);
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  let totalPortfolio: number = 0;
  listCoins?.find((item: Coin) => {
    myCoins?.map((myc: any) => {
      if (item.name === myc.state) {
        totalPortfolio += +item?.current_price * myc?.quantity;
      }
    });
  });

  return (
    <>
      <MdSelectCoin
        isMdSelectCoinOpen={isMdSelectCoinOpen}
        setIsMdSelectCoinOpen={setIsMdSelectCoinOpen}
      />

      <div className={styles.inforPortfolio}>
        <div className={styles.leftInforPortfolio}>
          <div className={styles.name}>
            <div className={styles.avt} style={{ color: "red" }}>
              ♥
            </div>
            <div>My Main Portfolio</div>
          </div>
          <div className={styles.totalMoney}>
            $ {totalPortfolio.toLocaleString("en")}
          </div>
        </div>

        <div className={styles.rightInforPortfolio}>
          <Flex
            gap="small"
            wrap="nowrap"
            className={styles.antFlex}
          >
            <div className={styles.textChars}>Show Chars</div>
            <Switch defaultChecked onChange={onChange} />
            <Button
              onClick={() => {
                setIsMdSelectCoinOpen(true);
              }}
              type="primary"
            >
              + Add Transition
            </Button>
          </Flex>
        </div>
      </div>
    </>
  );
};
export default MyMainPortfolio;
