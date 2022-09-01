// *** NOT USING THIS COMPONENTS ***

import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo2.svg';
import './Landing.scss';
import Home from '../home/Home';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import AOS from 'aos';
import "aos/dist/aos.css";
//import { BrowserRouter as Router } from 'react-router-dom';
//import { Routes } from "../../views/Routes";

AOS.init({
  easing: 'ease-in-sine',
});

class Landing extends React.Component{
  home = ()=> {
    console.log('Home');
    const homeSection = (
      <div> 
      <Navigation/>  
      <Home/>
      {/* <Footer/> */}
      </div> 
    )

    ReactDOM.render(homeSection, document.getElementById('root'));



  }
    render(){
      const steps = [   
        'Hello  👋🏼 ', 2000,
        //'Hello, my name is Pearly 👩🏻', 2000,
        'Welcome to my portfolio !', 2000,
      ]

      return(
         <div className="Landing">
            {/* <Router> 
              <Routes /> */}
               <header className="Landing-header">   
                  {/* <img src={logo} className="App-logo" alt="logo" />  */}
                  <div className="container text-center pt-5">
                  <Typical wrapper="span" steps={steps} loop={Infinity} className={'intro-font'} />
                  </div>   
                  {/* <button className="btn mt-5 py-3 px-5 my-enter-btn project-link shadow-lg p-3 mb-5 rounded"><Link to="/Home"><span>Enter the site..</span></Link> </button> */}
                  {/* <button className="btn mt-5 py-3 px-5 my-enter-btn project-link shadow-lg p-3 mb-5 rounded" onClick={this.home}><span>Enter the site..</span> </button> */}
                  <Link to="/About" className="btn mt-5 py-3 px-5 my-enter-btn project-link shadow-lg p-3 mb-5 rounded"><span>Enter the site...</span></Link> 
                  {/* <button className="btn mt-5 pt-5 my-enter-btn project-link" onClick={this.home}><span><u>Enter the site..</u></span> </button>               */}
                </header> 
            {/* </Router> */}
        </div>
       
      )
    }
  }
  export default Landing;