import {FC} from "react";

const Pagination: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-4 mx-auto max-w-[1072px] p-8">
        <div className="text-sm font-medium leading-[17px] text-[#363636]">
          Вы посмотрели <span>12</span> из <span>59</span>
        </div>
        <button className="flex justify-center items-center px-4 py-2 border border-solid border-[#969696] text-base font-medium leading-5 text-[#363636]">Загрузить еще</button>
      </div>
    </section>
  );
}

export default Pagination;