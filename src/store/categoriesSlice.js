import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

// Action to add favorite category
export const addFavorite = createAction("categories/addFavorite")

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
    // Perform any necessary logic here
    // Add favorite to local storage
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...favoritesFromStorage, category];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Dispatch addFavorite action with the category data
    dispatch(addFavorite(category));

    return category;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload); // Update favorites array
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
