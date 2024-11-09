import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../Routes/Routes";
import { addToCart, getAllCartProducts } from "../Utils";

const ProductDetails = () => {
  const allProData = useContext(ProductDataContext);
  const { product_id } = useParams();
  const [detailsProduct, setDetailsProduct] = useState([]);
  const [isCartProduct, setisCartProduct] = useState(false);
  useEffect(() => {
    const singleProduct = allProData.find(
      (product) => product.product_id == product_id
    );
    setDetailsProduct(singleProduct);
    const cartProducts = getAllCartProducts();
    const isExist = cartProducts.find(
      (item) => item.product_id == singleProduct.product_id
    );
    if (isExist) {
      setisCartProduct(true);
    }
  }, [allProData, product_id]);
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
    specifications,
  } = detailsProduct;
  const handleAddToCart = (product) => {
    addToCart(product);
    setisCartProduct(true);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">Price: $ {price}</p>
            <p className="py-6">{description}</p>
            <h2 className="py-6 text-2xl">Specifications:</h2>
            <p>{specifications}</p>
            <button
              disabled={isCartProduct}
              onClick={() => handleAddToCart(detailsProduct)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
            <button className="btn btn-primary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
