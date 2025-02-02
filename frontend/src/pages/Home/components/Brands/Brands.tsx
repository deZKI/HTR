import Brand1Image from "@/assets/images/brand1.png";
import Brand2Image from "@/assets/images/brand2.png";
import Brand3Image from "@/assets/images/brand3.png";
import Brand4Image from "@/assets/images/brand4.png";
import {FC} from "react";

const Brands: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center px-8 pt-16 pb-6 mx-auto max-w-[1072px] md:pt-10">
        <h3 className="mb-8 text-2xl font-medium leading-[29px] text-black text-center md:mb-6 md:text-base md:leading-5">
          Покупайте кепки в магазине HTR - Самые крутые кепки только у нас!
        </h3>
        <div className="w-full">
          <ul className="flex justify-center items-center w-full overflow-x-auto gap-8 scrollbar-hide md:gap-8">
            <li className="shrink-0">
              <a className="flex justify-center items-center w-[130px]" href="/">
                <img className="w-full" src={Brand1Image} alt="бренд"/>
              </a>
            </li>
            <li className="shrink-0">
              <a className="flex justify-center items-center w-[130px]" href="/">
                <img className="w-full" src={Brand2Image} alt="бренд"/>
              </a>
            </li>
            <li className="shrink-0">
              <a className="flex justify-center items-center w-[130px]" href="/">
                <img className="w-full" src={Brand3Image} alt="бренд"/>
              </a>
            </li>
            <li className="shrink-0">
              <a className="flex justify-center items-center w-[130px]" href="/">
                <img className="w-full" src={Brand4Image} alt="бренд"/>
              </a>
            </li>
            <li className="shrink-0">
              <button className="flex flex-col justify-center items-center gap-4 p-4 w-[130px] h-[130px] bg-black">
                <span className="text-base font-medium leading-5 text-white text-center">
                  Другие бренды
                </span>
                <span className="flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0V20" stroke="white"/>
                    <path d="M0 10H20" stroke="white"/>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Brands;