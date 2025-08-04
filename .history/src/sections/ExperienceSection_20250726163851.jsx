import React from 'react'
import TitleHeader from '../components/TitleHeader'
// import { expCards } from '../constants/index.js';
import GlowCard from '../components/GlowCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  

  useGSAP(() => {
      
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%'
        }
      })
    })


    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        }
      
      },
    }) 

  }, []);


  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='h-full w-full md:px-20 px-5'>
        <TitleHeader title="My Project Experience" sub=" 👨‍💼My Projects Overview " />

        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            
          </div>
        </div>
        </div>
    </section>
  )
}

export default ExperienceSection