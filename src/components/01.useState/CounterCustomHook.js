import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";
export const CounterCustomHook = () => {
  //custom hook
  const { state: counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook {counter}</h1>

      <button className="btn btn-primary" onClick={() => increment(3)}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={() => decrement()}>
        - 1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
};
