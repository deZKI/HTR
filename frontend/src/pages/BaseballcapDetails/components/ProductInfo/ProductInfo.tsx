import {FC} from "react";
import type {TProduct} from "@/definitions/types/TProduct.ts";

type TProps = {
  product: TProduct;
}

const ProductInfo: FC<TProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[320px]">
      <div className="flex flex-col gap-2">
        <h4 className="m-0 text-base font-bold leading-5 text-[#D9D9D9]">{product.brand_name}</h4>
        <h5 className="m-0 text-2xl font-medium leading-[29px] text-[#363636]">{product.name}</h5>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1.5">
          <span className="text-sm font-medium leading-[17px] text-[#969696]">Цвет:</span>
          <span className="text-sm font-medium leading-[17px] text-[#000000]">{product.color}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
          <button className="flex justify-center items-center p-1 border border-dotted border-[#969696] max-w-[74px] w-full">
            <img className="w-full" src={product.images[0]} alt={product.name}/>
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1.5">
          <span className="text-sm font-medium leading-[17px] text-[#969696]">Размер</span>
          <span className="text-sm font-medium leading-[17px] text-[#000000]">{product.size}</span>
        </div>
        <button className="text-sm font-medium leading-[17px] text-[#969696]">Таблица размеров</button>
      </div>
      <div className="text-[32px] font-medium leading-[39px]">
        {product.price} ₽
      </div>
      <div className="flex gap-2">
        <button className="flex justify-center items-center px-6 py-4 w-full text-base font-medium leading-5 text-white bg-[#2C2C2C]">Добавить в корзину</button>
        <button className="flex justify-center items-center w-[52px] h-[52px] bg-[#D9D9D9]">
          <svg width="22.500000" height="20.643738" viewBox="0 0 22.5 20.6437" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M11.36 17.49L11.25 17.6L11.12 17.49C5.78 12.64 2.25 9.43 2.25 6.18C2.25 3.93 3.93 2.25 6.18 2.25C7.91 2.25 9.6 3.37 10.2 4.9L12.29 4.9C12.89 3.37 14.58 2.25 16.31 2.25C18.56 2.25 20.25 3.93 20.25 6.18C20.25 9.43 16.71 12.64 11.36 17.49ZM16.31 0C14.35 0 12.47 0.91 11.25 2.33C10.02 0.91 8.14 0 6.18 0C2.72 0 0 2.71 0 6.18C0 10.42 3.82 13.9 9.61 19.15L11.25 20.64L12.88 19.15C18.67 13.9 22.5 10.42 22.5 6.18C22.5 2.71 19.77 0 16.31 0Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center max-w-[83px] w-full">
          <img className="w-full" src={product.brand_image} alt={product.brand_name} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold leading-[17px] text-black">{product.brand_name}</span>
          <span className="text-xs font-medium leading-[15px] text-black">{product.brand_desc}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-bold leading-[17px] text-black">Материал и уход</div>
        <div className="flex gap-1.5">
          <span className="text-sm font-medium leading-[17px] text-[#969696]">Материал:</span>
          <span className="text-sm font-medium leading-[17px] text-black">{product.fabric}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium leading-[17px] text-[#969696]">Уход:</span>
          <span className="text-sm font-medium leading-[17px] text-black">{product.care}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;