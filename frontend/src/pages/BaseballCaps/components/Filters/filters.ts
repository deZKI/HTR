import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {TFiltersState} from "@/definitions/types/TFiltersSlice";

const initialState: TFiltersState = {
  form: null,
  brand: null,
  color: null,
  league: null,
  collection: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setForm(state, action: PayloadAction<string | null>) {
      state.form = action.payload;
    },
    setBrand(state, action: PayloadAction<string | null>) {
      state.brand = action.payload;
    },
    setColor(state, action: PayloadAction<string | null>) {
      state.color = action.payload;
    },
    setLeague(state, action: PayloadAction<string | null>) {
      state.league = action.payload;
    },
    setCollection(state, action: PayloadAction<string | null>) {
      state.collection = action.payload;
    },
    resetForm(state) {
      state.form = null;
    },
    resetBrand(state) {
      state.brand = null;
    },
    resetColor(state) {
      state.color = null;
    },
    resetLeague(state) {
      state.league = null;
    },
    resetCollection(state) {
      state.collection = null;
    },
    resetAllFilters(state) {
      state.form = null;
      state.brand = null;
      state.color = null;
      state.league = null;
      state.collection = null;
    },
  },
});

export const {
  setForm,
  setBrand,
  setColor,
  setLeague,
  setCollection,
  resetForm,
  resetBrand,
  resetColor,
  resetLeague,
  resetCollection,
  resetAllFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;