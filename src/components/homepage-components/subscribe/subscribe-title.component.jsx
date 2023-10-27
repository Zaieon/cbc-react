import React, {useEffect} from 'react'
import { SubscribeForm } from './subscribe-form.component'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './subscribe-title.style.scss'


export default function SubscribeTitle() {
  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
      <div className='subscribe-main' data-aos="zoom-in-right">
          <div className="join-content" >
              <h2>Stay Informed and <span>Updated</span></h2>
              <p>Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
          </div>
          
          
            <SubscribeForm />
          
    </div>
  )
}
