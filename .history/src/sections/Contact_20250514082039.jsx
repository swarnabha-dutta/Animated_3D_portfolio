import React from 'react';
import TitleHeader from '../components/TitleHeader';

const Contact = () => {
  return (
    <div id='contact' className='flex-center flex section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title="Get In Touch"
          sub="✉️ Contact Information"
        />
        <div className='mt-10 flex flex-col items-center'>
          <p className='text-center max-w-2xl mb-8'>
            Have a question or want to work together? Feel free to reach out to us using the contact information below.
          </p>
          <div className='card-border p-6 w-full max-w-2xl'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <span className='font-bold'>Email:</span>
                <a href='mailto:contact@example.com' className='hover:underline'>contact@example.com</a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-bold'>Phone:</span>
                <a href='tel:+1234567890' className='hover:underline'>+1 (234) 567-890</a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-bold'>Location:</span>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;