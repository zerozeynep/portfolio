import React from 'react';
import {MDBIcon} from 'mdbreact'

function Contact() {
  return (
    <div id='contact'>
      <ul>
        <li>
          <a href="mailto:zeynep-demirtas@windowslive.com" >
            <MDBIcon far icon="envelope-open" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/zeynep-gizem-demirta%C5%9F-04a86a197' target='_blank' rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin-in" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
