import React from "react";

const Sectiond = () => {
  return (
    <div>
      <div className="center">
        <h3 className="text-center">Random Ingredients</h3>
        <div className="flex flex-wrap justify-center">
          <div className="w-48 m-2">
            <a href="/ingredient/319-Tuna">
              <figure>
                <img
                  src="/images/ingredients/Tuna.png"
                  className="w-full"
                  alt="Tuna"
                />
                <figcaption className="text-center">Tuna</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="/ingredient/255-Puff-Pastry">
              <figure>
                <img
                  src="/images/ingredients/Puff Pastry.png"
                  className="w-full"
                  alt="Puff Pastry"
                />
                <figcaption className="text-center">Puff Pastry</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="/ingredient/477-Dried-Fruit">
              <figure>
                <img
                  src="/images/ingredients/Dried Fruit.png"
                  className="w-full"
                  alt="Dried Fruit"
                />
                <figcaption className="text-center">Dried Fruit</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="/ingredient/600-Mulukhiyah">
              <figure>
                <img
                  src="/images/ingredients/Mulukhiyah.png"
                  className="w-full"
                  alt="Mulukhiyah"
                />
                <figcaption className="text-center">Mulukhiyah</figcaption>
              </figure>
            </a>
          </div>
        </div>
        <img src="/images/separator.jpg" className="w-full" alt="Separator" />
      </div>

      <h3 className="text-center">Browse Country</h3>
      <div className="flex justify-center flex-wrap">
        {/* <!-- Replace each <a> tag with Tailwind CSS classes and <img> tag --> */}
        <a href="/browse/area/gb">
          <img src="/images/icons/flags/big/64/gb.png" alt="" />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>

        <a href="/browse/area/gb">
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"
            alt=""
          />
        </a>
        
      </div>

      <h3 className="text-center">Browse By Name</h3>
      <h2 className="text-center">
        {/* <!-- Replace with Tailwind CSS classes and links --> */}
      </h2>
    </div>
  );
};

export default Sectiond;
