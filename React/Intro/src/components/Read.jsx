import { useState } from "react";

const Read = (props) => {
  const todos = props.todos;
  return (
    <>
      <h1>Pending TODOs</h1>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </>
  );
};

export default Read;
