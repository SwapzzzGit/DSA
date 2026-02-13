import { useState } from "react";

const App = () => {

  const [name, setName] = useState("Swapnil");
  const changeHandler = function () {
    return setName("test");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeHandler}>Change Name</button>
    </>
  )
}

export default App