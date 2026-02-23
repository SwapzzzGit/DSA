import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Recipe from "../components/Recipe";
import CreateRecipes from "../components/CreateRecipes";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/recipe/details/:id" element={<SingleRecipe />} />
      <Route path="/createrecipes" element={<CreateRecipes />} />
    </Routes>
  );
};

export default MainRoutes;
