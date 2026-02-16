import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([]);
  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
