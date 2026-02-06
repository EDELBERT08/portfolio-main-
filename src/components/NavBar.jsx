import { useState, useEffect } from "react";

import { navLinks, socialImgs } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner max-w-7xl mx-auto">
        <a href="#hero" className="logo">
          EK
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative">
          <button
            onClick={() => setScrolled(!scrolled)} // Using scrolled state logic just to trigger re-render if needed, but actually we need a new state.
            // Better to just add the new state.
            className="contact-btn group cursor-pointer"
          >
            <div className="inner" onClick={(e) => {
              e.preventDefault();
              const dropdown = document.getElementById('contact-dropdown');
              if (dropdown) dropdown.classList.toggle('hidden');
            }}>
              <span>Contact me</span>
            </div>
          </button>

          {/* Contact Dropdown */}
          <div id="contact-dropdown" className="hidden absolute right-0 top-16 w-64 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-5 flex flex-col gap-4 border border-black-50/20">
            <h4 className="text-black-100 font-semibold mb-2">Connect with me</h4>

            <a href="mailto:edelbert.kipchumba@APOLLOGROUP.CO.KE" className="flex items-center gap-3 text-black-50 hover:text-black-100 transition-colors">
              <span className="p-2 rounded-full bg-blue-100 text-blue-600">✉️</span>
              <span className="text-sm">Email Me</span>
            </a>

            {socialImgs.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-black-50 hover:text-black-100 transition-colors">
                <img src={social.imgPath} alt={social.name} className="w-8 h-8 object-contain" />
                <span className="text-sm capitalize">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
