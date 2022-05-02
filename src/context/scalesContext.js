import React, { useState } from "react";

const scaleContext = React.createContext();

export const ScalesContextProvider = ({ children }) => {
  const [scales, setScales] = useState("°C");

  return (
    <scaleContext.Provider value={{ scales, setScales }}>
      {children}
    </scaleContext.Provider>
  );
};

export const useContextScales = () => {
  const context = React.useContext(scaleContext);

  if (context === undefined) {
    throw new Error("useContextScales must be used within a CountProvider");
  }
  return context;
};

export default scaleContext;
