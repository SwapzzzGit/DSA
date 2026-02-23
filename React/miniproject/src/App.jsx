import React from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routing/MainRoutes";

const App = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen text-white px-[10%] ">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
