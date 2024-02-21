import { Button, Modal, Tabs, TabsProps } from "antd";
import React, { useContext } from "react";
import BuySell from "./AddTransactionAction/BuySell";
import { AppContext } from "@/context/AppContext";

type Props = {};

const MdAddTransition = ({
  isMAddTransitionOpen,
  setIsMAddTransition,
  coin,
}: any) => {

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Buy",
      children: <BuySell type="buy" />,
    },
    {
      key: "2",
      label: "Sell",
      children: <BuySell type="sell" />,
    },
    {
      key: "3",
      label: "Transfer",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <Modal
      title={<h2>Add Transition</h2>}
      open={isMAddTransitionOpen}
      onCancel={() => setIsMAddTransition(false)}
      footer={false}
    >
      <div style={{ width: "100%" }}>
        <Tabs
          centered
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="small"
          tabBarGutter={100}
        />
      </div>
    </Modal>
  );
};

export default MdAddTransition;
