import React from 'react'
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import '../Style/App.css';
import staticSite from '../Media/staticWebsiteunDraw.svg'
import reactSite from '../Media/reactSiteunDraw.svg'
import jsSite from '../Media/jsSiteUndraw.svg'


//SVG images by https://undraw.co/


const Projects= () => {
  return (
    <MDBCardGroup id='card-group'>
      <MDBCard>
        <MDBCardImage src={staticSite} height='220px' alt="html css svg image" top hover
          overlay="white-slight" className='p-1'/>
        <MDBCardBody>
          <MDBCardTitle tag="h5">HTML & CSS Project</MDBCardTitle>
          <MDBCardText>
            First web development team project i got involved in. We built it after one month of programming education at Re:Coded!
          </MDBCardText>
          <MDBBtn color="indigo" size="md">
          <a href='https://github.com/oktayibis/wexim-team' rel="noopener noreferrer" target='_blank'><i class="fas fa-link"></i> github repository</a>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={reactSite} height='220px' alt="react svg image" top hover
          overlay="white-slight" className='p-1'/>
        <MDBCardBody>
          <MDBCardTitle tag="h5">React.js Project</MDBCardTitle>
          <MDBCardText>
            Solo project of my portfolio website. I used Material Design for Bootstrap library for styling.
          </MDBCardText>
          <MDBBtn color="indigo" size="md">
            <a href='https://github.com/zerozeynep/portfolio' rel="noopener noreferrer" target='_blank'><i class="fas fa-link"></i> github repository</a>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={jsSite} height='220px'  alt="web development svg image" top hover
          overlay="white-slight" className='p-1'/>
        <MDBCardBody>
          <MDBCardTitle tag="h5">Coming soon</MDBCardTitle>
          <MDBCardText>
            Under construction

          </MDBCardText>
          {/* <MDBBtn color="indigo" size="md">
            <a href='#' target='_blank' rel="noopener noreferrer" ><i class="fas fa-link"></i> github repository</a>
          </MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Projects;
