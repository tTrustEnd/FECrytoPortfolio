import { RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import $ from "jquery";
import "select2";
import style from "./Buy.module.css";
import { InputNumber } from "antd";
const BuySell = ({ type }) => {
  useEffect(() => {
    function formatState(state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "/user/pages/images/flags";
      var $state = $(
        '<span><img src="' +
          baseUrl +
          "/" +
          state.element.value.toLowerCase() +
          '.png" class="img-flag" /> ' +
          state.text +
          "</span>"
      );

      return $state;
    }
    function formatState2(state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "/user/pages/images/flags";
      var $state = $('<span><img class="img-flag" /> <span></span></span>');

      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $state.find("span").text(state.text);
      $state
        .find("img")
        .attr(
          "src",
          baseUrl + "/" + state.element.value.toLowerCase() + ".png"
        );

      return $state;
    }
    $(".js-example-basic-single").select2({
      templateResult: formatState,
      selectOnClose: true,
      templateSelection: formatState2,
    });

    return () => {};
  }, []);

  return (
    <div className={style.cBuy}>
      <select
        style={{ width: "100%" }}
        className="js-example-basic-single"
        name="state"
      >
        <option value="AL">Alabama</option>
        ...
        <option value="WY">Wyoming</option>
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
