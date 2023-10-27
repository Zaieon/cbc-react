import React from 'react';
import './single-feature.style.scss';

export const SingleFeature = (props) => {
  return (
      <div className='single-feature-main'>
          <div className='feature-heading'>
              <img src={props.img} alt={props.title} />
              <h2>{props.title}</h2>
          </div>
          <div className="feature-content">
              <p>{props.content}</p>
          </div>
          
    </div>
  )
}
