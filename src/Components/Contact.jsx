import React from 'react';
import {MDBIcon, MDBTypography} from 'mdbreact'

function Contact() {
  return (
    <div id='contact'>
        <MDBTypography className='mb-5' tag='h3' variant="h3-responsive">You can reach me via :</MDBTypography>
      <ul className='pl-0'>
        <li>
          <a href="mailto:zeynep-demirtas@windowslive.com" >
            <MDBIcon far icon="envelope-open" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/zeynepgizemdemirtas' target='_blank' rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin-in" />
          </a>
        </li>
        <li>
          <a href='https://github.com/zerozeynep/' target='_blank' rel="noopener noreferrer">
            <MDBIcon fab icon="github" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
