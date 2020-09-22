import React from "react";
import { CounterStore } from "./CounterStore";

export const stores = Object.freeze({
  counterStore: new CounterStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
