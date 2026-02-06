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
        <header className="flex flex-col justify-center w-full max-w-7xl mx-auto md:px-20 px-5">
          <div className="hero-text flex flex-col gap-7">
            <h1 className="text-4xl md:text-6xl font-bold text-black-100">
              Hi, I’m Edelbert Kipchumba, <span className="text-gradient">a Strategic Systems Engineer</span> based in Nairobi.
            </h1>
            <p className="text-lg font-medium text-black-50">
              I specialize in Health Insurance Systems, backend architecture, and infrastructure optimization.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
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
