import React, {useEffect} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './join.style.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Join = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
      <div className='join-main' >
          <div className='join-img' data-aos= "zoom-in-right"><img src={require("../img/Community-Avatars.png")} alt="CBC universe" /></div>
          <div className="join-content" data-aos="zoom-in-left">
              <h2>Join Our <span>Community</span></h2>
              <p>The Crypto Bootcamp Community is Africa's premier blockchain community dedicated to driving blockchain mainstream. We have established a robust community that advocates for the inclusion of more individuals in the crypto and Web3 ecosystem through an unparralled approach to blockchain education.</p>
              <p>As a community, we are fully fitted and primed to become a leading facilitator of crypto adoption and innovative tech ideas within Africa and beyond.</p>
              <p>We aim to redefine the global digital economy by making blockchain and crypto easy for, spearheading blockchain development and lowering barrier entries while paving the way for all strata of society to harness the benefits of this cutting edge industry.</p>
        {/* <button className='btn-join'>Join Us <FaArrowRight className='arrow' /></button> */}
        <Link to= 'https://bit.ly/cbcamptg'><button className="btn-join">Join Us <FaArrowRight className='arrow' /></button></Link>
          </div>
    </div>
  )
}
