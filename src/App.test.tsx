import React from "react";
import { render } from "@testing-library/react";

import { useStore as storeHook } from "./hooks";
import App from "./App";
import { CounterStore } from "./CounterStore";

const useStore = storeHook as ReturnType<typeof jest["fn"]>;
jest.mock("hooks/store");

const stubCounterStore = () => {
  const store = new CounterStore();

  store.value = 10;

  return store;
};

describe("FilterComponent", () => {
  beforeEach(() => {
    useStore.mockReturnValue(stubCounterStore());
  });

  it("it renders without error", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
