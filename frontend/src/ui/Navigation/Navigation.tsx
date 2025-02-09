import {FC} from "react";
import {ENavigationVariant} from "@/definitions/enums/ENavigationVariant.ts";
import {TBreadcrumbItem} from "@/definitions/types/TBreadcrumbItem.ts";
import {TCategoryItem} from "@/definitions/types/TCategoryItem.ts";
import Breadcrumb from "@/ui/Breadcrumb/Breadcrumb";

type TProps = {
  title?: string;
  items: TBreadcrumbItem[];
  variant?: ENavigationVariant;
  categories?: TCategoryItem[];
  statsNumber?: number;
  description?: string;
};

const Navigation: FC<TProps> = ({
  title,
  items,
  variant = "default",
  categories = [],
  statsNumber,
  description,
}) => {
  const appliedBgColor = variant === ENavigationVariant.default ? "transparent" : "#EDEDED";

  return (
    <section className="w-full" style={{ backgroundColor: appliedBgColor }}>
      <div className="flex flex-col gap-6 px-8 py-4 mx-auto max-w-[1072px]">
        <Breadcrumb items={items} />
        {variant === ENavigationVariant.caps &&
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              {title && <h2 className="m-0 text-[32px] font-medium leading-10 text-black uppercase">{title}</h2>}
              {statsNumber &&
                <>
                  <span className="text-[32px] font-medium leading-10 text-[#969696]">-</span>
                  <span className="text-[32px] font-medium leading-10 text-[#969696]">{statsNumber}</span>
                </>
              }
            </div>
            {categories.length > 0 &&
              <div className="flex gap-10">
                {categories.map((category) =>
                  <a className="text-base font-medium leading-5 text-[#969696]" href={category.link || "#"}>
                    {category.name}
                  </a>
                )}
              </div>
            }
          </div>
        }
        {variant === ENavigationVariant.collections &&
          <>
            {title && <h2 className="m-0 text-[32px] font-medium leading-10 text-black uppercase">{title}</h2>}
            {description && <p className="m-0 max-w-2xl text-base font-medium leading-5 text-[#363636]">{description}</p>}
          </>
        }
      </div>
    </section>
  );
};

export default Navigation;