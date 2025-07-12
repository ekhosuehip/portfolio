import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Cards from './sections/Resume';
import Contact from './sections/Contact';
import Cli from './sections/Cli';

const App = () => {
  const [showCliOnly, setShowCliOnly] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleCli = () => {
    setShowCliOnly(true);
  };

  if (showCliOnly) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <Cli onExit={() => setShowCliOnly(false)} />
      </main>
    );
  }

  return (
    <main className="bg-black">
      <Nav />
      <Hero onLaunchCli={handleCli} />
      <Projects />
      <Cards />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
