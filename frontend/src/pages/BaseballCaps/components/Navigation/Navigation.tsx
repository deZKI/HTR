import {FC} from "react";
import BreadCrumbs from "@/ui/Breadcrumb/Breadcrumb.tsx";

const Navigation: FC = () => {
  const items = [
    { name: 'Главная страница', link: '/' },
    { name: 'Бейсболки' },
  ];

  return (
    <section className="w-full bg-[#EDEDED]">
      <div className="flex flex-col gap-6 mx-auto max-w-[1072px] px-8 py-4">
        <BreadCrumbs items={items} />
        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-center">
            <span className="text-[32px] font-medium leading-[39px] uppercase text-black">Бейсболки</span>
            <span className="text-[32px] font-medium leading-[39px] text-[#969696]">-</span>
            <span className="text-[32px] font-medium leading-[39px] text-[#969696]">248</span>
          </div>
          <ul className="flex gap-10">
            <li><a className="text-base font-medium leading-5 text-[#969696]" href="/">Мужчины</a></li>
            <li><a className="text-base font-medium leading-5 text-[#969696]" href="/">Женщины</a></li>
            <li><a className="text-base font-medium leading-5 text-[#969696]" href="/">Дети</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navigation;