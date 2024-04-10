import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import PageLoader from './utils/PageLoader';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <>
      <PageLoader />
      <Logo />
      <Navigation />
      <Hero />
      <About />
    </>
  );
}
