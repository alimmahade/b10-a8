import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Categories from "../Components/Categories";
import ProductDetails from "../Pages/ProductDetails";
import CategoryProduct from "../Components/CategoryProduct";
import { createContext } from "react";
import AboutUs from "../Pages/AboutUs";
export const ProductDataContext = createContext();
export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("../data.json"),
    element: <MainLayout />,
    children: [
      {
        path: "/productDetails/:product_id",
        loader: () => fetch("../data.json"),
        element: <ProductDetails />,
      },

      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Categories />,
            loader: ({ params }) => fetch("../category.json"),
            children: [
              {
                path: "/",
                element: <CategoryProduct />,
                loader: () => fetch("../data.json"),
              },
            ],
          },

          {
            path: "/:categorydata",
            element: <CategoryProduct />,
            loader: ({ params }) => fetch("../data.json"),
            children: [
              {
                path: "/:categorydata",
                element: <Categories />,
                loader: ({ params }) => fetch("../category.json"),
              },
            ],
          },
        ],
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/", element: <CategoryProduct /> },
    ],
  },
  { path: "/aboutus", element: <AboutUs /> },
]);
