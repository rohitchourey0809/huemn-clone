import React from "react";

const Imagecontainer = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/meal-icon6.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center text-white font-bold"> Total Meals: 303</p>
      </div>
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/meal-icon4.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center text-white font-bold">
          Total Ingredients: 575{" "}
        </p>
      </div>
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/image2.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center text-white font-bold">Images: 303</p>
      </div>
    </div>
  );
};

export default Imagecontainer;
