import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handelAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleClickDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: "toggle", payload: todoId });
  };

  return (
    <div>
      <h1>Todo App {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleClickDelete={handleClickDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handelAddTodo={handelAddTodo} />
        </div>
      </div>
    </div>
  );
};
