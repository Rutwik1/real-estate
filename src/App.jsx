import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ContactSection from "./components/ContactSection/ContactSection";
import Testimonial from "./components/Testimonial/Testimonial";
import Listings from "./components/Listings/Listings";
import Search from './components/Search/Search';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Listings />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
