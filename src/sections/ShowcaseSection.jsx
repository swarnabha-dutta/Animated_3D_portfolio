import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const doctorAppointmentProjectRef = useRef(null);
    const codeReviewerRef = useRef(null);
    const stockPilotRef = useRef(null); // 👈 NEW
    const cardsRef = [doctorAppointmentProjectRef, codeReviewerRef, stockPilotRef];

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

        cardsRef.forEach((card, index) => {
            gsap.fromTo(
                card.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card.current,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* ------------------ HEALTH CHECK BUDDY ------------------ */}
                    <div ref={doctorAppointmentProjectRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/HealthCare_platform.jpg" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient mb-3">
                                HealthCheckBuddy – Effortless Online Doctor Appointments
                            </h2>

                            <div className="text-white-50 md:text-xl mb-4">
                <span className="font-bold text-white text-lg md:text-xl block mb-2">
                  Book doctors online, securely and easily.
                </span>
                                <span className="text-white-80">
                  <strong className="text-primary">Health_Check_Buddy</strong> is a modern healthcare platform that lets you find doctors, view fees upfront, and book appointments with ease.
                </span>
                            </div>

                            <ul className="list-disc ms-5 mt-2 text-white-50 text-base mb-4">
                                <li><span className="font-bold text-primary">Transparent pricing</span> – See all fees before booking.</li>
                                <li><span className="font-bold text-primary">Super simple booking</span> – Schedule appointments in seconds.</li>
                                <li><span className="font-bold text-primary">Secure authentication</span> – Powered by <span className="text-primary font-semibold">Clerk + MFA</span>.</li>
                            </ul>

                            <div className="flex gap-4 mt-4">
                                <a href="https://health-check-buddy.vercel.app" target="_blank" className="btn btn-primary">Live Demo</a>
                                <a href="https://github.com/swarnabha-dutta/Health_Check_Buddy" target="_blank" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    {/* ------------------ OTHER PROJECTS LIST ------------------ */}
                    <div className="project-list-wrapper overflow-hidden">

                        {/* ------------------ AI CODE REVIEWER ------------------ */}
                        <div ref={codeReviewerRef} className="project">
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img src="/images/code-reviewer.png" alt="AI Code Reviewer" />
                            </div>

                            <h2>
                                <span className="text-primary font-bold">AI_Code_Reviewer</span> – Instant Feedback with Gemini AI
                            </h2>

                            <div className="text-white-80 mb-2">
                                <strong className="text-primary">AI Code Reviewer</strong> uses <span className="font-semibold text-primary">Google Gemini AI</span> to provide instant, structured code reviews.
                            </div>

                            <ul className="list-disc ms-5 mt-2 text-white-50 text-base mb-4">
                                <li><span className="font-bold text-primary">🤖 Gemini AI</span> – Smart context-aware analysis.</li>
                                <li><span className="font-bold text-primary">⚛️ Modern frontend</span> – Vite + React.</li>
                                <li><span className="font-bold text-primary">🌐 Express backend</span> deployed on Render.</li>
                                <li><span className="font-bold text-primary">⚡ Instant output</span> after submission.</li>
                            </ul>

                            <div className="flex gap-4 mt-4">
                                <a href="https://ai-code-reviewer-frontend-u4ei.onrender.com" target="_blank" className="btn btn-primary">Live Demo</a>
                                <a href="https://github.com/swarnabha-dutta/AI_Code_Reviewer" target="_blank" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>

                        {/* ------------------ STOCK PILOT (NEW SECTION) ------------------ */}
                        <div ref={stockPilotRef} className="project">
                            <div className="image-wrapper bg-[#00111F]">
                                <img src="/images/stockpilot-Image.png" alt="StockPilot Banner" />
                            </div>

                            <h2>
                                <span className="text-primary font-bold">StockPilot</span> – AI-Powered Stock Prediction & Portfolio Tracking
                            </h2>

                            <div className="text-white-80 mb-2">
                                <strong className="text-primary">StockPilot</strong> is an AI-enhanced stock market prediction & portfolio manager built using <span className="font-semibold text-primary">Next.js + Express + MongoDB</span>.
                            </div>

                            <ul className="list-disc ms-5 mt-2 text-white-50 text-base mb-4">
                                <li><span className="font-bold text-primary">📈 Smart charts</span> – Real-time stock trends & insights.</li>
                                <li><span className="font-bold text-primary">🔐 Better-Auth authentication</span> – Session tokens + httpOnly cookies.</li>
                                <li><span className="font-bold text-primary">⚡ Vercel CI/CD</span> – Auto-deploy on push.</li>
                                <li><span className="font-bold text-primary">🧩 Modern UI</span> – Responsive, clean and fast.</li>
                            </ul>

                            <div className="flex gap-4 mt-4">
                                <a href="https://stock-pilot-tau.vercel.app" target="_blank" className="btn btn-primary">Live Demo</a>
                                <a href="https://github.com/swarnabha-dutta/stock_pilot" target="_blank" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
