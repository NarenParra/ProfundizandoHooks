import React from "react";
import { useForm } from "../../hooks/useForm";
export const TodoAdd = ({ handelAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handelAddTodo(newTodo);

    reset();
  };

  return (
    <>
      <h3>Agregar Todo</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="btn btn-primary mt-1 btn-block">
          Agregar TODO
        </button>
      </form>
    </>
  );
};
