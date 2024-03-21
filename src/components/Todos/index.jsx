import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "@/features/todo/todoSlce";

const Todos = () => {
  const todos = useSelector((state) => state.todos); // we will get the value in the
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.text}</div> 
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
