import {FC} from "react";
import Product from "@/ui/Product/Product.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";

type TProps = {
  products: TProduct[];
}

const ProductsList: FC<TProps> = ({ products }) => {
  return (
    <section className="w-full">
      <div className="flex justify-between mx-auto max-w-[1072px] p-8">
        <ul className="flex flex-grow flex-wrap gap-6">
          {products.map((product) =>
            <Product
              image={product.image}
              brand={product.brand}
              name={product.name}
              price={product.price}
              colors={product.colors}
              key={product.id}
            />
          )}
        </ul>
      </div>
    </section>
  );
}

export default ProductsList;