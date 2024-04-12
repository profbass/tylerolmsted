import React, { useState } from 'react';
import './App.css';
import { LoadingContext } from './utils/LoadingContext'; // Import the context
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import PageLoader from './utils/PageLoader';
import Hero from './components/Hero';
import About from './components/About';
import TextScrolling from './components/TextScrolling';
import MyMission from './components/MyMission';
import Contact from './components/Contact';
// import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Work from './components/Work';
import Experience from './components/Experience';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // Manage the state here

  return (
    <LoadingContext.Provider value={{ loadingComplete, setLoadingComplete }}> {/* Provide the context */}
      <div className="bg-paper">
        <PageLoader />
        <Logo />
        <Navigation />
        <Hero />
        <TextScrolling />
        <About />
        <MyMission />
        <Work />
        <Experience />
        <Contact />
        {/* <Subscribe /> */}
        <Footer />
      </div>
    </LoadingContext.Provider>
  );
}