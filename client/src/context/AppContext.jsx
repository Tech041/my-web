import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const value = {
    token,
    setToken,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
