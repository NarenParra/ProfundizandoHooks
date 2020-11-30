import React from "react";
//guarda en memoria el estado y si no cambia no vulve a renderizar
//solo cambia si sus props cambian
export const Small = React.memo(({ value }) => {
  console.log("renderiza small");
  return <small>{value}</small>;
});
