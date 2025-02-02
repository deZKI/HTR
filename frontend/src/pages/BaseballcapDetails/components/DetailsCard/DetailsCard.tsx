import {FC} from "react";
import ImageGallery from "@/pages/BaseballcapDetails/components/ImageGallery/ImageGallery.tsx";
import ProductInfo from "@/pages/BaseballcapDetails/components/ProductInfo/ProductInfo.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";

type TProps = {
  product: TProduct;
}

const DetailsCard: FC<TProps> = ({ product }) => {
  const handleOpenModal = () => {}

  return (
    <section className="w-full">
      <div className="flex mx-auto gap-6 max-w-[1072px] p-8">
        <ImageGallery product={product} openModal={handleOpenModal} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}

export default DetailsCard;