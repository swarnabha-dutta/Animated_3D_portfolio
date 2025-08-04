/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.cureent,
      { opacity: 0 },
      {opacity:1,duration : 1.5}
      
  )
  }, []);




  return (

    
    <section ref={sectionRef} id='work' className='app-showcase'>
      <div className='showcaselayout'>
        {/* LEFT */}
        {/* Add also challenges and Technology Used  */}
        <div className='first-project-wrapper' ref={project1Ref}>
          <div className='image-wrapper'>
            <img src="/images/project1.png" alt="AI-Developer" />  
          </div>
          <h2 className='text-content'>
          AI-Powered Real-Time Chat App with Emotion Detection and Group Chat Support
          </h2>
          <p className='text-white-50'>
            An intelligent chat web application built with the MERN stack, supporting real-time group messaging.
            <br />
            Integrated with AI capabilities for emotion detection with scalable backend architecture, this app not only responds to user queries but acts as a smart conversational companion.<br/> 
          </p>
        </div>

        {/* RIGHT */}
        <div className='project-list-wrapper overflow-hidden'>
          <div className='project' ref={project2Ref}>
            <div className='image-wrapper bg-[#ffefdb]'>
              <img src="/images/project2.png" alt="AI-Powered Code Reviewer Platform" />
            </div>
            <h2>AI Code Reviewer Platform: Instant Feedback for Developers</h2>
            {/* <p>
              A smart code review tool that analyzes developer code in real-time using AI,
              offering suggestions, detecting bugs, and improving code quality—built with the MERN stack and OpenAI integration.
            </p> */}
          </div>
          <div className='project' ref={project3Ref}>
            <div className='image-wrapper bg-[#ffe7eb]'>
              <img src="/images/project3.png" alt="NeuroVision AI –  Conversational Web App " />
            </div>
            <h2>NeuroVision-AI: Smart Conversational Assistant Built with MERN & OpenAI</h2>

            {/* <p>An AI-powered chat interface with real-time interaction, context handling, and dynamic responses—built using the MERN stack and OpenAI API.</p> */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
