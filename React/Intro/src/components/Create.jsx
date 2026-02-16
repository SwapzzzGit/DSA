import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    settodos([...todos, newTodo]);
    settitle("");
  };

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <button>Create TODOs</button>
      </form>
    </>
  );
};

export default Create;
