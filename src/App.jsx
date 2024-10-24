import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from './reducers/unsplashSlice'; 
import { asyncLoadPhotos } from './actions/unsplashAction';

const App = () => {
  const dispatch = useDispatch();
  const { photos, page } = useSelector((state) => state.unsplash);
  
  useEffect(() => {
    const fetchPhotos = async () => {
      
      dispatch(asyncLoadPhotos());
      
      console.log(photos); 
    };

    fetchPhotos();
  }, [dispatch, page]);

  return photos.length > 0 ? (
    <div className="pagination-buttons">
        <button onClick={() => dispatch(updatePage(page - 1))} >
          Prev
        </button>
        <button onClick={() => dispatch(updatePage(page + 1))} >
          Next
        </button>
      </div>
  ):(
    <h1>hello</h1>
  );
};

export default App;
