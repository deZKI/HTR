import AdjustableBaseballcapsImage from "@/assets/images/adjustable-baseballcaps_categories.png";
import SnapbackImage from "@/assets/images/snapback_categories.png";
import {FC} from "react";
import PrimaryTitle from "@/ui/PrimaryTitle/PrimaryTitle.tsx";

const Categories: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start px-8 py-16 mx-auto max-w-[1072px] md:py-12">
        <PrimaryTitle text="Популярные категории" />
        <ul className="flex gap-6 flex-wrap w-full md:flex-nowrap">
          <li className="flex justify-between items-center p-4 w-full h-[88px] bg-neutral-700 md:w-full">
            <div className="max-w-[182px] text-white text-base font-medium uppercase leading-5">
              Регулируемые бейсболки
            </div>
            <div className="max-w-[78px]">
              <img className="w-full" src={AdjustableBaseballcapsImage} alt="регулируемые бейсболки"/>
            </div>
          </li>
          <li className="flex justify-between items-center p-4 w-full h-[88px] bg-neutral-700 md:w-full">
            <div className="max-w-[182px] text-white text-base font-medium uppercase leading-5">
              Snapback
            </div>
            <div className="max-w-[78px]">
              <img className="w-full" src={SnapbackImage} alt="Snapback"/>
            </div>
          </li>
          <li className="flex justify-between items-center p-4 w-full h-[88px] bg-neutral-700 md:w-full">
            <div className="max-w-[182px] text-white text-base font-medium uppercase leading-5">
              Регулируемые бейсболки
            </div>
            <div className="max-w-[78px]">
              <img className="w-full" src={AdjustableBaseballcapsImage} alt="регулируемые бейсболки"/>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Categories;