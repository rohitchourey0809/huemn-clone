import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const category = categories.find(
    (category) => category.idCategory === categoryId
  );

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto  bg-custom-color-1 w-200">
      <div className="bg-custom-color-1 w-200">
        <div className="bg-custom-color-1 w-200">
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4">{category.strCategory}</h2>
          <p className="text-2xl font-bold mb-4">
            {category.strCategoryDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
