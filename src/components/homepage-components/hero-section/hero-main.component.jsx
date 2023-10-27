import React from 'react';
import HeaderMenu from '../main-menu/header-menu.component';
import { Jumbotron } from '../main-menu/jumbotron.component';
import './hero-main.style.scss'

export const HeroMain = () => {

  return (
    <div className='hero-main'>
      <HeaderMenu />
      <Jumbotron />
      </div>
  )
}

