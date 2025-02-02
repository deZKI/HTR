import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {TProduct} from "@/definitions/types/TProduct.ts";

const initialState: TProduct = {
  id: "",
  color: "",
  images: [""],
  brand_name: "",
  brand_desc: "",
  brand_image: "",
  name: "",
  size: "",
  price: 0,
  fabric: "",
  care: "",
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (_state, action: PayloadAction<TProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;