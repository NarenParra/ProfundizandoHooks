import React, { useState } from "react";
import { MultipleCustomHooks } from "../03.examples/MultipleCustomHooks";
import "../02.useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Ejemplo useRef</h1>
      <hr></hr>

      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show /Wide
      </button>
    </>
  );
};
