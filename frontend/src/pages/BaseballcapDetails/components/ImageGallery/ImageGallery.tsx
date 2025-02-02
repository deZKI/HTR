import {FC} from "react";
import type {TProduct} from "@/definitions/types/TProduct.ts";

type TProps = {
  product: TProduct;
  openModal: (image: string) => void;
}

const ImageGallery: FC<TProps> = ({ product, openModal }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[664px] w-full">
      <button className="mb-4" onClick={() => openModal(product.images[0])}>
        <img className="w-full" src={product.images[0]} alt="Main view" />
      </button>
      <div className="flex flex-wrap gap-6">
        {product.images.slice(1, product.images.length).map((image, index) => (
          <button onClick={() => openModal(image)}>
            <img className="max-w-[320px]" src={image} alt={`Thumbnail ${index + 1}`} key={index} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;