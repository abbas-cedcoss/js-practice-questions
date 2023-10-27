import React, { createContext, useContext, useState } from "react";

const DescriptionContext = createContext();

export function useDescription() {
  return useContext(DescriptionContext);
}

export function DescriptionProvider({ children }) {
  const [description, setDescription] = useState("");

  return (
    <DescriptionContext.Provider value={{ description, setDescription }}>
      {children}
    </DescriptionContext.Provider>
  );
}
