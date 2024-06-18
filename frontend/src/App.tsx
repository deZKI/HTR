import React from 'react';
import './main.global.css';
import {Header} from './components/Header';
import {Navigation} from './components/Navigation';
import {Banner} from './components/Banner';
import {Brands} from './components/Brands';
import {Releases} from './components/Releases/Releases';
import {Advantages} from './components/Advantages';
import {Categories} from './components/Categories';
import {Footer} from './components/Footer';

function AppComponent() {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <Brands />
      <Releases />
      <Advantages />
      <Categories />
      <Footer />
    </>
  );
}

export const App = () => <AppComponent />
