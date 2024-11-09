import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
const Home = () => {
  return (
    <>
      <Banner />
      <Heading title={"Explore Cutting-Edge Gadgets"} subTitle={""} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
