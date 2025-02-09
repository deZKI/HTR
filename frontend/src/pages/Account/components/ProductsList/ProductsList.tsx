import {FC} from "react";
import {EProductVariant} from "@/definitions/enums/EProductVariant.ts";
import SecondaryTitle from "@/ui/SecondaryTitle/SecondaryTitle.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import Product from "@/ui/Product/Product.tsx";

type TProps = {
  products: TProduct[];
}

const ProductsList: FC<TProps> = ({ products }) => {
  return (
    <div className="flex flex-col">
      <SecondaryTitle text="Рекомендации" />
      <div className="flex flex-grow flex-wrap gap-4">
        {products.map((product) =>
          <Product product={product} variant={EProductVariant.small} />
        )}
      </div>
    </div>
  );
}

export default ProductsList;