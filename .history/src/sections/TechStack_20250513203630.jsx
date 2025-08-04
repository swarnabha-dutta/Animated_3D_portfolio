import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { techStackIcons } from '../constants';

const  TechStack=() => {
  return (
    <div id='skills' className='flex-center flex section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="✍️ What I Bring To the Table"
        />
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              {/* <div  className='tech-card-animated-bg'/> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
