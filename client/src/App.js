import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo2.svg';
import './App.scss';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { Navbar} from 'react-bootstrap';
import Typical from 'react-typical';

// import Nav from './components/nav/Nav';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
        // 'I am a Web Designer 👩🏻‍🎨 ', 1500,
        // 'and a Web Developer. 👩🏻‍💻', 1500,
        // 'based in Wellington, New Zealand. 🇳🇿', 1500
        // 'Click  enter the site.', 2000
        // 'Hello, my name is Pearly. Web Designer and Developer based in Wellington, New Zealand.', 2000
      ]

      return(
         <div className="App">
               <header className="App-header">   
                  <img src={logo} className="App-logo" alt="logo" /> 
                  <div className="container text-center pt-5">
                  <Typical wrapper="span" steps={steps} loop={1} className={'intro__titleFont'} />
                  </div>   
                  <button className="btn mt-5 pt-5 my-enter-btn" onClick={this.home}><span><u>Enter the site..</u></span> </button>       
                </header> 
               
                  {/* <Navbar.Brand onClick={this.home}><img src={logo} className="App-logo" alt="logo"/></Navbar.Brand>  */}
         {/* <Navigation/>
         <Home/>
         <Footer/>   */}
        </div>
       
      )
    }
  }
  export default App;