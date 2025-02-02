import {FC} from "react";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {setProduct} from "@/ui/Product/productSlice.ts";
import {Link} from "react-router-dom";

type TProps = {
  product: TProduct;
}

const Product: FC<TProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(setProduct(product));

  return (
    <Link id={product.id} className="flex flex-col gap-4 max-w-[234px] w-full" to={`/baseball-caps/${product.id}`} onClick={handleClick}>
      <div className="flex justify-center items-center p-4 max-w-full">
        <img className="w-full h-full" src={product.images[0]} alt={product.images[0]}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-[17px] text-[#969696]">{product.brand_name}</span>
        <span className="text-xs font-medium leading-[15px] text-black">{product.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base font-medium leading-5 text-black">{product.price} ₽</span>
        <span className="text-xs font-medium leading-[15px] text-black">5 расцветок</span>
      </div>
    </Link>
  );
}

export default Product;