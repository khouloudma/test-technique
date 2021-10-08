import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Sturtup
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Tarifs' className='nav-links' onClick={closeMobileMenu}>
                Tarifs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact_us' className='nav-links' onClick={closeMobileMenu} >
                Contact us
              </Link>
            </li>
            <li>
              <Link to='/Log_In' className='nav-links-mobile-left' onClick={closeMobileMenu}>
                Log In
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile-right' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Log In</Button>}

          {button && <Button buttonStyle='btn--primary'>Sign Up</Button>}

        </div>
      </nav>
 
      <div className="row">
        
      <div className="col-6"><br></br><br></br>
          <img src="images/main.png" className="image-form"></img>
          </div>
      
          <div className="col-6">
          <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                <div class="form-controller">
                <div className="form-group">
                <a class="btn btn-outline-primary" href="" role="button" >
                   <img width="20px"  alt="Google sign-in" src="images/google.png" />
                  Connect with Google
                </a>
                </div>
                <div className="form-group">
                <a class="btn btn-outline-dark" href="" role="button" >
                   <img width="20px"  alt="facebook sign-in" src="images/facebook.png" />
                  Connect with Facebook
                </a>
                </div>
                <div className="form-group">
                  <div className="row">
                  <div className="col-4">
                    <hr></hr>
                    </div >
                  <div className="col-4">
                    or
                    </div>
                  <div className="col-4">
                   
                      <hr></hr>  
                      </div>
                </div>              
                </div>

                <div className="form-group">
                    <input type="mail" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                <a class="btn btn-outline-success" href="" role="button" >
                  Connect with my mail
                </a>
                </div>
                </div></div>
                </div></div>
            </div></div></div>
    </>
  );
}

export default Navbar;