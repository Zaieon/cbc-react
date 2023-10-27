import React, {useEffect} from 'react'
import { TeamMember } from './team-member.component'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './team-section.style.scss'

export const TeamSection = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })
  return (
      <div className='team-main'>
          <div className='team-title' data-aos="fade-in">
            <h2>Meet the <span>Team</span></h2>
    
      <p>
          With over 10,000+ community members across the continent, we pride ourselves on our ability to create a platform that supports growth and personal development. Over the last 3 years, we have earned ourselves, an enviable track record in the blockchain industry and the global digital economy.
              </p>
          </div>

          <div className="team-members">
              <TeamMember img={require("../img/obinna.JPG")} name='Obinna Iwunno' role='Founder/Lead Director' content="Obinna Iwunno, Founder of Crypto Bootcamp Community, blockchain educator, project manager, and SiBAN President, Committed to blockchain growth, training 10,0000+ people and advocating for massive blockchain adoption, especially in Africa." linked= 'https://www.linkedin.com/in/obinna-iwuno-b1575b106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
              
              <TeamMember img={require("../img/debbie.png")} name='Deborah Akpokighe' role='Head of Community' content="Deborah Akpokighe, Head of Community at Crypto Bootcamp; a blockchain and Web3 education platform. She has a B.Sc in Health Education. Passionate about personal growth, constantly improving. A purpose-driven community manager driving brands to solve real-world issues." linked= 'https://www.linkedin.com/in/deborahakpokighe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
              
              <TeamMember img={require("../img/comfort.png")} name='Comfort Ikechukwu' role='Creative writer/Content Creator' content="Comfort Ikechukwu is a versatile professional with a passion for words, communities, and the exciting world of blockchain and cryptocurrencies. She combines her creative writing skills with her enthusiasm for blockchain technology to help others navigate this dynamic landscape." linked= 'http://www.linkedin.com/in/comfortikechukwu'/>
              
          </div>
          
          
          
    </div>
      
  )
}
