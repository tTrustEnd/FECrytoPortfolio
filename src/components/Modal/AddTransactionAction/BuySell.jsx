import { RightOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";
import "select2";
import style from "./Buy.module.css";
import { InputNumber } from "antd";
import { AppContext } from "@/context/AppContext";
import { formatState, formatState2 } from "@/function/utilities";
const BuySell = ({ type }) => {
  const {
    listCoins,
    setListCoins,
    myCoins,
    setMyCoins,
    coinSelected,
    setcoinSelected,
  } = useContext(AppContext);
  console.log("coinSelected", coinSelected);
  const [PricePer, setPricePer] = useState();
  const [Quantity, setQuantity] = useState(0);
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

    formElements.forEach((element) => {
      const name = element.getAttribute("name");
      const value = element.value || element.textContent;

      console.log(`${name}: ${value}`);
    });
  };
  return (
    <div className={style.cBuy}>
      <form onSubmit={handleFormSubmit}>
        <select
          style={{ width: "100%" }}
          className="js-example-basic-single"
          name="state"
          value={coinSelected}
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
                onChange={(value) => {
                  setQuantity(value);
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={style.n}>Price Per Coin</div>
            <div>
              <InputNumber
                defaultValue={0}
                className={style.input}
                size="middle"
                name="Price"
                value={PricePer}
                precision={6}
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
