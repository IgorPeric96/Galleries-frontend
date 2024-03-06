import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleriesFetched, galleriesFetchError, startFetchGalleries } from '../store/galleries/slice';
import { selectAllGalleries } from '../store/galleries/selectors';
import GalleriesService from '../services/galleries.service';

const HomePage = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(selectAllGalleries);

  useEffect(() => {
    const fetchGalleries = async () => {
      dispatch(startFetchGalleries());
      try {
        const fetchedGalleries = await GalleriesService.getAllGalleries();
        dispatch(galleriesFetched(fetchedGalleries));
      } catch (error) {
        dispatch(galleriesFetchError(error.toString()));
      }
    };

    fetchGalleries();
  }, [dispatch]);

  return (
    <div>
      <h1>All Galleries</h1>
      <div>
        {galleries.length > 0 ? (
          <ul>
            {galleries.map((gallery) => (
              <li key={gallery.id}>{gallery.name}</li> 
            ))}
          </ul>
        ) : (
          <p>Loading Galleries</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
