import * as React from "react";
import { useStore } from "./hooks";
import { observer } from "mobx-react-lite";
import "./styles.css";

const App = observer(() => {
  const counterStore = useStore("counterStore");

  return (
    <div className="App">
      <h1>Counter app</h1>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
      <h2>Value {counterStore.value}</h2>
    </div>
  );
});

export default App;
