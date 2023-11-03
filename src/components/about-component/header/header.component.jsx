import React, {useEffect} from 'react';
import HeaderMenu from '../../homepage-components/main-menu/header-menu.component';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './header.style.scss'

export const HeroMainAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 1500})
  })

  return (
    <div className='header-main'>
          <HeaderMenu />
        <div className='jumbotron-main' data-aos='fade-in'>
            <h2>About <span>Us</span></h2>
    
      <p>
          With over 10,000+ community members across the continent, we pride ourselves on our ability to create a platform that supports growth and personal development. Over the last 3 years, we have earned ourselves, an enviable track record in the blockchain industry and the global digital economy.
        </p><br/>
        <p>
          We have our imprints in major cities across Africa including Capetown, Kampala, Accra, Nairobi, Abuja, and Lagos, among a plethora of others, having empowered through our educational programs, over 5,000 persons in these cities who are now actively engaged in the Web3 ecosystem and blockchain-related jobs on their journey to become industry-leading experts.
      </p>
      {/* <div className='jumbotron-btn'>`=-
        <button className='btn-join'>Join Us</button>
        <button className='btn-learn'>Learn More</button>
      </div> */}
    </div>
          
      </div>
  )
}

