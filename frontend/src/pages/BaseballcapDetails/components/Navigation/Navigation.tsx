import {FC} from "react";
import Breadcrumb from "@/ui/Breadcrumb/Breadcrumb.tsx";

const Navigation: FC = () => {
  const items = [{ name: 'Главная страница', link: '/' }, { name: 'Бейсболки', link: '/baseball-caps' }, { name: 'Kids New York Yankees', }];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 mx-auto max-w-[1072px] px-8 py-4">
        <Breadcrumb items={items}/>
      </div>
    </section>
  );
}

export default Navigation;