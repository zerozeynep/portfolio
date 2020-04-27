import React from 'react';
import '../Style/App.css'
import {MDBTypography, MDBIcon,MDBAnimation, MDBContainer} from 'mdbreact'

function Welcome() {
  return (
    <>
      <MDBContainer fluid className='welcome-box'>
        <MDBTypography className="welcome-text text-center">Well,<br></br>Come!
        </MDBTypography>
        <MDBAnimation type="bounce" infinite>
          <MDBIcon className='animated' icon="chevron-down" />
        </MDBAnimation>
      </MDBContainer>
    </>
        )
}

export default Welcome;
