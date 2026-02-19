import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-10 mt-10 text-2xl text-white justify-center">
      <NavLink
        className={(isActive) => (isActive.isActive ? "text-amber-300" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(isActive) => (isActive.isActive ? "text-amber-300" : "")}
        to="/Products"
      >
        Products
      </NavLink>
      <NavLink
        className={(isActive) => (isActive.isActive ? "text-amber-300" : "")}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={(isActive) => (isActive.isActive ? "text-amber-300" : "")}
        to="/Service"
      >
        Service
      </NavLink>
    </div>
  );
};

export default Nav;
