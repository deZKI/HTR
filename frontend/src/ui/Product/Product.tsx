import {FC} from "react";

type TProps = {
  image: string;
  brand: string;
  name: string;
  price: number;
  colors: string;
}

const Product: FC<TProps> = ({ image, brand, name, price, colors }) => {
  return (
    <a className="flex flex-col gap-4 max-w-[234px] w-full" href="/">
      <div className="flex justify-center items-center p-4 w-full h">
        <img className="w-full h-full" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-[17px] text-[#969696]">{brand}</span>
        <span className="text-xs font-medium leading-[15px] text-black">{name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base font-medium leading-5 text-black">{price} ₽</span>
        <span className="text-xs font-medium leading-[15px] text-black">{colors}</span>
      </div>
    </a>
  );
}

export default Product;