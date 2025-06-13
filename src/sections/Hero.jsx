import React from 'react'
import { words } from '../constants/index'
import Button from '../components/Button'
import Photo from '../components/Photo'
import Stats from '../components/Stats'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' alt='background'/>
        </div>

        <div className='hero-layout'>
            <header className="flex max-lg:flex-col flex-row justify-center md:items-start md:w-full w-screen md:px-20 px-5">
                <figure className='order-1 lg:order-2 w-full flex justify-center'>
                    <div className='mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </figure>

                <div className="flex flex-col gap-7 order-2 lg:order-1">
                    <div className="hero-text" data-aos="zoom-in">
                    <h1>
                        Shaping
                        <span className="slide">
                        <span className="wrapper">
                            {words.map((word, index) => (
                            <span
                                key={index}
                                className="flex items-center md:gap-3 gap-1 pb-2"
                            >
                                <img
                                src={word.imgPath}
                                alt="person"
                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                />
                                <span>{word.text}</span>
                            </span>
                            ))}
                        </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>That Drive Impact</h1>
                    </div>

                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                    Hey, I’m Promise — a UK-based Software Engineer who turns ideas into scalable, 
                    real-world solutions with clean, efficient code.
                    </p>

                    <Button
                    text="See My Work"
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="counter"
                    />
                </div>
            </header>
        </div>

        <Stats />
    </section>
  )
}

export default Hero
