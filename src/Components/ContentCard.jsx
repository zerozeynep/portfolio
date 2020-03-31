import React, { Component } from 'react';
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import About from './About'
import { MDBTypography, MDBIcon, MDBCol, MDBContainer,MDBNavbar,MDBNavLink,MDBNavbarToggler,MDBNavItem,MDBNavbarNav,MDBCollapse} from 'mdbreact';
import Projects from './Projects';
import CV from './CV'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



AOS.init();


class Navbar extends Component {
      state = {
    isOpen: false,
    isDark: false
  };

  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })  
  }

  toggleTheme = () =>{
    this.setState({isDark: !this.state.isDark})
  }
  
  


  

  render() {
    return (
      <>
        <MDBContainer data-aos="fade-up"  data-aos-easing="ease"  data-aos-delay="600" fluid id={`${this.state.isDark ? 'darkBackgroundCard':'background-card'}`} >
          <MDBCol id='nav-card' className={`col-md-11 ${this.state.isDark ? 'dark-nav-card':''}`}>
            <div className='row pb-5'>
              <div className='row col-xl-8 m-lg-5 m-3' id='header-box'>
                  <MDBTypography tag="h1" variant="display-4">Zeynep Gizem Demirtaş </MDBTypography>
                  <MDBIcon id='toggle-theme' icon="adjust" onClick={this.toggleTheme} />
              </div>
              <div className='nav-bar col-xl-8 ml-lg-5'>
                < Router>
                  <MDBNavbar p-0 dark={this.state.isDark}  light={!this.state.isDark} expand="md" className='mb-5'>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                      <MDBNavbarNav>
                      <MDBNavItem>
                        <MDBNavLink to='/about' >About</MDBNavLink>
                      </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to='/cv' >CV</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink  to='/projects' >Projects</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to='/contact' >Contact</MDBNavLink>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBNavbar>
                  <Switch>
                    <Route exact path="/" >
                      <About/>
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/cv">
                      <CV />
                    </Route>
                    <Route path="/projects">
                      <Projects />
                    </Route>
                    <Route path="/contact">
                      <Contact />
                    </Route>
                  </Switch>
               </Router>
            </div>
            <svg className={`svg-card ${this.state.isDark ? 'dark-svg-card':''}`} xmlns="http://www.w3.org/2000/svg">
              <line x1="250" y1="220" x2="400" y2="80"/>
              <line x1="100" y1="190" x2="250" y2="50"/>
              <line x1="100" y1="490" x2="250" y2="350"/>
              <line x1="100" y1="790" x2="250" y2="650"/>
              <line x1="250" y1="520" x2="400" y2="380"/>
              <line x1="250" y1="820" x2="400" y2="680"/>
              <line x1="100" y1="1090" x2="250" y2="950"/>
              <line x1="250" y1="1120" x2="400" y2="980"/>
              <line x1="100" y1="1390" x2="250" y2="1250"/>
              <line x1="250" y1="1420" x2="400" y2="1280"/>
           </svg>
        </div>
      </MDBCol>
      </MDBContainer>
      </>
    )
  }
}

export default Navbar
