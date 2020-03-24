import React,{Component} from 'react';
import '../App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from '../Components/Welcome'
import About from '../Components/About'
import CV from '../Components/CV'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'



class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
         
  //   }
  // }

  render() {
    return (
      <div>
        <Welcome/>
        <Router>        
          <Navbar/>
          <Route  path='/about' Component={About}/>
          <Route  path='/cv' Component={CV}/>
          <Route  path='/portfolio' Component={Portfolio}/>
          <Route  path='/contact' Component={Contact}/>
        </Router>
        
      </div>
    )
  }
}

export default App

