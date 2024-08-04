import React from 'react';
import './mainpage.css';
import Header from '../../ui/Header/Header';
import Banner from '../../ui/Banner/Banner';
import Brands from '../../ui/Brands/Brands';
import Releases from '../../ui/Releases/Releases';
import Advantages from '../../ui/Advantages/Advantages';
import Categories from '../../ui/Categories/Categories';
import Footer from '../../ui/Footer/Footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <div className="mainpage__divider"></div>
      <Releases />
      <Advantages />
      <Categories />
      <Footer />
    </>
  );
}
