import {FC} from "react";
import Advantages from "@/pages/Home/components/Advantages/Advantages.tsx";
import Categories from "@/pages/Home/components/Categories/Categories.tsx";
import Releases from "@/pages/Home/components/Releases/Releases.tsx";
import Banner from "@/pages/Home/components/Banner/Banner.tsx";
import Brands from "@/pages/Home/components/Brands/Brands.tsx";
import About from "@/pages/Home/components/About/About.tsx";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <About />
      <Releases />
      <Advantages />
      <Categories />
      <Footer />
    </>
  );
}

export default Home;