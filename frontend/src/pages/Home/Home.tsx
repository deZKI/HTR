import Advantages from "@/pages/Home/components/Advantages/Advantages.tsx";
import Categories from "@/pages/Home/components/Categories/Categories.tsx";
import Releases from "@/pages/Home/components/Releases/Releases.tsx";
import Header from "@/pages/Home/components/Header/Header.tsx";
import Banner from "@/pages/Home/components/Banner/Banner.tsx";
import Footer from "@/pages/Home/components/Footer/Footer.tsx";
import Brands from "@/pages/Home/components/Brands/Brands.tsx";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <Releases />
      <Advantages />
      <Categories />
      <Footer />
    </>
  );
}

export default Home;