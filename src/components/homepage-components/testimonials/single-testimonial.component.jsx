import React from 'react'
import './single-testimonial.style.scss'

export const SingleTestimonial = (props) => {
  return (
      <div className='card-outer'>
          <div className='card-inner'>
              <div className='card'>
                  <div className="card-img">
                      <img src={props.img} alt={props.name} />
                  </div>
                  
                  <div className="content">
                      <h3>{props.name}</h3>
                      <p>{props.content}</p>
                      <span>{props.date}</span>
                  </div>
              </div>
          </div>
      </div>
  )
}
