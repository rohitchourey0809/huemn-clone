import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFavorites } from "../store/categoriesSlice";
import DraggableRecipe from "./DraggableRecipe";

const FavoritesComponent = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.categories.favorites);
  const [recipes, setRecipes] = useState(favorites);

  const handleDelete = (categoryId) => {
    dispatch(deleteFromFavorites(categoryId));
    alert("Item Deleted successfully");
  };

  const moveRecipe = (fromIndex, toIndex) => {
    const updatedRecipes = [...recipes];
    const [movedRecipe] = updatedRecipes.splice(fromIndex, 1);
    updatedRecipes.splice(toIndex, 0, movedRecipe);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="container">
      <center>
        {recipes.map((category, index) => (
          <DraggableRecipe
            key={category.idCategory}
            category={category}
            index={index}
            moveRecipe={moveRecipe}
            handleDelete={handleDelete}
          />
        ))}
      </center>
    </div>
  );
};

export default FavoritesComponent;
