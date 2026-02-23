import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, chef, desc } = props.recipe;
  return (
    <Link
      to={`/recipe/details/${id}`}
      className="mr-3 mb-3  shadow p-1 hover:scale-105 block w-[23vw] rounded overflow-hidden"
      key={id}
    >
      <img
        className="rounded-xl object-cover w-full h-[20vh]"
        src={image}
        alt={title}
      />
      <h1>{title}</h1>
      <small>{chef}</small>
      <p>
        {desc.slice(0, 100)}... <small className="text-blue-600">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
