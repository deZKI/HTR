import {FC} from "react";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import Product from "@/ui/Product/Product.tsx";

type TProps = {
  products: TProduct[];
}

const ProductsList: FC<TProps> = ({ products }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto max-w-[1072px] p-8">
        <ul className="flex flex-grow flex-wrap gap-6">
          {products.map((product) =>
            <Product product={product} />
          )}
        </ul>
      </div>
    </section>
  );
}

export default ProductsList;