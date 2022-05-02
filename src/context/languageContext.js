import React, { useState } from "react";

const languageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export const useContextLanguage = () => {
  const context = React.useContext(languageContext);

  if (context === undefined) {
    throw new Error("useContextLanguage must be used within a CountProvider");
  }
  return context;
};

export default languageContext;
