import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

import { isHTTPRunning } from "./view.store";

const viewContext = createContext();

export const useViewContext = () => {
  return useContext(viewContext);
};

export const ViewProvider = ({ children }) => {
  const value = useView();
  return <viewContext.Provider value={value}>{children}</viewContext.Provider>;
};

export const useView = () => {
  const networkRequestActive = useSelector(isHTTPRunning);

  return { networkRequestActive };
};
