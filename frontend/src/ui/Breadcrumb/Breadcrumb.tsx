import {FC} from 'react';
import type {TBreadcrumbItem} from "@/definitions/types/TBreadcrumbItem.ts";
import {Link} from 'react-router-dom';

type TProps = {
  items: TBreadcrumbItem[];
}

const Breadcrumb: FC<TProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ul className="flex items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-1" key={index}>
              {isLast && <span className="text-sm font-bold leading-[17px] text-[#969696]">/</span>}
              {isLast
                ? <span className="text-sm font-bold leading-[17px] text-[#363636]">{item.name}</span>
                : item.link
                  ? <Link className="text-sm font-bold leading-[17px] text-[#969696]" to={item.link}>{item.name}</Link>
                  : <span className="text-sm font-bold leading-[17px] text-[#363636]">{item.name}</span>
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;