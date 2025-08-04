/* eslint-disable no-unused-vars */
import React from 'react';

const  TitleHeader=({title,sub}) =>{
  return (
    <div className='flex flex-col not-visited:items-center gap-5'>

      <div className='hero-badge'>
        <p>{ sub}</p>
      </div>
    </div>
  );
}

export default TitleHeader;
