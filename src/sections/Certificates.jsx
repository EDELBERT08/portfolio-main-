import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );

        gsap.utils.toArray(".cert-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.1 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="certificates" ref={sectionRef} className="section-padding">
            <div className="w-full md:px-20 px-5">
                <TitleHeader
                    title="Certifications"
                    sub="📜 Continuous Learning & Professional Development"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    {cert.issuer}
                                </p>
                            </div>

                            {cert.date && (
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <span className="text-xs text-slate-400">{cert.date}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
