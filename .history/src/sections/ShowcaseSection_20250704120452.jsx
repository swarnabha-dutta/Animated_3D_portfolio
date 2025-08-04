import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const aiDeveloperRef = useRef(null);
  const codeReviewerRef = useRef(null);
  const neurovisionAIRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [aiDeveloperRef.current, codeReviewerRef.current, neurovisionAIRef.current];

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
          <div ref={aiDeveloperRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/group-chat.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>Real-Time Chat Application using MERN & Advanced AI with Emotion Detection</h2>
              <p className="text-white-50 md:text-xl">
                An intelligent, real-time group chat application powered by the MERN stack and enhanced with advanced AI capabilities.  It functions like ChatGPT—capable of answering expert-level queries across any topic, offering dynamic, context-aware responses, and detecting user emotions in realtime.
                Designed with a scalable architecture and seamless user experience, this AI assistant goes beyond simple messaging to deliver truly human-like interaction.
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
            </div>

            <div className="project" ref={neurovisionAIRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/" alt="YC Directory App" />
              </div>
               <h2>Real-Time Chat Application using MERN & Advanced AI with Emotion Detection</h2>
              <p className="text-white-50 md:text-xl">
                An intelligent, real-time group chat application powered by the MERN stack and enhanced with advanced AI capabilities.  It functions like ChatGPT—capable of answering expert-level queries across any topic, offering dynamic, context-aware responses, and detecting user emotions in realtime.
                Designed with a scalable architecture and seamless user experience, this AI assistant goes beyond simple messaging to deliver truly human-like interaction.
              </p>
              <h2>
              <a href="https://github.com/swarnabha-dutta/nvai">Github</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;