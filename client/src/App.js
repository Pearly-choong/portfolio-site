import React from 'react';
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./views/Routes";


AOS.init({
  easing: 'ease-in-sine',
  disable: 'mobile',
});

class App extends React.Component{

    render(){

      return(
         <div className="App"> 
         
         <Router>
           <Routes/>
          </Router>   
        </div>
       
      )
    }
  }
  export default App;