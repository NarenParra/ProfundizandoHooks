import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("dentro del use effect");
  }, []);

  useEffect(() => {
    console.log("form state cabió");
  }, [formState]);

  useEffect(() => {
    console.log("email cabió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    //console.log(target);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
      <hr></hr>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === "123" && <Message />}
    </>
  );
};
