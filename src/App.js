import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

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
