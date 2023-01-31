import React from 'react';
import { Header } from './sections/Header/Header';
import { MainContent } from './sections/MainContent/MainContent';
import { Footer } from './sections/Footer/Footer';

export const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
