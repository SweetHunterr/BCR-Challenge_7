import React from 'react';
import Logo from '../images/logo.png'
import '../style/style.css'

const Navbar = () => {
  return (
    <div class="container-fluid" id="my-navbar">
      <div class="row">
        <div class="col-3 area-logo">
          <img src={Logo} />
        </div>
        <div class="col-9 area-menu">
          <ul>
            <li><a href="#our-services">Our Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><button type="button" class="btn btn-limegreen">Register</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
