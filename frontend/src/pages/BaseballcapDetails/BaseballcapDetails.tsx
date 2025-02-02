import {FC} from "react";
import Navigation from "@/pages/BaseballcapDetails/components/Navigation/Navigation.tsx";
import DetailsCard from "@/pages/BaseballcapDetails/components/DetailsCard/DetailsCard.tsx";
import ProductsList from "@/ui/ProductsList/ProductsList.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import BrandImage from "@/assets/images/new-era-logo.png";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import Pagination from "@/ui/Pagination/Pagination.tsx";
import {generateRandomString} from "@/lib/utils.ts";
import Cap2Image from "@/assets/images/cap-1-1.png";
import Cap3Image from "@/assets/images/cap-1-2.png";
import Cap1Image from "@/assets/images/cap-1.png";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";
import {RootState} from "@/store/store.ts";

const BaseballcapDetails: FC = () => {
  const product = useAppSelector((state: RootState) => state.product);
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
      <DetailsCard product={product} />
      <ProductsList products={products} titleIsActive={true} />
      <Pagination />
      <Footer />
    </>
  );
}

export default BaseballcapDetails;