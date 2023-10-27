import React, { Component } from 'react';
import { HeroMain } from '../../components/homepage-components/hero-section/hero-main.component';
import { Features } from '../../components/homepage-components/features-component/features.component';
import { Join } from '../../components/homepage-components/join-community/join.component';
import { Events } from '../../components/homepage-components/events/events.component';
import SubscribeTitle from '../../components/homepage-components/subscribe/subscribe-title.component';
import { Testimonials } from '../../components/homepage-components/testimonials/testimonials.component';
import {motion} from 'framer-motion'
import './homepage.scss';



export class HomePage extends Component {
    constructor() {
      super()
    
      this.state = {
      }
    }
  render() {
    return (
      <motion.div
        initial={ {transform: 'translate(0px)'} }
        animate={{ transform: 'translate(0%)'} }
        exit={ {transform: 'translate(100%)', transition: {duration: 0.3}}}
      >
          <HeroMain />
          <Features />
          <Join />
        <Events />
        <Testimonials />
        <SubscribeTitle />
        
      </motion.div>
    )
  }
}
