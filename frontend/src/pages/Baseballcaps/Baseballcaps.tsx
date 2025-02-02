import {FC} from "react";
import Navigation from "@/pages/Baseballcaps/components/Navigation/Navigation.tsx";
import Filters from "@/pages/Baseballcaps/components/Filters/Filters.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import ProductsList from "@/ui/ProductsList/ProductsList.tsx";
import BrandImage from "@/assets/images/new-era-logo.png";
import Pagination from "@/ui/Pagination/Pagination.tsx";
import {generateRandomString} from "@/lib/utils.ts";
import Cap2Image from "@/assets/images/cap-1-1.png";
import Cap3Image from "@/assets/images/cap-1-2.png";
import Cap1Image from "@/assets/images/cap-1.png";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";


const Baseballcaps: FC = () => {
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

  return (
    <>
      <Header />
      <Navigation />
      <Filters />
      <ProductsList products={products} titleIsActive={false} />
      <Pagination />
      <Footer/>
    </>
);
}

export default Baseballcaps;