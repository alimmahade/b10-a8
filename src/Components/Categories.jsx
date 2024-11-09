import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Categories = () => {
  const categoryNames = useLoaderData();
  return (
    <div className="flex">
      <div className="flex lg:flex-col md:flex-col lg:w-40 lg:gap-24 md:gap-24 flex-row gap-6 z-10  w-full bg-gray-700 p-4">
        {categoryNames.map((name) => (
          <NavLink
            to={`/${name.category_name}`}
            className={({ isActive }) =>
              `btn tab lg:w-32 ${isActive ? "tab-active btn-primary" : ""}`
            }
            key={name.id}
          >
            {name.category_name}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
