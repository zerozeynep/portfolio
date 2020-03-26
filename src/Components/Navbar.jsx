import React, { Component } from 'react';
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import About from './About'
import { MDBTypography, MDBIcon, MDBCol, MDBContainer,MDBNavbar,MDBNavLink,MDBNavbarToggler,MDBNavItem,MDBNavbarNav,MDBCollapse} from 'mdbreact';
import Portfolio from './Portfolio';
import CV from './CV'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  useClassNames: false,
  initClassName: false
});


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
      <MDBCol id='nav-card' className={`col-md-10 ${this.state.isDark ? 'dark-nav-card':''}`}>
        <div className='row pb-5'>
        <div className='row col-xl-8 m-lg-5 m-3' id='header-box'>
          <MDBTypography tag="h1" variant="display-4">Zeynep Gizem Demirtaş </MDBTypography>
          <MDBIcon id='toggle-theme' icon="adjust" onClick={this.toggleTheme} />
        </div>
        <div className='navbar col-xl-8 ml-lg-5'>
        <Router>
       <MDBNavbar expand="sm">
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
              <MDBNavLink  to='/portfolio' >Portfolio</MDBNavLink>
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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </Router>
        </div>
        {/* <svg id='svg-card' xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
          <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
        </svg> */}
        {/* <img id='svg-card' src={fractal}></img> */}

        </div>
      </MDBCol>
      </MDBContainer>
      </>
    )
  }
}

export default Navbar
