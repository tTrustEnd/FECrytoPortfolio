import { handleGetCoinList } from "@/api/coin";
import { dataDemo } from "@/function/utilities";
import { createContext, memo, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = memo(({ children }: any) => {
  const getData = async () => {
    const res = await handleGetCoinList();
    setListCoins(res);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
