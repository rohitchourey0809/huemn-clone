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
    <div className="container">
      <center>
        <div className="bg-custom-color-1 py-30 border-2 hover:border-green-500 transform transition duration-500 hover:scale-105 animate-fadeIn">
          <a
            href="/"
            className="flex flex-col justify-evenly items-center border-gray-500 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-custom-color-1 bg-custom-color-1 transition duration-500 hover:shadow-lg"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg transition duration-500 hover:opacity-1000"
              src={category.strCategoryThumb}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 transition duration-500 hover:text-green-500">
                {category.strCategory}
              </h5>
              <p className="mb-3 font-normal text-green-700 dark:text-gray-400 transition duration-500 hover:text-red-900 hover:font-serif hover:font-semibold">
                {category.strCategoryDescription}
              </p>
            </div>
          </a>
        </div>
      </center>
    </div>
  );
};

export default CategoryDetails;
