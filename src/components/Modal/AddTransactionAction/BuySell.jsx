import { RightOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";
import "select2";
import style from "./Buy.module.css";
import { InputNumber } from "antd";
import { AppContext } from "@/context/AppContext";
import { formatState, formatState2 } from "@/function/utilities";

const BuySell = ({ type, setIsMAddTransition }) => {
  const {
    listCoins,
    setListCoins,
    myCoins,
    setMyCoins,
    coinSelected,
    setcoinSelected,
  } = useContext(AppContext);
  const [PricePer, setPricePer] = useState();
  const [Quantity, setQuantity] = useState(0);
  const [check, setcheck] = useState(false);
  useEffect(() => {
    $(".js-example-basic-single").select2({
      templateResult: formatState,
      selectOnClose: true,
      templateSelection: formatState2,
    });
    $(".js-example-basic-single").on("select2:select", function (e) {
      const item = listCoins.find((item) => {
        return item.name === e.target.value;
      });
      setcoinSelected(e.target.value);
      setPricePer(item?.current_price);
    });
    setPricePer(
      listCoins.find((item) => {
        return item.name === coinSelected;
      }).current_price
    );
    return () => {
      setPricePer([]);
    };
  }, [coinSelected]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.querySelectorAll("[name]");
    const updatedCoins = Array.from(formElements).reduce((acc, element) => {
      const name = element.getAttribute("name");
      const value = element.value || element.textContent;

      return { ...acc, [name]: value };
    }, {});

    const isExis = myCoins.find((item) => {
      return item.state === updatedCoins.state;
    });
    if (updatedCoins.quantity == 0) {
      setcheck(true);
      return;
    }
    setcheck(false);
    if (isExis) {
      const updatedMyCoins = myCoins.map((item) => {
        if (item.state === updatedCoins.state) {
          return {
            ...item,
            quantity: Number(item.quantity) + Number(updatedCoins.quantity),
            AvgPurchasePrice:
              (Number(item?.AvgPurchasePrice) * item?.quantity +
                updatedCoins?.quantity * updatedCoins?.AvgPurchasePrice) /
              (Number(item?.quantity) + Number(updatedCoins?.quantity)),
          };
        }
        return item;
      });

      setMyCoins(updatedMyCoins);
      setIsMAddTransition(false);
    } else {
      const item = listCoins.find((item) => {
        return item.name === updatedCoins.state;
      });
      setMyCoins([...myCoins, { ...updatedCoins, item }]);
      setIsMAddTransition(false);
    }
  };

  return (
    <div className={style.cBuy}>
      <form onSubmit={handleFormSubmit}>
        <select
          style={{ width: "100%" }}
          className="js-example-basic-single"
          name="state"
          value={coinSelected}
          onChange={()=>{}}
        >
          {listCoins?.map((item) => {
            return (
              <option value={item.name} key={item?.id} data-image={item?.image}>
                {`${item?.name + " " + item?.symbol.toUpperCase()}`}
              </option>
            );
          })}
        </select>
        <div className={style.GInput}>
          <div style={{ width: "100%" }}>
            <div className={style.n}>Quantity</div>
            <div>
              <InputNumber
                className={style.input}
                size="middle"
                defaultValue={0}
                name="quantity"
                min={0}
                value={Quantity}
                onChange={(value) => {
                  setQuantity(value);
                }}
              />
              {check && (
                <p style={{ color: "red" }}>Quantity must be greater than 0</p>
              )}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={style.n}>Price Per Coin</div>
            <div>
              <InputNumber
                defaultValue={0}
                className={style.input}
                size="middle"
                name="AvgPurchasePrice"
                value={PricePer}
                precision={6}
                onChange={(value) => setPricePer(value)}
              />
            </div>
          </div>
        </div>
        <div className={style.totalSpent}>
          <div>{type == "buy" ? " Total Spent" : "Total Received"}</div>
          <div type={"number"} name="total" className={style.money}>
            $ {Quantity * PricePer}
          </div>
        </div>
        <button className={style.btn} type="submit">
          Add Transition
        </button>
      </form>
    </div>
  );
};

export default BuySell;
