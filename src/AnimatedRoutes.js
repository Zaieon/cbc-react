import React from 'react'
import { HomePage } from './pages/homepage/homepage';
import ComingSoon from './pages/comingsoon-page/comingsoon';
import About from './pages/about-page/about';
import Contact from './pages/contact-page/contact';
import { ResourcesPage } from './pages/resources-page/resources';
import {AnimatePresence} from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

export const AnimatedRoutes = () => {
    const location = useLocation()
    return (
      <AnimatePresence>
             <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/coming-soon' element = {<ComingSoon />} />
      </Routes>
      </AnimatePresence>
     
  )
}
