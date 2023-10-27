import React, { createContext, useContext, useState } from "react";

const HandlingTimeContext = createContext();

export function useHandlingTime() {
  return useContext(HandlingTimeContext);
}

export function HandlingTimeProvider({ children }) {
  const [handlingTime, setHandlingTime] = useState("");

  return (
    <HandlingTimeContext.Provider value={{ handlingTime, setHandlingTime }}>
      {children}
    </HandlingTimeContext.Provider>
  );
}
