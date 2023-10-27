import React from 'react'
import HeaderMenu from '../../components/homepage-components/main-menu/header-menu.component'
import MainComingSoon from '../../components/comingsoon-component/soon-main.component'
import './comingsoon.css'

export default function ComingSoon() {
  return (
      <div className='coming-soon-main'> 
          <HeaderMenu />

          <MainComingSoon />
          </div>
  )
}
