import {FC} from "react";
import ProductsList from "@/pages/Baseballcaps/components/ProductsList/ProductsList.tsx";
import {ENavigationVariant} from "@/definitions/enums/ENavigationVariant.ts";
import Filters from "@/pages/Baseballcaps/components/Filters/Filters.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import BrandImage from "@/assets/images/new-era-logo.png";
import Pagination from "@/ui/Pagination/Pagination.tsx";
import Navigation from "@/ui/Navigation/Navigation.tsx";
import {generateRandomString} from "@/lib/utils.ts";
import Cap2Image from "@/assets/images/cap-1-1.png";
import Cap3Image from "@/assets/images/cap-1-2.png";
import Cap1Image from "@/assets/images/cap-1.png";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";

const Baseballcaps: FC = () => {
  const cetegories = [{ name: 'Мужчины', link: '/' }, { name: 'Женщины', link: '/' }, { name: 'Дети', link: '/' }];
  const items = [{ name: 'Главная страница', link: '/' }, { name: 'Бейсболки' }];
  const products: TProduct[] = Array.from({ length: 24 }, () => ({
    id: generateRandomString(),
    color: "Синий",
    images: [Cap1Image, Cap2Image, Cap3Image],
    brand_name: "New Era",
    brand_desc: "Крупнейший производитель головных уборов из США, основанный в 1920 году в городе Буффало, штат Нью-Йорк.",
    brand_image: BrandImage,
    name: "Kids New York Yankees",
    size: "M",
    price: 3799,
    fabric: "100% Polyester",
    care: "Чистку кепок следует производить только вручную. Кепке противопоказана стирка, так как вы можете испортить ее форму. Чтобы избавиться от пятен пота и грязи на внутреннем ободке кепки, возьмите влажную губку и добавьте немного моющего средства.",
  }));
  const statsNumber = 248;

  return (
    <>
      <Header />
      <Navigation
        title="Бейсболки"
        items={items}
        variant={ENavigationVariant.caps}
        categories={cetegories}
        statsNumber={statsNumber}
      />
      <Filters />
      <ProductsList products={products} />
      <Pagination itemsViewed={12} totalItems={59} />
      <Footer/>
    </>
);
}

export default Baseballcaps;