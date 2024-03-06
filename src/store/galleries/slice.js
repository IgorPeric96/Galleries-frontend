import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  galleries: [],
  error: null,
};

const galleriesSlice = createSlice({
  name: 'galleries',
  initialState,
  reducers: {
    startFetchGalleries(state) {
    
    },
    galleriesFetched(state, action) {
      state.galleries = action.payload;
    },
    galleriesFetchError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { startFetchGalleries, galleriesFetched, galleriesFetchError } = galleriesSlice.actions;

export default galleriesSlice.reducer;
