import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  let navigate = useNavigate();
  const params = useParams();
  const buttonHandler = (name) => {
    navigate(`/products/detail/${name}`);
  };

  return (
    <div>
      <h1 className="text-4xl">Products</h1>
      <div className="flex flex-col gap-3">
        <h2>{params.name}</h2>
        <h3>Product details...</h3>
        <button
          onClick={() => buttonHandler("Product 1")}
          className="bg-amber-300 text-black p-1.5 rounded w-fit"
        >
          Check Details
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h2>{params.name}</h2>
        <h3>Product details...</h3>
        <button
          onClick={() => buttonHandler("Product 2")}
          className="bg-amber-300 text-black p-1.5 rounded w-fit"
        >
          Check Details
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h2>{params.name}</h2>
        <h3>Product details...</h3>
        <button
          onClick={() => buttonHandler("Product 3")}
          className="bg-amber-300 text-black p-1.5 rounded w-fit"
        >
          Check Details
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
