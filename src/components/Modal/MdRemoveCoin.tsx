import { Button, Modal } from "antd";
import React from "react";
import styles from "./Modal.module.css";

const MdRemoveCoin = ({ isMRemoveCoin, setisMRemoveCoin }: any) => {
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
            <Button type="primary">Remove</Button>
          </div>
          <div>
            <Button type="default">Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MdRemoveCoin;
