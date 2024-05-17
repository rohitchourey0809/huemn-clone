import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorite = createAction("categories/addFavorite");
export const deleteFromFavorites = createAction(
  "categories/deleteFromFavorites"
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  }
);

export const addToFavorites = createAsyncThunk(
  "categories/addToFavorites",
  async (category, { dispatch }) => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...favoritesFromStorage, category];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    dispatch(addFavorite(category));
    return category;
  }
);

export const removeFromFavoritesThunk = createAsyncThunk(
  "categories/removeFromFavoritesThunk",
  async (categoryId, { dispatch }) => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favoritesFromStorage.filter(
      (category) => category.idCategory !== categoryId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    return categoryId;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (category) => category.idCategory !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
