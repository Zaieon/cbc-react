import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './footer.style.scss'
import { FaTwitter, FaFacebook, FaLinkedinIn, FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export const FooterMenu = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })
  return (
      <footer>
          <div className='footer-menu-main' data-aos= "fade-in">
              <nav>
          <div>
            <Link to='/'><img src={require("../img/CBC logo.png")} alt="CBC" /></Link>
                    
                      
                  <ul className='footer-menu'>
                      <li><Link className='menu' to= '/'>Home</Link></li>
                      <li><Link className='menu' to='/about'>About</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Resources</Link></li>
                       <li><Link className='menu' to='/coming-soon'>Shop</Link></li>
                      <li><Link className='menu' to='https://event.cbccommunity.com/'>Events</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Blog</Link></li>
                      <li><Link className='menu' to='/contact'>Contact</Link></li>
            </ul>
            <div className="footer">
               <div className='icon-content'>
              <h3>Follow Us</h3>
              <ul className='icon-btn'>
                      <li><Link to='https://bit.ly/cbcamptwitter'><FaTwitter /></Link></li>
                      <li><Link to='https://bit.ly/cbcampfacebook'><FaFacebook /></Link></li>
                      <li><Link to='https://bit.ly/cbcamplinkedin'><FaLinkedinIn /></Link></li>
                      <li><Link to='https://bit.ly/cbcampinsta'><FaInstagram /></Link></li>
                      <li><Link to='https://bit.ly/cbcamptg'><FaTelegramPlane /></Link></li>
                      <li><Link><FaWhatsapp /></Link></li>
                  </ul>
            </div>
            </div>
           
                  
             
                  </div>
                   </nav>
          </div>
    </footer>
  )
}
