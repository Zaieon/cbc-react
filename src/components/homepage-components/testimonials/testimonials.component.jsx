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
         <SingleTestimonial img={require("../img/image1.jpg")} name='Afolabi Olusola' content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo necessitatibus ut cum ad molestiae repellendus facilis, quae voluptas sequi non, porro similique, tempora corrupti qui consequatur saepe recusandae. Corporis suscipit autem quisquam tempora cumque pariatur libero hic dolores iure voluptas.' date='August 06, 2022' />
      
      <SingleTestimonial img = {require("../img/image1.jpg")} name='Dora Chigozie Kingsley' content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo necessitatibus ut cum ad molestiae repellendus facilis, quae voluptas sequi non, porro similique, tempora corrupti qui consequatur saepe recusandae. Corporis suscipit autem quisquam tempora cumque pariatur libero hic dolores iure voluptas.' date = 'December 30, 2021' />
      </div>

     
     
          
    </div>
  )
}
