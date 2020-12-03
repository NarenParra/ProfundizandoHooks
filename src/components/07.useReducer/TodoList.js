import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleClickDelete }) => {
  return (
    <ul className="list-group listo-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleToggle={handleToggle}
          handleClickDelete={handleClickDelete}
        />
      ))}
    </ul>
  );
};
