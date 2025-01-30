import {combineReducers} from '@reduxjs/toolkit';
import filtersSlice from "@/pages/BaseballCaps/components/Filters/filters.ts";

const rootReducer = combineReducers({
  filters: filtersSlice
});

export default rootReducer;