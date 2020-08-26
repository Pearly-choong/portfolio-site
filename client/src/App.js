import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo2.svg';
import './App.scss';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Typical from 'react-typical';


class App extends React.Component{
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
        'Hello, my name is Pearly 👩🏻 ', 1500,
        'Welcome to my Portfolio!', 1500
      ]

      return(
         <div className="App">
               <header className="App-header">   
                  <img src={logo} className="App-logo" alt="logo" /> 
                  <div className="container text-center pt-5">
                  <Typical wrapper="span" steps={steps} loop={1} className={'intro-font'} />
                  </div>   
                  <button className="btn mt-5 pt-5 my-enter-btn" onClick={this.home}><span><u>Enter the site..</u></span> </button>       
                </header> 
        </div>
       
      )
    }
  }
  export default App;