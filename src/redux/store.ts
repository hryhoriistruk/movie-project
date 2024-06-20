import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer:{
        movies: moviesReducer,
        theme: themeReducer,
        moviesSlice: moviesSlice.reducer,
        settingsSlice: settingsSlice.reducer,
        genresSlice: genresSlice.reducer,
        userSlice: userSlice.reducer,
    }
});

export {store}
