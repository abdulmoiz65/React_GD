import React from 'react';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

function Home() {
    return (
      <>
        <Preloader />
        <Navbar />
        <Header />
        <SearchBar />
        <WelcomeSection />
        <AboutSection />
        <Footer />
      </>
    );
  }

export default Home;
