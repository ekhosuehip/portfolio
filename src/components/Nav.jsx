import { useEffect, useState } from "react"
import { navLinks } from "../constants"

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
            <img
                src="/images/logos/3.1.svg"
                alt="logo"
                className="w-[40px] h-[40px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
        </a>

        <nav className="desktop">
            <ul>
                {navLinks.map(({link, name}) => (
                    <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"></span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
            <div className="inner">
                <span>Contact Me</span>
            </div>
        </a>
      </div>
    </header>
  )
}

export default Nav
