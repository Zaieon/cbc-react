import React from 'react'
import { SingleTestimonial } from './single-testimonial.component'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './testimonials.style.scss'
import { useEffect } from 'react'


export const Testimonials = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
      <div className='testimonials-main' data-aos="zoom-in-up">
          <div className="join-content">
              <h2>Testimonials</h2>
              <p>See what some of our community members have testified of the Crypto bootcamp community and how it has benefitted their lives</p>
      </div>
      
      <div className="testimonial-slide">
         <SingleTestimonial img={require("../img/aaa.jpg")} name='COLLINS UKADIKE' content="Bootcamp 3.0 exceeded all my expectations! The content was relevant and practical, allowing me to grasp the essentials of various tech skills in the blockchain space. The training left a lasting impact on me, opening my eyes to the immense opportunities that Blockchain offers. I can't wait for the next bootcamp because I know it would be explosive." date='Defi Analyst, CM.' />
      
      <SingleTestimonial img = {require("../img/bbb.jpg")} name='AYERE PROGRESS' content= "Attending Bootcamp 3.0 allowed me to network with like-minded individuals, build professional relationships, and broaden my understanding of blockchain technology, its applications, and potential career paths in the field. The knowledge and skills I acquired during the training has greatly assisted me in conducting research on DeFi." date = 'DeFi Research Analyst' />
      </div>

     
     
          
    </div>
  )
}
