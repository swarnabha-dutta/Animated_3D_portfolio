import React from 'react';

function ShowcaseSection() {
  return (
    <div id='work' className='app-showcase'>
      <div className='showcaselayout'>
        {/* LEFT */}
        {/* Add also challenges and Technology Used  */}
        <div className='first-project-wrapper'>
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
          <div className='project'>
            <div className='image-wrapper bg-[#ffefdb]'>
              <img src="/images/project2.png" alt="Code Reviewer Platform" />
            
            </div>
          </div>
          <div className='project'>
            <div className='image-wrapper bg-[#ffe7eb]'>
              <img src="/images/project3.png" alt="NeuroVision AI –  Conversational Web App " />
            </div>
            <h2>NeuroVision-AI: Smart Conversational Assistant Built with MERN & OpenAI</h2>

            <p>An AI-powered chat interface with real-time interaction, context handling, and dynamic responses—built using the MERN stack and OpenAI API.</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
