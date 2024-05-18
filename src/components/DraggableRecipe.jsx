import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableRecipe = ({ category, index, moveRecipe, handleDelete }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "RECIPE",
    hover(item) {
      if (item.index !== index) {
        moveRecipe(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "RECIPE",
    item: { type: "RECIPE", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`bg-custom-color-1 py-30 border-2 hover:border-green-500 transform transition duration-500 hover:scale-105 animate-fadeIn mb-4 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <a
        href="/"
        className="flex flex-col justify-evenly items-center border-gray-500 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-custom-color-1 bg-custom-color-1 transition duration-500 hover:shadow-lg"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <center>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg transition duration-500 hover:opacity-90"
              src={category.strCategoryThumb}
              alt=""
            />
          </center>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition duration-500 hover:text-green-500">
            {category.strCategory}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 transition duration-500 hover:text-gray-900">
            {category.strCategoryDescription}
          </p>
        </div>
      </a>
      <center>
        <button
          onClick={() => handleDelete(category.idCategory)}
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-500"
        >
          Delete
        </button>
      </center>
    </div>
  );
};

export default DraggableRecipe;
