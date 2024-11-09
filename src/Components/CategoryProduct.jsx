import { Outlet, useLoaderData, useParams } from "react-router-dom";
import CategoryPCard from "./CategoryPCard";
import { useEffect, useState } from "react";

const CategoryProduct = () => {
  const { categorydata } = useParams();
  const myAllData = useLoaderData();
  const [categoryCards, setCategoryCards] = useState([myAllData]);
  useEffect(() => {
    if (categorydata) {
      const filteredByCategory = [...myAllData].filter(
        (cataCard) => cataCard.category === categorydata
      );
      // if (filteredByCategory.length <= 0) {
      //   setCategoryCards(404);
      //   console.log("no data found");
      // }
      setCategoryCards(filteredByCategory);
    } else {
      setCategoryCards(myAllData);
    }
  }, [categorydata, myAllData]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <Outlet></Outlet>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 z-1 gap-6 ml-6">
        {categoryCards.map((p) => (
          <CategoryPCard key={p.id} p={p}></CategoryPCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
