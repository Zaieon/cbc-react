import React, {useEffect} from 'react'
import { ContactForm } from './contact-form.component'
import { FaPhone, FaEnvelopeOpenText } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact-main.style.scss'

export const ContactMain = () => {
    useEffect(() => {
        Aos.init({duration: 2500})
    })
  return (
      <div className='contact-main'>
          <div className="contact-text" data-aos= "fade-in">
              <img src={require("../img/Contact_BG.png")} alt="" />
              <div className="content">
                  <h2>Contact <span>Us</span> </h2>
                  <p>Any questions or remarks?</p>
                  <p>Just write us a message!</p>
                  <div className="contact-details">
                      <p><span><FaPhone /></span> (+234)803 563 1543, (+1)587-971-6231</p>
                      <p><span><FaEnvelopeOpenText /> </span>contact@cbccommunity.com</p>
                  </div>
              </div>

          </div>

          <ContactForm />
    </div>
  )
}
