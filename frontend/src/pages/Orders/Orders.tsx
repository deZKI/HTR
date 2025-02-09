import {FC} from "react";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";
import Navigation from "@/ui/Navigation/Navigation.tsx";

const Orders: FC = () => {
  const items = [{ name: 'Главная страница', link: '/' }, { name: 'Личный кабинет', link: '/account' }, { name: 'Заказы' }];

  return (
    <>
      <Header />
      <Navigation items={items} />
      <Footer />
    </>
  );
}

export default Orders;