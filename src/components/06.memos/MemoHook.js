import React, { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02.useEffect/effects.css";

export const MemoHook = () => {
  const { state, increment } = useCounter(5000);

  const [show, setShow] = useState(true);

  //memoriza el valor
  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h2>
        Counter <small>{state}</small>
      </h2>
      <hr></hr>

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
