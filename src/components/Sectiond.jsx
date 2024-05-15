import React from "react";

const Sectiond = () => {
  let categories = [
    {
      idCategory: "1",
      strCategory: "Custard 20Powder",
      strCategoryThumb:
        "https://www.themealdb.com/images/ingredients/Custard%20Powder.png",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      idCategory: "2",
      strCategory: "Puff",
      strCategoryThumb:
        "https://www.themealdb.com/images/ingredients/Puff Pastry.png",
      strCategoryDescription:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      idCategory: "4",
      strCategory: "Dried Fruit",
      strCategoryThumb:
        "https://www.themealdb.com/images/ingredients/Dried Fruit.png",
      strCategoryDescription:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
  ];
  return (
    <div>
      <div className="py-4">
        <center>
          <b className="text-white">Random Ingredients</b>
        </center>
        <div>
          <ul>
            <div className="flex flex-wrap justify-center items-center text-center">
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
                      className="w-60 h-60"
                    />
                    <span className="text-center  dark:text-yellow-700 hover:text-yellow-500 mr-20">
                      {category.strCategory}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </ul>
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

      {/* <div className="center">
        <h3 className="text-center text-white py-2 ">Random Ingredients</h3>
        <div className="flex flex-wrap justify-center dark:text-yellow-700 font-bold">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <a href="https://www.themealdb.com/ingredient/319-Tuna">
              <figure>
                <img
                  src="https://www.themealdb.com/images/ingredients/Tuna.png"
                  className="w-full h-auto"
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
                  src="https://www.themealdb.com/images/ingredients/Puff-Pastry.png"
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
      </div> */}
      <section className="bg-custom-color-1">
        <img
          src="https://www.themealdb.com/images/separator.jpg"
          className="w-full object-cover bg-white"
          alt="SeparatorImage"
        />
      </section>
      <h3 className="text-center text-white">Browse Country</h3>
      <div className="flex justify-center flex-wrap max-w-screen-2xl p-4">
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
