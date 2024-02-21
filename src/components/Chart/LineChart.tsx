import { handleGetHisCharts } from "@/api/coin";
import { AppContext } from "@/context/AppContext";
import { convertMillisecondsToDateString } from "@/function/utilities";
import { Coin } from "@/type/type";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Line } from "react-chartjs-2";

const LineChart = memo(() => {
  const { myCoins, showChart, listCoins, check }: any = useContext(AppContext);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [listHis, setlistHis] = useState<any>([]);

  const handleDec = useCallback(async () => {
    if (!myCoins) {
      return;
    }

    const updatedList: any = await Promise.all(
      myCoins.map(async (item: any) => {
        const res = await handleGetHisCharts(item?.state?.toLowerCase());
        let arr: any = [];
        let arrTime: any = [];
        for (let index = 0; index < res?.prices?.length; index++) {
          arr.push(res?.prices[index][1]);
          arrTime.push(convertMillisecondsToDateString(res?.prices[index][0]));
        }
        return { arr, arrTime };
      })
    );
    setlistHis(updatedList);
  }, [myCoins]);

  useEffect(() => {
    handleDec();
    return () => {};
  }, [myCoins]);

  const data: any = useMemo(() => {
    return {
      labels: listHis[0]?.arrTime,
      datasets: myCoins.map((item: any, index: number) => {
        const color = getRandomColor();
        return {
          label: item?.state,
          data: listHis[index]?.arr,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 2,
          fill: false,
        };
      }),
    };
  }, [myCoins]);

  const options: any = {
    scales: {
      y: {
        title: {
          display: true,
          text: "USD",
        },
      },
    },
  };

  return (
    <>
      {myCoins.length > 0 && showChart && (
        <Line width="400px" data={data} options={options} />
      )}
    </>
  );
});

export default LineChart;
