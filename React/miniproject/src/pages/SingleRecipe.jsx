import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  // displayed data related
  const params = useParams();
  // Foem data related
  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      catagory: recipe?.catagory,
    },
  });
  const navigate = useNavigate();

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id == params.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    localStorage.setItem("recipes", JSON.stringify(copydata));
    setdata(copydata);
    toast.success("Recipe Updated!!!");
  };
  const deleteHandler = () => {
    const filteredData = data.filter((e) => e.id != params.id);
    localStorage.setItem("recipe", JSON.stringify(filteredData));
    setdata(filteredData);
    toast.success("Recipe Deleted Successfully!!!");
    navigate("/recipe");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2 ">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img
          className=" mt-2 rounded-2xl block h-[30vh]"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="right w-1/2 p-2">
        <form
          className="flex flex-col w-fit  font-2xl"
          onSubmit={handleSubmit(UpdateHandler)}
        >
          <input
            className="mt-5 block border-b-2"
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
          />
          <input
            className="mt-5 block border-b-2"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="mt-5 block border-b-2"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
          />
          <input
            className="mt-5 block border-b-2"
            {...register("desc")}
            type="text"
            placeholder="Recipe Description"
          />
          <input
            className="mt-5 block border-b-2"
            {...register("ingr")}
            type="text"
            placeholder="Write Ingridients"
          />
          <input
            className="mt-5 block border-b-2"
            {...register("inst")}
            type="text"
            placeholder="Write Instructions"
          />
          <select
            className="mt-5 block border-b-2 rounded"
            {...register("category")}
          >
            <option className="bg-gray-600 rounded" value="breakfast">
              breakfast
            </option>
            <option className="bg-gray-600 rounded" value="lunch">
              lunch
            </option>
            <option className="bg-gray-600 rounded" value="dinner">
              dinner
            </option>
            <option className="bg-gray-600 rounded" value="supper">
              supper
            </option>
          </select>
          <button className="bg-blue-500 mt-5 block">Update Recipe</button>
          <button onClick={deleteHandler} className="bg-red-500 mt-5 block">
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "LOADING..."
  );
};

export default SingleRecipe;
