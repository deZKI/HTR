import YankeesImage from "@/assets/images/yankees.png";
import LogoImage from "@/assets/images/logo.png";
import CapsImage from "@/assets/images/caps.png";
import NikeImage from "@/assets/images/nike.png";

function Menu() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/70 z-[1040] transition-all duration-300 ease-in-out">
      <div className="fixed top-0 left-0 w-full max-w-[440px] px-4 pb-4 bg-white z-[1050]">
        <div className="relative flex justify-center items-center py-2 px-4">
          <a className="max-w-[50px]" href="/public">
            <img className="w-full" src={LogoImage} alt="логотип" />
          </a>
          <button className="absolute right-4 flex justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 12L13 27" stroke="black" />
              <path d="M13 12L28 27" stroke="black" />
            </svg>
          </button>
        </div>
        <div className="mb-3 w-full h-px bg-[#969696]" />
        <ul className="flex justify-between items-center gap-3 mb-3">
          <li className="flex-1">
            <a className="flex justify-center items-center p-4 w-full h-[50px] font-medium text-[11px] leading-[17px] text-black bg-[#D9D9D9]" href="/public">
              Поступления
            </a>
          </li>
          <li className="flex-1">
            <a className="flex justify-center items-center p-4 w-full h-[50px] font-medium text-[11px] leading-[17px] text-black bg-[#D9D9D9]" href="/public">
              Эксклюзивы
            </a>
          </li>
          <li className="flex-1">
            <a className="flex justify-center items-center p-4 w-full h-[50px] font-medium text-[11px] leading-[17px] text-black bg-[#D9D9D9]" href="/public">
              Распродажа
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 mb-3">
          <li>
            <a className="flex justify-between items-center px-6 w-full h-[70px] bg-[#D9D9D9]" href="/public">
              <div className="text-base font-medium leading-5 text-black">
                Кепки
              </div>
              <div className="max-w-[82px]">
                <img className="w-full" src={CapsImage} alt="кепки" />
              </div>
            </a>
          </li>
          <li>
            <a className="flex justify-between items-center px-6 w-full h-[70px] bg-[#D9D9D9]" href="/public">
              <div className="text-base font-medium leading-5 text-black">
                Команды
              </div>
              <div className="max-w-[53px]">
                <img className="w-full" src={YankeesImage} alt="команды" />
              </div>
            </a>
          </li>
          <li>
            <a className="flex justify-between items-center px-6 w-full h-[70px] bg-[#D9D9D9]" href="/public">
              <div className="text-base font-medium leading-5 text-black">
                Бренды
              </div>
              <div className="max-w-[91px]">
                <img className="w-full" src={NikeImage} alt="бренды" />
              </div>
            </a>
          </li>
        </ul>
        <button className="flex justify-center items-center px-6 py-4 w-full h-[52px] text-base font-medium leading-[20px] text-white bg-[#2C2C2C]">
          Личный кабинет
        </button>
      </div>
    </div>
  );
}

export default Menu;