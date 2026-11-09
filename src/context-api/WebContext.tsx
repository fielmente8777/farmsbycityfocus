"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WebContextType {
  isOpenFormPopUp: boolean;
  setIsOpenFormPopUp: (open: boolean) => void;
}

const WebContext = createContext<WebContextType>({
  isOpenFormPopUp: false,
  setIsOpenFormPopUp: () => {},
});

export const WebProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenFormPopUp, setIsOpenFormPopUp] = useState(false);

  return (
    <WebContext.Provider
      value={{
        isOpenFormPopUp,
        setIsOpenFormPopUp,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => useContext(WebContext);
