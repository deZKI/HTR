import NewYorkYankeesImage from '@/assets/images/new-york-yankees_release.png';
import NewBalanceImage from '@/assets/images/new-balance_release.png';
import CarchattImage from '@/assets/images/carchatt_release.png';
import {FC} from "react";

const Releases: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-start items-start px-8 py-16 mx-auto max-w-[1072px] md:py-10">
        <h3 className="mb-6 text-2xl font-medium leading-[29px] text-black uppercase md:mb-4 md:text-base md:leading-5">
          Последние релизы
        </h3>
        <div>
          <ul className="flex gap-4">
            <li><img className="w-full" src={NewYorkYankeesImage} alt="New York Yankees"/></li>
            <li><img className="w-full" src={NewBalanceImage} alt="New Balance"/></li>
            <li><img className="w-full" src={CarchattImage} alt="Carchatt"/></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Releases;