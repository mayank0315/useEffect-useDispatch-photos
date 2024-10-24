import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    page: 1, 
};

const unsplashSlice = createSlice({
    name: "unsplash",
    initialState,
    reducers: {
        loadPhotos: (state, action) => {
            state.photos = action.payload;
        },
        updatePage: (state, action) => {
            state.page = action.payload; 
        },
    },
});

export const { loadPhotos, updatePage } = unsplashSlice.actions;

export default unsplashSlice.reducer;

