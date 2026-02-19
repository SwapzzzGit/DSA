import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-blue-950 w-screen h-screen flex flex-col px-[10%] text-white">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
