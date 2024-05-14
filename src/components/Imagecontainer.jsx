import React from "react";

const Imagecontainer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/meal-icon6.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center">Text 1</p>
      </div>
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/meal-icon4.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center">Text 2</p>
      </div>
      <div className="imageall flex items-center mx-2">
        <img
          src="https://www.themealdb.com/images/icons/image2.png"
          alt="Dummy"
          className="w-6 h-6 mr-2"
        />
        <p className="text-center">Text 3</p>
      </div>
    </div>
  );
};

export default Imagecontainer;
