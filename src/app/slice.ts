import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomPhotos } from '../api/requests';
import { Photo } from '../types/Photo';
import { ListType } from '../types/ListType';

type State = {
  photos: Photo[];
  listType: ListType;
  hasError: boolean;
  loaded: boolean;
};

const initialState: State = {
  photos: [],
  listType: ListType.TILES,
  loaded: false,
  hasError: false,
};

export const loadInitialPhotos = createAsyncThunk('photos/fetchInitial', async () => {
  const photos = await getRandomPhotos();

  return photos;
});

export const loadMorePhotos = createAsyncThunk('photos/fetchMore',async () => {
  const photos = await getRandomPhotos(9);

  return photos;
})

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    changeListType: (state, action: PayloadAction<ListType>) => {
      state.listType = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadInitialPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.loaded = true;
      })
      .addCase(loadInitialPhotos.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      })
      .addCase(loadInitialPhotos.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      })
      .addCase(loadMorePhotos.fulfilled, (state, action) => {
        state.photos = state.photos.concat(action.payload);
        state.loaded = true;
      })
      .addCase(loadMorePhotos.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      })
      .addCase(loadMorePhotos.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      });
  },
});

export const { changeListType, setError, setLoaded } = photosSlice.actions;
export default photosSlice.reducer;
