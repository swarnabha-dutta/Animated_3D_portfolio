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
                HealthMate – Effortless Online Doctor Appointments
              </h2>
              <p className="text-white-50 md:text-xl mb-4">
                <span className="font-bold text-white text-lg md:text-xl block mb-2">
                  Book doctors online, securely and easily.
                </span>
                <span className="text-white-80">
                  <strong className="text-primary">HealthMate</strong> is a modern healthcare platform that lets you find doctors, view their fees up front, and book appointments in just a few clicks. <br />
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
                      <span className="font-bold text-primary">Secure authentication</span> – Uses <span className="font-semibold text-primary">Clerk</span> for sign up/login, with <span className="font-semibold text-primary">MFA</span> (Multi-Factor Authentication) and <span className="font-semibold text-primary">OTP</span> (One-Time Password) verification for extra safety.
                    </li>
                  </ul>
                </span>
                <br />
                <span className="font-semibold text-white">Key Technologies:</span>
                <ul className="list-disc ms-5 mt-2 text-white-50 text-base">
                  <li><strong>Next.js</strong> – Fast, SEO-friendly React framework with built-in API routes.</li>
                  <li><strong>React</strong> – For building dynamic, interactive UIs.</li>
                  <li><strong>Prisma</strong> – Type-safe ORM for easy and reliable database access.</li>
                  <li><strong>Neon (Postgres)</strong> – Modern, serverless Postgres database.</li>
                  <li><strong>Tailwind CSS</strong> – Utility-first CSS for quick, responsive design.</li>
                  <li><strong>Clerk</strong> – Authentication with MFA & OTP for secure user accounts.</li>
                  <li><strong>Lucide Icons</strong> – Clean, consistent icons for a polished look.</li>
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