import {FC} from "react";
import PrimaryTitle from "@/ui/PrimaryTitle/PrimaryTitle.tsx";

const Advantages: FC = () => {
  return (
    <section className="w-full bg-neutral-200">
      <div className="flex flex-col items-center px-6 py-4 mx-auto max-w-[920px] md:py-12">
        <PrimaryTitle text="Наши приемущуства" />
        <ul className="flex justify-center items-center gap-8 w-full flex-wrap md:flex-nowrap">
          <li className="flex flex-col items-center w-1/3">
            <span className="mb-2 text-sm font-bold leading-4 text-black text-center">Привозим кепки из китая</span>
            <span className="text-sm font-medium leading-4 text-black text-center">Привезли уже &lt; 300</span>
          </li>
          <li className="h-[50px] w-[1px] bg-black hidden md:block"></li>
          <li className="flex flex-col items-center w-1/3">
            <span className="mb-2 text-sm font-bold leading-4 text-black text-center">Быстрая доставка</span>
            <span className="text-sm font-medium leading-4 text-black text-center">Доставляем быстро или дешёво</span>
          </li>
          <li className="h-[50px] w-[1px] bg-black hidden md:block"></li>
          <li className="flex flex-col items-center w-1/3">
            <span className="mb-2 text-sm font-bold leading-4 text-black text-center">Минимальная наценка</span>
            <span className="text-sm font-medium leading-4 text-black text-center">Берём оплату только за доставку</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advantages;