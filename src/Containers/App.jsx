import React,{Component} from 'react';
import '../App.css'
import {BrowserRouter , Route} from 'react-router-dom'
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
        <Navbar/>
      </div>
    )
  }
}

export default App

