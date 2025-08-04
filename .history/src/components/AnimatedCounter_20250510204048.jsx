import React from 'react';
import { counterItems } from '../constants/index.jsx';

function AnimatedCounter() {
  return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
          {counterItems}
      </div>
    </div>
  );
}

export default AnimatedCounter;
