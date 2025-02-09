import {FC} from "react";
import Navigation from "@/ui/Navigation/Navigation.tsx";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";
import {ENavigationVariant} from "@/definitions/enums/ENavigationVariant.ts";

const Collections: FC = () => {
  const items = [{ name: 'Главная страница', link: '/' }, { name: 'Коллекции'}];

  return (
    <>
      <Header />
      <Navigation
        title="Все коллекции"
        items={items}
        variant={ENavigationVariant.collections}
        description="В этом разделе вы можете ознакомиться со всеми коллекциями, представленными в нашем магазине"
      />
      <Footer />
    </>
  );
}

export default Collections;