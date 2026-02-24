import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitHandler = (formData) => {
    formData.id = nanoid();
    //setdata([...data, formData]);
    const newData = [...data, formData];
    localStorage.setItem("recipes", JSON.stringify(newData));
    setdata(newData);
    toast.success("New Recipe Created!!!");
    reset();
    navigate("/recipe");
  };
  useEffect(() => {
    localStorage.getItem("recipies");
  }, []);
  return (
    <form
      className="flex flex-col w-fit border-b-2 font-2xl"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input {...register("image")} type="url" placeholder="Enter Image URL" />
      <input {...register("title")} type="text" placeholder="Recipe Title" />
      <input {...register("chef")} type="text" placeholder="Chef Name" />
      <input
        {...register("desc")}
        type="text"
        placeholder="Recipe Description"
      />
      <input
        {...register("ingr")}
        type="text"
        placeholder="Write Ingridients"
      />
      <input
        {...register("inst  ")}
        type="text"
        placeholder="Write Instructions"
      />
      <select {...register("category")}>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="supper">supper</option>
      </select>
      <button>Save Recipe</button>
    </form>
  );
};

export default CreateRecipes;
