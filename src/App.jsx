import React from 'react'
import Hero from './sections/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <main className='w-[1029px] h-dvh'>
      <Hero />
    </main>
  )
}

export default App

