import React from "react";
import { useSelector } from "react-redux";

const FavoritesComponent = () => {
  const favorites = useSelector((state) => state.categories.favorites);

  console.log("favorites", favorites);

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
                href="#"
                className="flex flex-col justify-evenly items-center  border:grey-500 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-custom-color-1 bg-custom-color-1"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={category.strCategoryThumb}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {category.strCategory}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {category.strCategoryDescription}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </center>
      </div>
    </div>
  );
};

export default FavoritesComponent;
