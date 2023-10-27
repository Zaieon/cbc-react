import React, {useRef, useEffect} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './subscribe-form.style.scss'
import { sendForm } from '@emailjs/browser';



export const SubscribeForm = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_izgtshl', 'template_zu4ayv8', form.current, 'yqGdwoiQoYMX9FrqT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="subscribe-form-main">
      <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='user_name'>Full Name: </label> <br />
      <input type="text" name="user_name" placeholder='Full Name' /> <br />
      <label htmlFor='user_email'>Email Address: </label> <br />
      <input type="email" name="user_email" placeholder='Email Address' /><br />
      <button className='btn-join'>Subscribe <FaArrowRight className='arrow' /></button>
    </form>
    </div>
    
  );
};

