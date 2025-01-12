import BannerImage from "@/assets/images/banner.png";

function Banner() {
  return (
    <section className="w-full shadow-[0_4px_50px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center px-7 py-2.5 mx-auto max-w-[1440px] lg:px-7 lg:py-2.5 flex-wrap md:flex-nowrap">
        <div className="flex flex-col justify-center items-start w-full md:w-[40%] order-2 md:order-none md:mb-0 mb-4">
          <div className="mb-8">
            <h2 className="mb-3 text-3xl font-bold leading-[44px] text-black md:text-2xl lg:text-3xl">
              Carchatt Лето 2024
            </h2>
            <p className="m-0 text-2xl font-medium leading-[39px] text-black md:text-base lg:text-2xl">
              Carchatt Green
            </p>
          </div>
          <button className="flex justify-center items-center px-6 py-4 text-base font-medium leading-5 text-white bg-neutral-900 md:px-4 md:py-2 md:text-sm">
            Купить сейчас
          </button>
        </div>
        <div className="w-full md:w-[60%] max-w-[755px] mb-4 md:mb-0">
          <img className="w-full" src={BannerImage} alt="баннер"/>
        </div>
      </div>
    </section>
  );
}

export default Banner;