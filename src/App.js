import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import PageLoader from './utils/PageLoader';
import Hero from './components/Hero';
import About from './components/About';
import TextScrolling from './components/TextScrolling';
import MyMission from './components/MyMission';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Work from './components/Work';

export default function App() {
  return (
    <div className="bg-paper">
      <PageLoader />
      <Logo />
      <Navigation />
      <Hero />
      <TextScrolling />
      <About />
      <MyMission />
      <Work />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}
