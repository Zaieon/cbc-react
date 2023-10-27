import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import './header-menu.style.scss'



export default class HeaderMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isBurgerMenu: true,
      myClass: 'side-bar-menu'
    }
    // this.myElementRef = React.createRef();
  }

  

    toggleBurgerMenu = () => {
      this.setState((prevState) => ({
     isBurgerMenu: !prevState.isBurgerMenu, 
      }), () => {
        if (!this.state.isBurgerMenu) {
          this.setState({ myClass: this.state.myClass + ' active' })
        }
        else if (this.state.isBurgerMenu) {
          this.setState({myClass: this.state.myClass.slice(0, 14)})
        }
   })
    
  }

  render() {
    return (
      <>
          <div className='header-menu-main'>
              <nav>
            <div className='main-menu'>
              <Link to='/'><img src={require("../img/CBC logo.png")} alt="CBC" /></Link>
                      
                  <ul>
                      <li><Link className='menu' to= '/'>Home</Link></li>
                      <li><Link className='menu' to='/about'>About</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Resources</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Shop</Link></li>
                      <li><Link className='menu' to='https://event.cbccommunity.com/'>Events</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Blog</Link></li>
                      <li><Link className='menu' to='/contact'>Contact</Link></li>
                  </ul>
            <Link to= 'https://bit.ly/cbcamptg'><button className="menu-btn">Join Our Community</button></Link>
              <div className= "burger" ref={this.myElementRef} onClick={this.toggleBurgerMenu}>{ 
                this.state.isBurgerMenu ? (<GiHamburgerMenu />) : (<GrClose />)
             }</div>
             
          </div>
          <div className={this.state.myClass}>
            <div className="drop-down-menu">
                <ul>
                      <li><Link className='menu' to= '/'>Home</Link></li>
                      <li><Link className='menu' to='/about'>About</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Resources</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Shop</Link></li>
                      <li><Link className='menu' to='https://event.cbccommunity.com/'>Events</Link></li>
                      <li><Link className='menu' to='/coming-soon'>Blog</Link></li>
                      <li><Link className='menu' to='/contact'>Contact</Link></li>
                  </ul>
            <Link to= 'https://bit.ly/cbcamptg'><button className="menu-btn">Join Our Community</button></Link>
              </div>
            </div>
          
                   </nav>
          </div>
      </>
    )
  }
}


