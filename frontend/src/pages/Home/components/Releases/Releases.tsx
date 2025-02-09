import {FC} from "react";
import NewYorkYankeesImage from '@/assets/images/new-york-yankees_release.png';
import NewBalanceImage from '@/assets/images/new-balance_release.png';
import CarchattImage from '@/assets/images/carchatt_release.png';
import PrimaryTitle from "@/ui/PrimaryTitle/PrimaryTitle.tsx";
import {Link} from "react-router-dom";

const Releases: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-start items-start px-8 py-16 mx-auto max-w-[1072px] md:py-10">
        <PrimaryTitle text="Последние релизы" />
        <div className="flex gap-4">
          <Link to="/collections">
            <img className="w-full" src={NewYorkYankeesImage} alt="New York Yankees"/>
          </Link>
          <Link to="/collections">
            <img className="w-full" src={NewBalanceImage} alt="New Balance"/>
          </Link>
          <Link to="/collections">
            <img className="w-full" src={CarchattImage} alt="Carchatt"/>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Releases;