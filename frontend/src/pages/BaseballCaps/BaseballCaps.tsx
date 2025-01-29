import {FC} from "react";
import Navigation from "@/pages/BaseballCaps/components/Navigation/Navigation.tsx";
import type {TProduct} from "@/definitions/types/TProduct.ts";
import ProductsList from "@/ui/ProductsList/ProductsList.tsx";
import ProductImage from "../../assets/images/product.jpeg";
import Filters from "@/ui/Filters/Filters.tsx";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";

const product: TProduct = { id: "alksjfl", image: ProductImage, brand: "New Era", name: "Kids New York Yankees", price: 3799, colors: "5 расцветок" };
const products: TProduct[] = Array.from({ length: 24 }, () => ({ ...product }));

const BaseballCaps: FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Filters />
      <ProductsList products={products} />
      <Footer/>
    </>
);
}

export default BaseballCaps;