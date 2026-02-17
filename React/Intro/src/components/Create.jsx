import { useState } from "react";
import { nanoid } from "nanoid";
const Create = (props) => {
  const [title, settitle] = useState("");
  const todos = props.todos;
  const settodos = props.settodos;
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = { id: nanoid(), title: title, isCompleted: false };
    settodos([...todos, newTodo]);
    settitle("");
    console.log(todos);
  };

  return (
    <div className="border-2 w-[60%] p-2 mx-auto">
      <h1 className="text-6xl font-thin">
        Set <span className="text-teal-500">Remainders</span> for Tasks
      </h1>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
