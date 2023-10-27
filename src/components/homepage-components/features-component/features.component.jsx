import React, { useEffect } from 'react'
import { SingleFeature } from './single-feature..component'
import { FeatureTitle } from './feature-title.component'
import './features.style.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Features = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  })

  return (
      <div className='feature' data-aos= "slide-up">
      <FeatureTitle />
      <div className='single-features'>
        <SingleFeature img={require("../img/Image 335.png")} title='Blockchain/Web3 Training and Education' content='Helping individuals understand the concept of Web3 digital finesse' />
      
        <SingleFeature img={require("../img/Image 331.png")} title='Talent Development and Management' content="CBC is the industry's choice and go-to platform for marketing"/>
        
        <SingleFeature img={require("../img/Image 330.png")} title='Product/Brand Visibility' content='We provide top-quality product and brand awareness packages' />
      
      <SingleFeature img={require("../img/Image 331.png")} title='Community Building and Management' content="Providing services to help emerging Blockchain projects scale up and stay relevant in the industry" />

        <SingleFeature img={require("../img/Image 333.png")} title='Events and Activations' content="CBC is the industry's choice and go-to platform for marketing" />

        <SingleFeature img={require("../img/Image 334.png")} title='Marketing and Campaigns' content="We provide top-quality and highly promotional campaigns for digital products" />

        <SingleFeature img={require("../img/Image 332.png")} title='Blockchain Business Solutions and Consulting' content="We provide top quality courses on Blockchain education for starters and intermediaries." />

        <SingleFeature img={require("../img/Image 330.png")} title='Market Expansion and Entry Support' content="We provide top quality courses on Blockchain education for starters and intermediaries." />

      </div>
      
    </div>
  )
}
