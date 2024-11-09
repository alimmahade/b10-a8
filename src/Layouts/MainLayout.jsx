import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import { ProductDataContext } from "../Routes/Routes";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const AllProductData = useLoaderData();
  return (
    <ProductDataContext.Provider value={AllProductData}>
      <div>
        <Toaster />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ProductDataContext.Provider>
  );
};

export default MainLayout;
