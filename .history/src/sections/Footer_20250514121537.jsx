import React from 'react';
import {socialImgs} from '../constants/index.js';
const  Footer = () =>  {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center'>
            <a href="/">Visit My Blog</a>
        </div>
        <div className='socials'>
          {socialImgs.map((socialImage) => (
            <a href="">
              <img src={socialImage.imgPath} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
