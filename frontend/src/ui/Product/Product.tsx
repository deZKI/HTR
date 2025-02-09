import {FC} from "react";
import {defineProductContainerClasses, defineProductTextClasses, formatPrice} from "@/lib/utils.ts";
import {EProductVariant} from "@/definitions/enums/EProductVariant.ts";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import {ETextSize} from "@/definitions/enums/ETextSize.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {setProduct} from "@/ui/Product/productSlice.ts";
import {Link} from "react-router-dom";

type TProps = {
  product: TProduct;
  variant?: EProductVariant;
  textSize?: ETextSize;
};

const Product: FC<TProps> = ({ product, variant = EProductVariant.default, textSize = ETextSize.medium}) => {
  const { brandClass, nameClass, priceClass, colorCountClass } = defineProductTextClasses(textSize);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(setProduct(product));

  return (
    <Link
      id={product.id}
      className={defineProductContainerClasses(variant)}
      to={`/baseball-caps/${product.id}`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center p-4 max-w-full">
        <img className="w-full h-full" src={product.images[0]} alt={product.images[0]} />
      </div>
      <div className="flex flex-col gap-1">
        <span className={brandClass}>{product.brand_name}</span>
        <span className={nameClass}>{product.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className={priceClass}>{formatPrice(product.price)} ₽</span>
        <span className={colorCountClass}>5 расцветок</span>
      </div>
    </Link>
  );
};

export default Product;