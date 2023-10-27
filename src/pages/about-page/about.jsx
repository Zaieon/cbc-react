import React, { Component } from 'react'
import { HeroMainAbout } from '../../components/about-component/header/header.component'
import { TeamSection } from '../../components/about-component/team/team-section.component'
import SubscribeTitle from '../../components/homepage-components/subscribe/subscribe-title.component'
import './about.scss'
import {motion} from 'framer-motion'


export default class About extends Component {
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
            <HeroMainAbout />
            <TeamSection />
            <SubscribeTitle />
      </motion.div>
    )
  }
}
