import React from "react";
import Meallobo from "../../Image/Meallobo.png";
// import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navmeal = () => {
  return (
    <nav className="border-gray-200 bg-brown">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="https://www.themealdb.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Meallobo} className="h-8" alt="Meal Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col md:flex-row items-center p-4 md:p-0 mt-4 space-y-2 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block h-auto w-auto text-white bg-red-700 rounded md:bg-red-700 md:text-white md:p-4 dark:text-white md:dark:text-white-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Api
              </a>
            </li>
            <li>
              <Link
                to="/favorites"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Favourate
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <table className="w-350 mx-auto">
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <form
                          className="navbar-form"
                          action="/browse/search/"
                          autoComplete="off"
                        >
                          <div className="flex">
                            <input
                              type="text"
                              name="s"
                              className=" border-2 h-8 w-20 hover:border-grey"
                              autoComplete="off"
                              placeholder="Search"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                              {/* Adding search icon */}
                            </div>
                            <div className="input-group-btn">
                              <button type="submit" className="btn btn-default">
                                <span className="glyphicon glyphicon-search"></span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navmeal;
