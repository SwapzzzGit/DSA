import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import About from "../components/About";
import Service from "../components/Service";
import Productdetail from "../components/Productdetail";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/products/detail/:name" element={<Productdetail />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
    </Routes>
  );
};

export default Mainroutes;
