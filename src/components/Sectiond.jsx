import React from "react";

const Sectiond = () => {
  return (
    <div>
      <div className="center">
        <h3 className="text-center text-white py-2 ">Random Ingredients</h3>
        <div className="flex flex-wrap justify-center dark:text-yellow-700 font-bold">
          <div className="w-48 m-2">
            <a href="https://www.themealdb.com/ingredient/319-Tuna">
              <figure>
                <img
                  src="https://www.themealdb.com/images/ingredients/Tuna.png"
                  className="w-full"
                  alt="Tuna"
                />
                <figcaption className="text-center">Tuna</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="https://www.themealdb.com/ingredient/255-Puff-Pastry">
              <figure>
                <img
                  src="https://www.themealdb.com/images/ingredients/Puff Pastry.png"
                  className="w-full"
                  alt="Puff Pastry"
                />
                <figcaption className="text-center">Puff Pastry</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="https://www.themealdb.com/ingredient/477-Dried-Fruit">
              <figure>
                <img
                  src="https://www.themealdb.com/images/ingredients/Dried Fruit.png"
                  className="w-full"
                  alt="Dried Fruit"
                />
                <figcaption className="text-center">Dried Fruit</figcaption>
              </figure>
            </a>
          </div>
          <div className="w-48 m-2">
            <a href="https://www.themealdb.com/ingredient/600-Mulukhiyah">
              <figure>
                <img
                  src="https://www.themealdb.com/images/ingredients/Mulukhiyah.png"
                  className="w-full"
                  alt="Mulukhiyah"
                />
                <figcaption className="text-center">Mulukhiyah</figcaption>
              </figure>
            </a>
          </div>
        </div>

        <section className="bg-custom-color-1">
          <img
            src="https://www.themealdb.com/images/separator.jpg"
            className="w-full object-cover bg-white"
            alt="SeparatorImage"
          />
        </section>
      </div>

      <h3 className="text-center text-white">Browse Country</h3>
      <div className="flex justify-center flex-wrap max-w-screen-2xl p-4">
        {/* <!-- Replace each <a> tag with Tailwind CSS classes and <img> tag --> */}
        <a href="https://www.themealdb.com/browse/area/us">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/us.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/fr">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/fr.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ca">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ca.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/jm">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/jm.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/cn">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/cn.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/nl">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/nl.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/eg">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/eg.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/gr">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/gr.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/in">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/in.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ie">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ie.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/it">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/it.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/jp">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/jp.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/kn">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/kn.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/my">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/my.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/mx">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/mx.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ma">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ma.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/hr">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/hr.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/no">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/no.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/pt">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/pt.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ru">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ru.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ar">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ar.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/es">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/es.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/sk">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/sk.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/th">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/th.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/sa">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/sa.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/vn">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/vn.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/tr">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/tr.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/sy">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/sy.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/dz">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/dz.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/tn">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/tn.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/pl">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/pl.png" />
        </a>

        <a href="https://www.themealdb.com/browse/area/ph">
          {" "}
          <img src="https://www.themealdb.com/images/icons/flags/big/64/ph.png" />
        </a>
      </div>

      <h3 className="text-center text-white py-2">Browse By Name</h3>
      <h2 className="text-center dark:text-yellow-700 font-bold">
        <a href="https://www.themealdb.com/browse/letter/a">A</a> /
        <a href="https://www.themealdb.com/browse/letter/b">B</a> /
        <a href="https://www.themealdb.com/browse/letter/c">C</a> /
        <a href="https://www.themealdb.com/browse/letter/d">D</a> /
        <a href="https://www.themealdb.com/browse/letter/e">E</a> /
        <a href="https://www.themealdb.com/browse/letter/f">F</a> /
        <a href="https://www.themealdb.com/browse/letter/g">G</a> /
        <a href="https://www.themealdb.com/browse/letter/h">H</a> /
        <a href="https://www.themealdb.com/browse/letter/i">I</a> /
        <a href="https://www.themealdb.com/browse/letter/j">J</a> /
        <a href="https://www.themealdb.com/browse/letter/k">K</a> /
        <a href="https://www.themealdb.com/browse/letter/l">L</a> /
        <a href="https://www.themealdb.com/browse/letter/m">M</a> /
        <a href="https://www.themealdb.com/browse/letter/n">N</a> /
        <a href="https://www.themealdb.com/browse/letter/o">O</a> /
        <a href="https://www.themealdb.com/browse/letter/p">P</a> /
        <a href="https://www.themealdb.com/browse/letter/q">Q</a> /
        <a href="https://www.themealdb.com/browse/letter/r">R</a> /
        <a href="https://www.themealdb.com/browse/letter/s">S</a> /
        <a href="https://www.themealdb.com/browse/letter/t">T</a> /
        <a href="https://www.themealdb.com/browse/letter/u">U</a> /
        <a href="https://www.themealdb.com/browse/letter/v">V</a> /
        <a href="https://www.themealdb.com/browse/letter/w">W</a> /
        <a href="https://www.themealdb.com/browse/letter/x">X</a> /
        <a href="https://www.themealdb.com/browse/letter/y">Y</a> /
        <a href="https://www.themealdb.com/browse/letter/z">Z</a>
      </h2>
    </div>
  );
};

export default Sectiond;
