import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviename: null,
    movieResult: null,
  },
  reducers: {
    toggleGptSearchAction: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { moviename, movieResult } = action.payload;
      state.moviename = moviename;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearchAction, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
