import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e);
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      //se remueve el event listener para no tener duplicidad
      //para no saturar la memoria
      //hay que tener cuidado con eso
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>mesaje</h3>

      <p>
        X : {x} Y : {y}
      </p>
    </>
  );
};
