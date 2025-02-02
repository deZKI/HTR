import {FC} from "react";
import SecondaryTitle from "@/ui/SecondaryTitle/SecondaryTitle.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import Product from "@/ui/Product/Product.tsx";

type TProps = {
  products: TProduct[];
  titleIsActive: boolean;
}

const ProductsList: FC<TProps> = ({ products, titleIsActive }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto max-w-[1072px] p-8">
        {titleIsActive && <SecondaryTitle text="Рекомендации" />}
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