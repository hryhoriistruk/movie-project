import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenresState {
  genres: string[];
}

const initialState: GenresState = {
  genres: [],
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;
export default genresSlice.reducer;
