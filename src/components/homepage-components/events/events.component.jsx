import React, {useEffect} from 'react'
import SingleEvent from './single-event.component'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './events.style.scss'

export const Events = () => {
    useEffect(() => {
      Aos.init({duration: 3000})
    })
    

  return (
      <div className='event-main'>
          <div className="event-title" data-aos = "slide-up">
              <h2>Past Events</h2>
              <Link className='d-btn' to= 'https://event.cbccommunity.com/#uevents'><button className="">Upcoming Events <FaArrowRight className='arrow' /></button></Link>
              {/* <button>All Events <FaArrowRight className='arrow' /></button> */}
          </div>
          <div className="single-event">
              <SingleEvent data-aos = "fade-in" img={require("../img/p23.jpeg")} title='Bitcoin Pizza Day, 2023' content='Bitcoin Pizza Day, celebrated on May 22 each year, commemorates the first-ever commercial Bitcoin transaction in 2010...' link = 'https://event.cbccommunity.com/bitcoin-pizza-day-2023/' />
              
              <SingleEvent img={require("../img/sw23.jpeg")} title='CBC Web3 Staff Week' content='CBC Web3 Staff week is a program designed for both seasoned professionals and aspiring enthusiasts who want to...' link = 'https://event.cbccommunity.com/building-expertise-and-professionalism-in-web3/'/>
              
              <SingleEvent img = {require("../img/wb23.jpeg")} title= "International Women's Day Blockchain Week, 2023" content = 'This program included keynote speeches, panel discussions, and workshops, featuring some of the most successful women...' link = 'https://event.cbccommunity.com/empowering-women-in-web3-staff-week/' />
          </div>
          <Link className='m-btn' to= 'https://event.cbccommunity.com/#uevents'><button className="">Upcoming Events <FaArrowRight className='arrow' /></button></Link>
      </div>
  )
}
