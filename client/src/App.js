import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo2.svg';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { Navbar} from 'react-bootstrap';

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
      <Footer/>
      </div> 
    )

    ReactDOM.render(homeSection, document.getElementById('root'));
  }
    render(){
      return(
        <div className="App">
              {/* <header className="App-header">      
                <img src={logo} className="App-logo" alt="logo" /> 
                <button className="btn mt-5 animated-arrow" onClick={this.home}>  <svg width="277" height="62">
               <defs>
                <linearGradient id="grad1">
               <stop offset="0%" stop-color="#FF8282"/>
               <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
               </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg><span>Who Am I?</span></button>  
                        
             </header>  */}
            
                  {/* <Navbar.Brand onClick={this.home}><img src={logo} className="App-logo" alt="logo"/></Navbar.Brand>  */}
         <Navigation/>
         <Home/>
         <Footer/>  
        </div>
       
      )
    }
  }
  export default App;