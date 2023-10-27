import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './resource-card.style.scss'

export const ResourceCard = (props) => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })

  return (
      <div className='resource-card-item' data-aos="zoom-in-up">
          <div className="card">
              <div className="card-img">
                  <img src={props.img} alt={props.title} />
              </div>
              <div className="content">
                  <h3>{props.title}</h3>
                  <p>{props.content}</p>
                  <Link className='menu' to='/about'>Learn more</Link>
              </div>
          </div>
      </div>
  )
}
