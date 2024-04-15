import React, { useState } from 'react';
import './App.css';
import { LoadingContext } from './utils/LoadingContext'; // Import the context
import Logo from './utils/Logo';
import Navigation from './utils/Navigation';
import PageLoader from './utils/PageLoader';
import Hero from './components/Hero';
import About from './components/About';
import TextScrolling from './components/TextScrolling';
import MyMission from './components/MyMission';
import Contact from './components/Contact';
// import Subscribe from './components/Subscribe';
import Footer from './utils/Footer';
import Work from './components/Work';
// import Experience from './components/Experience';
import ScrollingTagline from './components/ScrollingTagline';

// TODO:Contact page scroll effect cleanup
// TODO: Work page videos
// TODO: add a new text loading animation component
// TODO: Mobile view audit
// TODO: Figout out what to do with the spoace the work and contact section
// TODO: Link Resume
// TODO: Logo anitmation cleanup
// TODO: Text scroll cleanup
export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // Manage the state here

  return (
    <LoadingContext.Provider value={{ loadingComplete, setLoadingComplete }}> {/* Provide the context */}
      <div className="bg-paper overflow-hidden z-10">
        <PageLoader />
        <Logo />
        <Navigation />
        <Hero />
        <TextScrolling />
        <About />
        <MyMission />
        <Work />
        {/* <Experience /> */}
        <ScrollingTagline />
        <Contact />
        {/* <Subscribe /> */}
      </div>
      <Footer />
    </LoadingContext.Provider>
  );
}