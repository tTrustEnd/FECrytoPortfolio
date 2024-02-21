import { RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import $ from "jquery";
import "select2";
import style from "./Buy.module.css";
import { InputNumber } from "antd";
const BuySell = ({ listCoins, type }) => {
  useEffect(() => {
    function formatState(state) {
      if (!state.id) {
        return state.text;
      }
      var imageUrl = state.element.getAttribute("data-image");
      var $state = $(
        `<span><img src="${imageUrl}"  width="24px" class="img-flag" /> ${state.text}</span>`
      );

      return $state;
    }
    function formatState2(state) {
      if (!state.id) {
        return state.text;
      }

      var imageUrl = state.element.getAttribute("data-image");
      var $state = $(
        `<span><img src="${imageUrl}"  width="24px" class="img-flag" /> ${state.text}</span>`
      );

      return $state;
    }
    $(".js-example-basic-single").select2({
      templateResult: formatState,
      selectOnClose: true,
      templateSelection: formatState2,
    });

    return () => {
      $(".js-example-basic-single").select2("destroy");
    };
  }, []);

  return (
    <div className={style.cBuy}>
      <select
        style={{ width: "100%" }}
        className="js-example-basic-single"
        name="state"
      >
        {listCoins?.map((item) => {
          return (
            <option key={item?.id}  data-image={item?.image}>
              {item.name + item?.symbol}
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
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className={style.n}>Price Per Coin</div>
          <div>
            <InputNumber
              defaultValue={25}
              className={style.input}
              size="middle"
            />
          </div>
        </div>
      </div>
      <div className={style.totalSpent}>
        <div>{type == "buy" ? " Total Spent" : "Total Received"}</div>
        <div className={style.money}>$ 114129.53</div>
      </div>
    </div>
  );
};

export default BuySell;
