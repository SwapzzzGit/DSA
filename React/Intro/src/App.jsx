import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kam kar bhai!!!", isCompleted: false },
  ]);
  return (
    <div className="text-white p-10 flex w-screen h-screen bg-sky-950">
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
