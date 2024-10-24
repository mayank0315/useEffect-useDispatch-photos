import axios from "axios";
import { loadPhotos } from "../reducers/unsplashSlice"; 

export const asyncLoadPhotos = () => async (dispatch, getState) => {
    try {
        const state = getState().unsplash; // Access the unsplash state
        const { data } = await axios.get(
            `https://picsum.photos/v2/list?page=${state.page}&limit=10`
        );
        dispatch(loadPhotos(data)); 
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};