import { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryPCard = ({ p }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
  } = p || {};
  const [productDetails, setProductDetails] = useState([]);
  const handleProductDetails = (p) => {
    setProductDetails(p);
  };
  console.log(productDetails);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product_image} alt="Pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
          <NavLink
            onClick={() => handleProductDetails(p)}
            to={`/productDetails/${product_id}`}
            className="btn btn-primary"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryPCard;
