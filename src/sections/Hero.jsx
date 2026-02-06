import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            Hi, I’m Edelbert Kipchumba, a Strategic Systems Engineer based in Nairobi.
            I specialize in Health Insurance Systems, backend architecture, and infrastructure optimization.
          </p>

          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
      </div>
    </header>

        {/* RIGHT: 3D Model or Visual */ }
  <figure>
    <div className="hero-3d-layout">
      {/* 3D Model Removed */}
    </div>
  </figure>
      </div >

    </section >
  );
};

export default Hero;
