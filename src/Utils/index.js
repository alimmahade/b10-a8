import toast from "react-hot-toast";

// get all product from local stroge
const getAllCartProducts = () => {
  const all = localStorage.getItem("cartProductLs");
  if (all) {
    const cartProducts = JSON.parse(all);
    return cartProducts;
  } else {
    return [];
  }
};

// add a product to local storage
const addToCart = (product) => {
  const cartProducts = getAllCartProducts();
  const isExist = cartProducts.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("alredy added");
  cartProducts.push(product);
  localStorage.setItem("cartProductLs", JSON.stringify(cartProducts));
  toast.success("Sucessfully Added");
};

// remove a product from local storage
const removeCart = (id) => {
  const cartProducts = getAllCartProducts();
  const remaining = cartProducts.filter((product) => product.product_id != id);
  localStorage.setItem("cartProductLs", JSON.stringify(remaining));
  toast.success("Successfully Removed !!!");
};
export { addToCart, getAllCartProducts, removeCart };
