import {FC} from "react";
import AboutImage from "../../../../assets/images/about.png";
import PrimaryTitle from "@/ui/PrimaryTitle/PrimaryTitle.tsx";

const About: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-start items-start px-8 py-16 mx-auto max-w-[1072px] md:py-10">
        <PrimaryTitle text="О компании" />
        <div className="flex items-center gap-6">
          <div className="max-w-[320px] w-full">
            <img src={AboutImage} alt="о нас"/>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="m-0 text-4xl font-bold leading-[44px] text-black">HTR</h3>
            <p className="m-0 text-base font-medium leading-5 text-black">Добро пожаловать в HTR – ваш надежный партнер в мире логистики головных уборов! Мы специализируемся на доставке стильных и качественных головных уборов из Китая и рады предложить вам широкий ассортимент продукции от ведущих брендов, включая кепки, бейсболки и шапки.</p>
            <p className="m-0 text-base font-medium leading-5 text-black">Наша цель – сделать выбор и покупку головных уборов удобными и доступными для каждого. В нашем каталоге вы найдете изделия, которые подчеркнут ваш стиль и индивидуальность. Мы тщательно отбираем бренды и товары, чтобы предложить вам только лучшее.</p>
            <p className="m-0 text-base font-medium leading-5 text-black">Мы только начинаем наш путь, но уже активно развиваемся! На наших страницах в социальных сетях вы найдете полезные статьи, обзоры и вдохновение – присоединяйтесь к нам, чтобы быть в курсе новостей и трендов.</p>
            <p className="m-0 text-base font-medium leading-5 text-black">HTR – это качество, надежность и внимание к деталям. Мы готовы доставить для вас стиль из любой точки Китая прямо к вашему порогу!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;