import React from 'react';

function ShowcaseSection() {
  return (
    <div id='work' className='app-showcase'>
      <div className='showcaselayout'>
        {/* LEFT */}
        <div className='first-project-wrapper'>
          <div className='image-wrapper'>
            <img src="/images/project1.png" alt="AI-Developer" />  
          </div>
          <h2 className='text-content'>
          AI-Powered Real-Time Chat App with Emotion Detection and Group Chat Support
          </h2>
          <p className='text-white-50'>
          An intelligent chat web application built with the MERN stack, supporting real-time group messaging. Integrated with AI capabilities for emotion detection, this app not only responds to user queries but acts as a smart conversational companion. It follows the MVC architecture, includes robust error handling, and delivers clear, modular code—ideal for scalability and maintainability.
          </p>
        </div>

        {/* RIGHT */}
      </div>
    </div>
  );
}

export default ShowcaseSection;
