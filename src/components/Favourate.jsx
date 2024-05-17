import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteFromFavorites } from "../store/categoriesSlice";

const FavoritesComponent = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.categories.favorites);

  console.log("favorites", favorites);

  const handleDelete = (categoryid) => {
    console.log("categoryId", categoryid);
    dispatch(deleteFromFavorites(categoryid));
    alert("Item Delted successfully");
  };

  return (
    <div>
      <div className="containe">
        <center>
          {favorites.map((category, index) => (
            <div
              key={category.idCategory}
              className=" bg-custom-color-1 py-30 border-2 hover:border-green-500"
            >
              <a
                href="/"
                className="flex flex-col justify-evenly items-center  border:grey-500 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-custom-color-1 bg-custom-color-1"
              >
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <center>
                    {" "}
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={category.strCategoryThumb}
                      alt=""
                    />
                  </center>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {category.strCategory}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {category.strCategoryDescription}
                  </p>
                </div>
              </a>
              <center>
                {" "}
                <button
                  onClick={() => handleDelete(category.idCategory)}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </center>
            </div>
          ))}
        </center>
      </div>
    </div>
  );
};

export default FavoritesComponent;
