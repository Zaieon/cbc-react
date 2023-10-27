import React, { Component } from 'react'
import HeaderMenu from '../../components/homepage-components/main-menu/header-menu.component'
import { ContactMain } from '../../components/contact/header/contact-main.component'
import SubscribeTitle from '../../components/homepage-components/subscribe/subscribe-title.component'
import {motion} from 'framer-motion'
import './contact.scss'

export default class Contact extends Component {
    constructor() {
      super()
    
      this.state = {
         
      }
    }
  render() {
    return (
      <motion.div
        className='contact-page'
        initial={ {transform: 'translate(0px)'} }
        animate={{ transform: 'translate(0%)'} }
        exit={ {transform: 'translate(100%)', transition: {duration: 0.3}}}
      >
        <HeaderMenu />
        <ContactMain />
        <SubscribeTitle />
        
      </motion.div>
    )
  }
}
