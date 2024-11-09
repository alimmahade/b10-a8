import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllCartProducts, removeCart } from "../Utils";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cartProducts = getAllCartProducts();
    setProducts(cartProducts);
  }, []);
  const handleRemove = (id) => {
    removeCart(id);
    const cartProducts = getAllCartProducts();
    setProducts(cartProducts);
  };
  return (
    <>
      <div>
        <Heading
          title="Welcome to Dashboard"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex justify-center gap-4">
          <NavLink className="btn">Cart</NavLink>
          <NavLink className="btn">Wishlist</NavLink>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 ml-6">
        {products.map((p, i) => (
          <div key={i}>
            <footer className="flex items-center gap-5 justify-around bg-base-300 text-base-content p-4">
              <img src={p.product_image} className="w-32 h-32" alt="" />
              <p>{p.product_title}</p>
              <span onClick={() => handleRemove(p.product_id)} className="btn">
                Delete
              </span>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
