import { useNavigate, useParams } from "react-router-dom";

const Productdetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>{params.name}</h1>
      <h2>Productdetail</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-300 text-black p-1.5 rounded w-fit"
      >
        Go back
      </button>
    </div>
  );
};

export default Productdetail;
