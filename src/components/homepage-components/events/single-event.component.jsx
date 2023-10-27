import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './single-event.style.scss'
import { useEffect } from 'react'

export default function SingleEvent(props) {
    useEffect(() => {
        Aos.init({duration: 2000})
    })
  return (
      <div className='single-event-main' data-aos="fade-in-up">
          <img src={props.img} alt="" />
          <div className="single-content">
              <h2>{props.title}</h2>
              <p>{props.content}</p>
              <Link to= {props.link}><button className="btn-view-event">View Event <FaArrowRight className='arrow' /></button></Link>
          {/* <button className='btn-view-event'>View Event <FaArrowRight className='arrow' /></button> */}
          </div>
          
          
      </div>
  )
}
