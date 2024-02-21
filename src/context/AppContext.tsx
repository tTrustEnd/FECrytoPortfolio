import { handleGetCoinList } from "@/api/coin";
import { dataDemo } from "@/function/utilities";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const getData = async () => {
    const res = await handleGetCoinList();
    setListCoins(res);
  };
  useEffect(() => {
    getData();
    const intervalId = setInterval(() => {
      getData();
    }, 45000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const [listCoins, setListCoins] = useState<any>([]);
  const [coinSelected, setcoinSelected] = useState("");
  const [myCoins, setMyCoins] = useState<any>([]);
  return (
    <AppContext.Provider
      value={{
        listCoins,
        setListCoins,
        myCoins,
        setMyCoins,
        coinSelected,
        setcoinSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
