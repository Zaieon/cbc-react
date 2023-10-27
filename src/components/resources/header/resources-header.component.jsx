import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Communities } from '../communities/communities.component';
import { Webinar } from '../webinar/webinar.component';
import { Courses } from '../courses/courses.component';
import { Ama } from '../ama/ama.component';
import { Charity } from '../charity/charity.component';
import { ResourcesComp } from '../../../pages/resources-page/resources-component';
import HeaderMenu from '../../homepage-components/main-menu/header-menu.component';
import './resources-header.style.scss'

export default class ResourcesHeader extends Component {
  constructor() {
    super()
  
    this.state = {
      comp: <Communities />
    }
  }
  componentDidMount() {
    Aos.init({duration: 3000})
  }

  displayResource = (val) => {
    if (val === 'com') {
      this.setState({comp: <Communities/>})
    }
    else if (val === 'web') {
      this.setState({comp: <Webinar />})
    }
    else if (val === 'course') {
      this.setState({comp: <Courses />})
    }
    else if (val === 'ama') {
      this.setState({comp: <Ama />})
    }
    else if (val === 'charity') {
      this.setState({comp: <Charity />})
    }
  }


  render() {
    return (
      <div>
         <div className='header-resource-main'>
          <HeaderMenu />
        <div className='jumbotron-main' data-aos="fade-in">
            <h2>Resources</h2>
    
      <p>
          With over 10,000+ community members across the continent, we pride ourselves on our ability to create a platform that supports growth and personal development. Over the last 3 years, we have earned ourselves, an enviable track record in the blockchain industry and the global digital economy.
        </p>
      <div className='jumbotron-btn'>
        <button className='btn-join' onClick={() => {this.displayResource('com')}}>Communities</button>
          <button className='btn-learn' onClick={() => {this.displayResource('web')}}>Webinar</button>
          <button className='btn-join' onClick={() => {this.displayResource('course')}}>Courses</button>
              <button className='btn-learn' onClick={() => { this.displayResource('ama') }}>AMA Sessions</button>
              <button className='btn-join' onClick={() => { this.displayResource('charity') }}>Charity</button>
        
      </div>
    </div>
          
        </div>
        <ResourcesComp value = {this.state.comp} />
      </div>
      
    )
  }
}
