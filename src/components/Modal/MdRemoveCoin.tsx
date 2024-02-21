import { Button, Modal } from "antd";
import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { AppContext } from "@/context/AppContext";

const MdRemoveCoin = ({ isMRemoveCoin, setisMRemoveCoin }: any) => {
  const { listCoins, myCoins, coinSelected, setMyCoins }: any =
    useContext(AppContext);

  const DeleteTransaction = () => {
    setisMRemoveCoin(false)
    setMyCoins(
      myCoins.filter((item: any) => {
        return item.state != coinSelected;
      })
    );
  };
  return (
    <>
      <Modal
        centered
        title={<h2>Remove this coin?</h2>}
        open={isMRemoveCoin}
        footer={false}
        onCancel={() => {
          setisMRemoveCoin(false);
        }}
      >
        <div className={styles.RemoveMdal}>
          <div>All transactions associated with this coin will be removed.</div>
          <div>
            <Button onClick={() => DeleteTransaction()} type="primary">
              Remove
            </Button>
          </div>
          <div onClick={()=> setisMRemoveCoin(false)}>
            <Button type="default">Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MdRemoveCoin;
