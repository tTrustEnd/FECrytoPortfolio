import { Button, Modal, Tabs, TabsProps } from "antd";
import React, { useCallback, useContext, useEffect } from "react";
import BuySell from "./AddTransactionAction/BuySell";
import { AppContext } from "@/context/AppContext";
import dynamic from "next/dynamic";

type Props = {};

const MdAddTransition = ({
  isMAddTransitionOpen,
  setIsMAddTransition,
}: any) => {
  const { setType,type }: any = useContext(AppContext);
  const onChange = (key: string) => {
    if (key === "1") {
      setType("buy");
    }
    if (key === "2") {
      setType("sell");
    }
  };
  useEffect(() => {
    setType("buy");
  }, [isMAddTransitionOpen]);

  const BuySell = useCallback(dynamic(()=> import("./AddTransactionAction/BuySell")),[])

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Buy",
      children: <BuySell setIsMAddTransition={setIsMAddTransition} />,
    },
    {
      key: "2",
      label: "Sell",
      children: <BuySell setIsMAddTransition={setIsMAddTransition} />,
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
          activeKey={type==="buy"?"1":"2"}
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
