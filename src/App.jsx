import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Cards from './sections/Resume';

const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <main className='bg-black'>
      <Nav />
      <Hero />
      <Projects />
      <Cards />
    </main>
  )
}

export default App

