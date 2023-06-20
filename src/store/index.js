import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Features/moviesSlice";
/**
 * Buat Store : State Global
 * Menyimpan berbagai reducer
 */

const store = configureStore({
    reducer : {
        movies: moviesReducer,

    },
});
export default store;