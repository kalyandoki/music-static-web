import { createContext, useRef } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const radioRef = useRef(null);

  return (
    <RadioContext.Provider value={{ radioRef }}>
      {children}
    </RadioContext.Provider>
  );
};
