import LogoImage from "@/assets/images/logo.png";
import MIRImage from "@/assets/images/mir.png";
import SFPImage from "@/assets/images/sfp.png";

function Footer() {
  return (
    <footer className="w-full bg-neutral-700">
      <div className="flex flex-col px-8 py-10 mx-auto max-w-[1072px] md:py-6">
        <div className="flex justify-between mb-[70px] md:mb-10 flex-wrap md:flex-nowrap gap-6">
          <a className="max-w-[140px] hidden md:block" href="/frontend/public">
            <img className="w-full" src={LogoImage} alt="логотип"/>
          </a>
          <div>
            <h4 className="mb-5 text-base font-medium leading-5 text-white uppercase">Помощь</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium leading-4 text-neutral-400">
              <li><a href="/frontend/public">Вопросы-ответы</a></li>
              <li><a href="/frontend/public">Доставка</a></li>
              <li><a href="/frontend/public">Возврат</a></li>
              <li><a href="/frontend/public">Политика защиты персональных данных</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-base font-medium leading-5 text-white uppercase">О&nbsp;компании</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium leading-4 text-neutral-400">
              <li><a href="/frontend/public">О нас</a></li>
              <li><a href="/frontend/public">Реквизиты</a></li>
              <li><a href="/frontend/public">Контакты</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="mb-5 text-base font-medium leading-5 text-white uppercase md:hidden">Соцсети</h4>
              <div className="mb-4">
                <h4 className="hidden md:block mb-5 text-base font-medium leading-5 text-white uppercase">Соцсети</h4>
                <div className="flex items-end gap-4 lg:hidden">
                  <ul className="flex items-center gap-4">
                    <li><a className="flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200" href="/frontend/public" /></li>
                    <li><a className="flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200" href="/frontend/public" /></li>
                    <li><a className="flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200" href="/frontend/public" /></li>
                  </ul>
                  <div className="items-center gap-4 hidden">
                    <div className="max-w-[85px]">
                      <img className="w-full" src={MIRImage} alt="МИР"/>
                    </div>
                    <div className="max-w-[44px]">
                      <img className="w-full" src={SFPImage} alt="СБП"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-base font-medium leading-5 text-white">Нужна помощь?</h4>
              <div className="flex items-center gap-4">
                <a className="flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200" href="/frontend/public" />
                <div className="flex flex-col gap-2">
                  <span className="text-base font-medium leading-5 text-white">Telegram</span>
                  <a className="text-xs font-medium leading-[15px] text-neutral-400" href="/frontend/public">@Help_bot</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden flex-col gap-2">
            <div className="max-w-[85px]">
              <img className="w-full" src={MIRImage} alt="МИР"/>
            </div>
            <div className="max-w-[51px]">
              <img className="w-full" src={SFPImage} alt="СБП"/>
            </div>
          </div>
        </div>
        <div className="mb-2 w-full h-px bg-neutral-600"/>
        <div className="flex items-center">
          <div className="hidden md:block mr-5 max-w-[113px]">
            <img className="w-full" src={MIRImage} alt="МИР"/>
          </div>
          <div className="hidden md:block mr-5 max-w-[64px]">
            <img className="w-full" src={SFPImage} alt="СБП"/>
          </div>
          <div className="text-[10px] font-medium leading-3 text-neutral-400 text-center ml-auto md:ml-0 md:text-left">
            Этот сайт использует cookies. Продолжая использовать этот сайт, вы соглашаетесь с использованием нами
            файлов cookies в соответствии с нашей политикой использования файлов cookies.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;