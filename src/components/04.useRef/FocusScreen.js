import React, { useRef } from "react";

import "../02.useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  console.log(inputRef);
  const handleClick = () => {
    //document.querySelector("input").select();
    //ejemplo - poco usado
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Nombre"
      ></input>
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
