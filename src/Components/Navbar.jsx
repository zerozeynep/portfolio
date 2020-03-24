import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About'
import { MDBContainer,MDBTypography, MDBIcon, MDBCol } from 'mdbreact';

const Navbar = () => {

  
  return (
    <>
    <MDBCol id='nav-card' className='h-75' size='10'>
      <div>
        <MDBTypography tag="h1" variant="display-4">Zeynep Gizem Demirtaş </MDBTypography>
        <MDBIcon icon="adjust" />
      </div>
      <div className='navbar'>
      <NavLink  to='/about' exact>About</NavLink>
      <NavLink to='/cv' exact>CV</NavLink>
      <NavLink to='/portfolio' exact>Portfolio</NavLink>
      <NavLink to='/contact' exact>Contact</NavLink>
      </div>
      <About/>
      <svg id='svg-card' xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
        <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
      </svg>
      </MDBCol>
    </>
  );
};

export default Navbar;