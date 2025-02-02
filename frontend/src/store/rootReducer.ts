import {combineReducers} from '@reduxjs/toolkit';
import filtersSlice from "@/pages/Baseballcaps/components/Filters/filters.ts";
import productSlice from "@/ui/Product/productSlice.ts";

const rootReducer = combineReducers({
  filters: filtersSlice,
  product: productSlice,
});

export default rootReducer;