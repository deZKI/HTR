import {FC} from "react";

type TProps = {
  itemsViewed: number;
  totalItems: number;
}

const Pagination: FC<TProps> = ({ itemsViewed, totalItems }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-4  p-8 mx-auto max-w-[1072px]">
        <div className="text-sm font-medium leading-4 text-[#363636]">
          Вы посмотрели <span>{itemsViewed}</span> из <span>{totalItems}</span>
        </div>
        <button className="flex justify-center items-center px-4 py-2 border border-solid border-[#969696] text-base font-medium leading-5 text-[#363636]">
          Загрузить еще
        </button>
      </div>
    </section>
  );
}

export default Pagination;