import {FC} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BaseballcapDetails from "@/pages/BaseballcapDetails/BaseballcapDetails.tsx";
import Baseballcaps from "@/pages/Baseballcaps/Baseballcaps.tsx";
import Collections from "@/pages/Collections/Collections.tsx";
import Favorites from "@/pages/Favorites/Favorites.tsx";
import Account from "@/pages/Account/Account.tsx";
import Orders from "@/pages/Orders/Orders.tsx";
import Home from "@/pages/Home/Home.tsx";
import Cart from "@/pages/Cart/Cart.tsx";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/baseball-caps" element={<Baseballcaps />} />
        <Route path="/baseball-caps/:id" element={<BaseballcapDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/favorites" element={<Favorites />} />
        <Route path="/account/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App