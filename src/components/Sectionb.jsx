import React from "react";
import { SearchIcon } from "@heroicons/react/outline"; // Importing the search icon from heroicons

const Sectionb = () => {
  return (
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
                  className="form-control pr-10" // Add padding right to make space for icon
                  autoComplete="off"
                  placeholder="Search for a Meal..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400 border-2 border-black" />{" "}
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
  );
};

export default Sectionb;
