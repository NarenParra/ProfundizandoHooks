import React from "react";

export const TodoListItem = ({
  todo,
  index,
  handleToggle,
  handleClickDelete,
}) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1} - {todo.desc}
      </p>
      <button
        onClick={() => handleClickDelete(todo.id)}
        className="btn btn-danger"
      >
        Borrar
      </button>
    </li>
  );
};
