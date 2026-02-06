import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        if (isOpen) {
            gsap.fromTo(
                ".about-text",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.1,
                }
            );
        }
    }, [isOpen]);

    return (
        <section id="about" className="section-padding">
            <div className="w-full max-w-7xl mx-auto md:px-20 px-5 flex flex-col items-center">
                <TitleHeader title="About Me" sub="👨‍💻 Professional Summary" />

                <div className="mt-10 flex flex-col items-center justify-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-8 py-3 rounded-full bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition-all duration-300 flex items-center gap-3 group"
                    >
                        <span>{isOpen ? "Hide Bio" : "Read Professional Summary"}</span>
                        <span
                            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {isOpen && (
                        <div className="mt-10 flex flex-col md:flex-row gap-10 items-center justify-center about-text">
                            <div className="flex flex-col gap-6 text-slate-600 text-lg leading-relaxed md:max-w-4xl text-center md:text-left">
                                <p>
                                    I am a <strong>Strategic Systems Engineer</strong> based in
                                    Nairobi, Kenya, with deep expertise in{" "}
                                    <strong>Health Insurance Systems management</strong>, requirements
                                    analysis, and enterprise infrastructure optimization.
                                </p>
                                <p>
                                    My track record includes conducting Root Cause Analysis,
                                    managing critical system upgrades, and ensuring{" "}
                                    <strong>24/7 availability</strong> through rigorous health checks.
                                    I excel in Disaster Recovery operations and business
                                    intelligence reporting.
                                </p>
                                <p>
                                    Passionate about maintaining data integrity and driving
                                    compliance, I empower teams through technical documentation and
                                    training. I bridge the gap between complex backend architectures
                                    (Java, Kotlin, Spring Boot) and business needs to deliver{" "}
                                    <strong>innovative healthcare solutions</strong>.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
