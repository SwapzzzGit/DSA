import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-[5%] py-10 text-sm">
      <NavLink className={(e) => (e.isActive ? "text-amber-400" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-amber-400" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-amber-400" : "")}
        to="/recipe"
      >
        Recipe
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "bg-amber-400 text-gray-900 px-3 py-1 rounded hover:scale-105"
            : "bg-amber-400 text-gray-900 px-3 py-1 rounded"
        }
        to="/createrecipes"
      >
        Create Recipes
      </NavLink>
    </div>
  );
};

export default Nav;
