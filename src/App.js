import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Expertise from './Expertise';
import Experience from './Experience';
import Statistics from './Statistics';
import Contact from './Contact';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default function App() {
  return (
    <div id="main">
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
      <Hero />
      <div className="bg-grey-50">
        <About />
        <Expertise />
        <Experience />
        <Statistics />
        <Contact />
      </div>
      <Subscribe />
      <Footer />
  </div>
  );
}
