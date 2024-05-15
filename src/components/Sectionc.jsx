import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice";

import { Link } from "react-router-dom";

const Sectionc = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <div className="py-4 bg-custom-color-1">
      <center>
        <b className="text-white">Latest Meals</b>
      </center>
      <div>
        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>Error: {error}</div>}
        {status === "succeeded" && (
          <ul>
            <div className="flex flex-wrap justify-center">
              {categories.map((category) => (
                <div
                  key={category.idCategory}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
                >
                  {category && ( // Add a conditional check for category
                    <Link
                      to={`/category/${category.idCategory}`}
                      className="block"
                      categoryId={category.idCategory}
                    >
                      <img
                        key={category.idCategory}
                        src={category.strCategoryThumb}
                        alt={category.strCategory}
                        className="w-auto h-auto object-cover"
                      />
                      <span className="block text-center mt-2 dark:text-yellow-700 hover:text-yellow-500">
                        {category.strCategory}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ul>
        )}
      </div>
      <section className="bg-custom-color-1">
        <img
          src="https://www.themealdb.com/images/separator.jpg"
          className="w-full object-cover bg-white"
          alt="SeparatorImage"
        />
      </section>
    </div>
  );
};

export default Sectionc;
