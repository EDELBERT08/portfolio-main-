import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );

        gsap.utils.toArray(".project-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="section-padding">
            <div className="w-full md:px-20 px-5">
                <TitleHeader
                    title="Featured Projects"
                    sub="🚀 Technical Innovation & Problem Solving"
                />

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col gap-5">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                    style={project.logoStyle}
                                >
                                    {project.logo ? (
                                        <img src={project.logo} alt={project.title} className="w-10 h-10 object-contain" onError={(e) => e.target.style.display = 'none'} />
                                    ) : (
                                        <span className="text-2xl">🚀</span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-2">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-600"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 mt-4 text-[#60f5a1] hover:underline"
                                >
                                    View on GitHub <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </a>
                            </div>

                            {/* Decorative Spotlight */}
                            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
