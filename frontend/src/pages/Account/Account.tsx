import {FC} from "react";
import Dashboard from "@/pages/Account/components/Dashboard/Dashboard.tsx";
import Navigation from "@/ui/Navigation/Navigation.tsx";
import Header from "@/ui/Header/Header.tsx";
import Footer from "@/ui/Footer/Footer.tsx";

const Account: FC = () => {
  const items = [{ name: 'Главная страница', link: '/' }, { name: 'Личный кабинет' }];

  return (
    <>
      <Header />
      <Navigation items={items} />
      <Dashboard />
      <Footer />
    </>
  );
}

export default Account;