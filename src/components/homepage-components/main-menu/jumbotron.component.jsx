import React, {useEffect} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './jumbotron.style.scss'

export const Jumbotron = () => {
  useEffect(() => {
    Aos.init({duration: 3000})
  }, [])

  return (
    <div className='jumbotron-main' data-aos="fade-in">
      <h1>
          Be Part of an Ever Improving Ecosystem
      </h1>
      <p>
          Join thousands of critical-thinking individuals, industry leaders, tech experts and blockchain enthusiasts in a community that supports future-ready innovations, career growth, personal development and community building.
      </p>
      <div className='jumbotron-btn'>
        <Link to= 'https://bit.ly/cbcamptg'><button className="btn-join">Join Us <FaArrowRight className='arrow' /></button></Link>
        {/* <button className='btn-join'>Join Us <FaArrowRight className='arrow' /></button> */}
        <Link to= '/about'><button className="btn-learn">Learn More</button></Link>
        {/* <button className='btn-learn'>Learn More</button> */}
      </div>
    </div>
  )
}
