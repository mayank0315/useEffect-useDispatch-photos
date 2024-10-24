import { configureStore } from '@reduxjs/toolkit';
import unsplashReducer from '../reducers/unsplashSlice'; 

export const store = configureStore({
    reducer: {
        unsplash: unsplashReducer, 
    },
});

export default store;
