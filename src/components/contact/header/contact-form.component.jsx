import React, {useEffect} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact-form.style.scss'


export const ContactForm = () => {
  useEffect(() => {
    Aos.init({duration: 2500})
  })

  return (
      <div className='contact-form-main'>
              <label htmlFor="name">
                Full Name:
          </label> <br/>
          <input type="text" name='name' placeholder='Full Name' /><br />
  
              <label htmlFor="email">Email Address:</label> <br />
          <input type="email" name='email' placeholder='Email Address' /><br />
          <label htmlFor="message">Message:</label> <br />
          <textarea name="message" className='message' placeholder='Message' id="" cols="30" rows="10"></textarea>
          {/* <input type="text" className='message' name='message' placeholder='Message' /> */}
          
          <br/>
               <button className='btn-join'>Send Message<FaArrowRight className='arrow'/></button>
          
      </div>
  )
}



