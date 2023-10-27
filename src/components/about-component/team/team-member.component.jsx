import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './team-member.style.scss'


export const TeamMember = (props) => {
    useEffect(() => {
        Aos.init({duration: 2000})
    })
  return (
      <div className='card-item' data-aos="zoom-in-up">
          <div className="card">
              <div className="card-img">
                  <img src={props.img} alt= {props.name} />
              </div>
              <div className="content">
                  <h3>{props.name}</h3>
                  <small>{props.role}</small>
                  <p>{props.content}</p>
                  <Link className='in-link' to={props.linked}><h6>View LinkedIn Profile</h6></Link>
              </div>
          </div>
    </div>
  )
}

