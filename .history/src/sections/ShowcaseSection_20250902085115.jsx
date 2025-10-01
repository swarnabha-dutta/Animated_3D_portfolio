import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const doctorAppointmentProjectRef = useRef(null);
  const codeReviewerRef = useRef(null);
  const groupChatWithAIRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [doctorAppointmentProjectRef.current, codeReviewerRef.current, groupChatWithAIRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
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
          <div ref={doctorAppointmentProjectRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/HealthCare_platform.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gradient mb-3">
                HealthMate – Effortless Online Doctor Appointments
              </h2>
              <p className="text-white-50 md:text-xl mb-4">
                <span className="font-bold text-white text-lg md:text-xl block mb-2">
                  Book doctors online, securely and easily.
                </span>
                <span className="text-white-80">
                  <strong className="text-primary">Health_Check_Buddy</strong> is a modern healthcare platform that lets you find doctors, view their fees up front, and book appointments in just a few clicks. <br />
                  <span className="block mt-2">
                    <span className="font-semibold text-white">What makes HealthMate special?</span>
                  </span>
                  <ul className="list-disc ms-5 mt-2 text-white-50 text-base">
                    <li>
                      <span className="font-bold text-primary">Transparent pricing</span> – See all fees before you book, no surprises.
                    </li>
                    <li>
                      <span className="font-bold text-primary">Super simple booking</span> – Find and schedule appointments in seconds.
                    </li>
                    <li>
                      <span className="font-bold text-primary">Secure authentication</span> – Uses <span className="font-semibold text-primary">Clerk</span> for sign up/login, with <span className="font-semibold text-primary">MFA</span> (Multi-Factor Authentication) 
                    </li>
                  </ul>
                </span>
                <br />                
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://health-check-buddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/swarnabha-dutta/Health_Check_Buddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            
            <div className="project" ref={codeReviewerRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/code-reviewer.png"
                  alt="AI Code Reviewer"
                />
              </div>
              <h2>
                <span className="text-primary font-bold">AI Code Reviewer</span> – Instant Feedback with Gemini AI
              </h2>
              <p className="text-white-50 md:text-lg">
                Automated code reviews made simple.<br />
                <br />
                <span className="text-white-80">
                  <strong className="text-primary">AI Code Reviewer</strong> is a full-stack web app that uses <span className="font-semibold text-primary">Google Gemini AI</span> to provide instant feedback and suggestions on submitted code. Users can paste their code and receive structured, AI-powered reviews within seconds.
                  <br />
                  <span className="block mt-2">
                    <span className="font-semibold text-white">What makes AI Code Reviewer stand out?</span>
                  </span>
                  <ul className="list-disc ms-5 mt-2 text-white-50 text-base">
                    <li>
                      <span className="font-bold text-primary">🤖 Gemini AI integration</span> – Smart, context-aware code analysis.
                    </li>
                    <li>
                      <span className="font-bold text-primary">⚛️ Modern frontend</span> – Built with Vite + React for blazing-fast performance.
                    </li>
                    <li>
                      <span className="font-bold text-primary">🌐 Robust backend</span> – Node.js &amp; Express API deployed on Render.
                    </li>
                    <li>
                      <span className="font-bold text-primary">🧪 Instant testing</span> – Users get feedback instantly after submission.
                    </li>
                  </ul>
                </span>
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://ai-code-reviewer-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/swarnabha-dutta/ai-code-reviewer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;