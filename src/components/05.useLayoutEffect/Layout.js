import React, { useRef, useLayoutEffect, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { state: counter, increment } = useCounter();

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setboxSize] = useState({});

  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={() => increment()}>
        Next quote
      </button>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </div>
  );
};
