import React, { Component } from 'react';
import ResourcesHeader from '../../components/resources/header/resources-header.component';
import SubscribeTitle from '../../components/homepage-components/subscribe/subscribe-title.component';
import {motion} from 'framer-motion'
import './resources.scss'


export class ResourcesPage extends Component {
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
        <ResourcesHeader />
        
        <div className="sub-sec">
          <SubscribeTitle />
        </div>
        
      </motion.div>
    )
  }
}
