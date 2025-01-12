import {combineReducers} from '@reduxjs/toolkit';
import themeSlice from "@/features/Theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export default rootReducer;