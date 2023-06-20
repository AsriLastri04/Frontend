// import create slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";


// Buat Slice
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    // addmovie to movies

    deletedMovie() {
    },
  },
});
   
// generate reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deletedMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deletedMovie };
