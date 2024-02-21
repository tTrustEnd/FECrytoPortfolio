import { handleGetCoinList } from "@/api/coin";
import { dataDemo } from "@/function/utilities";
import { Coin } from "@/type/type";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const getData = async () => {
    // const res = await handleGetCoinList();
    setListCoins(dataDemo);
  };
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const [listCoins, setListCoins] = useState<any>([]);
  const [coinSelected, setcoinSelected] = useState("ss");
  const [myCoins, setMyCoins] = useState<Coin[]>([]);
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
