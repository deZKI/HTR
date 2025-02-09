import {FC, useRef, useState} from "react";
import SliderButton from "@/pages/Account/components/SliderButton/SliderButton.tsx";
import {EProductVariant} from "@/definitions/enums/EProductVariant.ts";
import SecondaryTitle from "@/ui/SecondaryTitle/SecondaryTitle.tsx";
import {EDirections} from "@/definitions/enums/EDirections.ts";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import {ETextSize} from "@/definitions/enums/ETextSize.ts";
import Product from "@/ui/Product/Product.tsx";

type TProps = {
  products: TProduct[];
};

const ProductsSlider: FC<TProps> = ({ products }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleSliderRef = (node: HTMLDivElement | null) => {
    sliderRef.current = node;

    if (node) {
      const { scrollLeft, scrollWidth, clientWidth } = node;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const handleClick = (direction: EDirections.left | EDirections.right) => {
    if (!sliderRef.current) return;

    const { scrollLeft, clientWidth } = sliderRef.current;
    const scrollAmount = clientWidth / 1.25;

    sliderRef.current.scrollTo({
      left:
        direction === EDirections.left
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-col">
      <SecondaryTitle text="Вы смотрели" />
      <div className="relative flex items-center">
        {canScrollLeft && <SliderButton direction={EDirections.left} onClick={handleClick} />}
        <div className="flex flex-nowrap gap-4 w-full overflow-x-auto scrollbar-hide" onScroll={handleScroll} ref={handleSliderRef}>
          {products.map((product) => (
            <div key={product.id} className="shrink-0">
              <Product
                product={product}
                variant={EProductVariant.slider}
                textSize={ETextSize.small}
              />
            </div>
          ))}
        </div>
        {canScrollRight && <SliderButton direction={EDirections.right} onClick={handleClick} />}
      </div>
    </div>
  );
};

export default ProductsSlider;