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
              <img src="/images/doctor-appointment-project.jpeg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gradient mb-3">
                HealthMate: Revolutionizing Healthcare Consultations
              </h2>
              <p className="text-white-50 md:text-xl mb-4">
                <span className="font-bold text-white text-lg md:text-xl block mb-2">
                  Experience healthcare like never before.
                </span>
                <span className="text-white-80">
                  <strong className="text-primary">HealthMate</strong> is a cutting-edge healthcare consultation platform designed for <span className="text-primary font-semibold">transparency</span>, <span className="text-primary font-semibold">accessibility</span>, and <span className="text-primary font-semibold">effortless usability</span>.
                  <br />
                  <span className="block mt-2">
                    <span className="font-semibold text-white">Why choose HealthMate?</span>
                  </span>
                  <ul className="list-disc ms-5 mt-2 text-white-50 text-base">
                    <li>
                      <span className="font-bold text-primary">Crystal-clear pricing</span> – No hidden fees, just honest costs.
                    </li>
                    
                    <li>
                      <span className="font-bold text-primary">Seamless booking</span> – Schedule consultations in just a few clicks.
                    </li>
                  </ul>
                </span>
                <br />
                <span className="font-semibold text-white">Key Technologies:</span>
                <ul className="list-disc ms-5 mt-2 text-white-50 text-base">
                  <li><strong>Next.js</strong> – Advanced React framework for SSR, routing, and API endpoints.</li>
                  <li><strong>React</strong> – Component-based UI library for dynamic, interactive interfaces.</li>
                  <li><strong>Prisma</strong> – Type-safe ORM for robust and scalable database interactions.</li>
                  <li><strong>Neon (Postgres)</strong> – Reliable, serverless Postgres database solution.</li>
                  <li><strong>Tailwind CSS</strong> – Utility-first CSS framework for rapid, responsive UI development.</li>
                  <li><strong>Lucide Icons</strong> – Elegant, consistent iconography for a polished user experience.</li>
                </ul>
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://health-mate-dz9cunq27-swarnabhadutta909-gmailcoms-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/swarnabha-dutta/HealthMate"
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
              <h2>AI Code Reviewer using MERN & Google Gemini</h2>
              <p className="text-white-50 md:text-lg">
                AI Code Reviewer is a full-stack web app that leverages Google Gemini AI to provide automated code reviews. It features a modern React frontend (built with Vite) and a robust Node.js/Express backend, seamlessly integrated and deployed on Render. Users can submit code for instant, AI-powered feedback and suggestions.
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