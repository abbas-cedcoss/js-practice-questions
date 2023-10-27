import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [handlingTime, setHandlingTime] = useState("");

  const contextValue = {
    title,
    setTitle,
    description,
    setDescription,
    handlingTime,
    setHandlingTime
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}
