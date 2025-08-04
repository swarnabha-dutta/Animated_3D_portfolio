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
              <h2>Real-Time Chat Application using MERN & Advanced AI with Emotion Detection</h2>
              <p className="text-white-50 md:text-xl">
                HealthMate is a next-generation healthcare consultation platform designed for transparency, accessibility, and ease of use. Built with industry-leading technologies including Next.js, React, Prisma, Neon (Postgres), and Tailwind CSS, HealthMate empowers users to explore clear pricing, connect with support, and book consultations seamlessly
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            
            <div className="project" ref={codeReviewerRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/code-reviewer.png"
                  alt="AI Code Reviewer "
                />
              </div>
              <h2>AI Code Reviewer  using MERN</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;