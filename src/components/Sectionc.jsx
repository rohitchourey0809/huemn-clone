import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice";

const Sectionc = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  console.log("categories", categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <div className="py-4">
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
                  <a href="/" className="block">
                    <img
                      key={category.idCategory}
                      src={category.strCategoryThumb}
                      alt="15-minute chicken & halloumi burgers"
                      className="w-auto h-auto object-cover"
                    />
                    <span className="block text-center mt-2 dark:text-yellow-700 hover:text-yellow-500">
                      {category.strCategory}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </ul>
        )}
      </div>
      {/* <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53085-15-minute-chicken-&amp;-halloumi-burgers-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg"
              alt="15-minute chicken & halloumi burgers"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              15-minute chicken & halloumi burgers
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53083-Lamb-Pilaf-(Plov)-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg"
              alt="Lamb Pilaf (Plov)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">Lamb Pilaf (Plov)</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53082-Strawberries-Romanoff-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg"
              alt="Strawberries Romanoff"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Strawberries Romanoff
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53081-Potato-Salad-(Olivier-Salad)-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg"
              alt="Potato Salad (Olivier Salad)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Potato Salad (Olivier Salad)
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53085-15-minute-chicken-&amp;-halloumi-burgers-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg"
              alt="15-minute chicken & halloumi burgers"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              15-minute chicken & halloumi burgers
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53083-Lamb-Pilaf-(Plov)-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg"
              alt="Lamb Pilaf (Plov)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">Lamb Pilaf (Plov)</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53082-Strawberries-Romanoff-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg"
              alt="Strawberries Romanoff"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Strawberries Romanoff
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53081-Potato-Salad-(Olivier-Salad)-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg"
              alt="Potato Salad (Olivier Salad)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Potato Salad (Olivier Salad)
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53085-15-minute-chicken-&amp;-halloumi-burgers-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg"
              alt="15-minute chicken & halloumi burgers"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              15-minute chicken & halloumi burgers
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53083-Lamb-Pilaf-(Plov)-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg"
              alt="Lamb Pilaf (Plov)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">Lamb Pilaf (Plov)</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a href="/meal/53082-Strawberries-Romanoff-Recipe" className="block">
            <img
              src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg"
              alt="Strawberries Romanoff"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Strawberries Romanoff
            </span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
          <a
            href="/meal/53081-Potato-Salad-(Olivier-Salad)-Recipe"
            className="block"
          >
            <img
              src="https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg"
              alt="Potato Salad (Olivier Salad)"
              className="w-full h-auto"
            />
            <span className="block text-center mt-2">
              Potato Salad (Olivier Salad)
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Sectionc;
