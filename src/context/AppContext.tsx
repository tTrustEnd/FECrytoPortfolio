import { handleGetCoinList } from "@/api/coin";
import { dataDemo } from "@/function/utilities";
import { createContext, memo, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = memo(({ children }: any) => {
  const getData = async () => {
    const res = await handleGetCoinList();
    setListCoins(res||dataDemo);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 45000);
    getData();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [listCoins, setListCoins] = useState<any>([]);
  const [coinSelected, setcoinSelected] = useState("");
  const [myCoins, setMyCoins] = useState<any>([]);
  const [showChart, setshowChart] = useState(true);
  const [type, setType] = useState("buy");
  return (
    <AppContext.Provider
      value={{
        listCoins,
        setListCoins,
        myCoins,
        setMyCoins,
        coinSelected,
        setcoinSelected,
        setshowChart,
        showChart,
        setType,
        type,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
