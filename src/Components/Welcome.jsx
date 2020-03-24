import React from 'react';
import '../App.css'
import {MDBTypography, MDBIcon,MDBAnimation, MDBContainer} from 'mdbreact'
import Navbar from './Navbar'

function Welcome() {
  return (
    <>
        <MDBContainer fluid className='main-box'>
          <MDBTypography className="welcome-text text-center">Well,<br></br>Come! </MDBTypography>
          <MDBAnimation type="bounce" infinite>
            <MDBIcon className='animated' icon="chevron-down" />
          </MDBAnimation>
        </MDBContainer>
    </>
        )
}

export default Welcome;
