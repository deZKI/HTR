function Advantages() {
  return (
    <section className="w-full bg-neutral-200">
      <div className="flex flex-col items-center px-8 pt-8 pb-12 mx-auto max-w-[920px] md:pt-6 md:pb-4">
        <h3 className="flex justify-center items-center mb-14 text-2xl font-bold leading-[29px] text-black uppercase text-center md:mb-6 md:text-base md:leading-5">
          Наши приемущуства
        </h3>
        <ul className="flex justify-center items-center gap-8 w-full flex-wrap md:flex-nowrap">
          <li className="flex flex-col items-center">
              <span className="mb-2 text-sm font-bold leading-4 text-black text-center">
                Привозим кепки из китая
              </span>
            <span className="text-sm font-medium leading-4 text-black text-center">
                Привезли уже &lt; 300
              </span>
          </li>
          <li className="h-[50px] w-[1px] bg-black hidden md:block"></li>
          <li className="flex flex-col items-center">
              <span className="mb-2 text-sm font-bold leading-4 text-black text-center">
                Быстрая доставка
              </span>
            <span className="text-sm font-medium leading-4 text-black text-center">
                Доставляем быстро или дешёво
              </span>
          </li>
          <li className="h-[50px] w-[1px] bg-black hidden md:block"></li>
          <li className="flex flex-col items-center">
              <span className="mb-2 text-sm font-bold leading-4 text-black text-center">
                Минимальная наценка
              </span>
            <span className="text-sm font-medium leading-4 text-black text-center">
                Берём оплату только за доставку
              </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advantages;