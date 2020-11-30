import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02.useEffect/effects.css";
//uso cuando necesitamos enviar una funcion a un componente hujo
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  /*
  const increment = () => {
    setCounter(counter + 1);
  };
*/
  //para eliminar la dependencia del counter c=> c
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hook {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
