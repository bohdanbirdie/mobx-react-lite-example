import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useStore as storeHook } from "./hooks";
import App from "./App";
import { CounterStore } from "./CounterStore";

const useStore = storeHook as ReturnType<typeof jest["fn"]>;
jest.mock("./hooks");

const stubCounterStore = () => {
  const store = new CounterStore();

  return store;
};

describe("FilterComponent", () => {
  beforeEach(() => {
    useStore.mockReturnValue(stubCounterStore());
  });

  it("it renders without error", () => {
    expect(render(<App />)).toBeTruthy();
  });

  it("it renders initial counter value different from 0", () => {
    const store = stubCounterStore();
    store.value = 10;
    useStore.mockReturnValue(store);

    const { queryByText } = render(<App />);

    expect(queryByText("Value 10")).toBeTruthy();
  });

  it("it call the increment store action in the increment button click", () => {
    const { getByText, queryByText } = render(<App />);
    const incrementButton = getByText("Increment");

    expect(queryByText("Value 0")).toBeTruthy();
    expect(queryByText("Value 1")).toBeFalsy();

    userEvent.click(incrementButton);

    expect(queryByText("Value 0")).toBeFalsy();
    expect(queryByText("Value 1")).toBeTruthy();
  });

  it("it call the decrement store action in the decrement button click", () => {
    const { getByText, queryByText } = render(<App />);
    const decrementButton = getByText("Decrement");

    expect(queryByText("Value 0")).toBeTruthy();
    expect(queryByText("Value -1")).toBeFalsy();

    userEvent.click(decrementButton);

    expect(queryByText("Value 0")).toBeFalsy();
    expect(queryByText("Value -1")).toBeTruthy();
  });
});
