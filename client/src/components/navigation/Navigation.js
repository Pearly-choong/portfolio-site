import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.scss';
import { Navbar, Nav} from 'react-bootstrap';
import Home from '../home/Home';
import About from '../about/About';
import Footer from '../footer/Footer';
import logoSignature from '../../logo.png';
import Portfolio from '../portfolio/Portfolio';
import PortfolioCard from '../portfolioCard/PortfolioCard';
import App from '../../App';

class Navigation extends React.Component{
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

    portfolio = ()=> {
        console.log('Portfolio');
        const portfolioSection = (
          <div> 
          <Navigation/>  
          <Portfolio/>
          <div className="text-center">
          <Footer/>
          </div>
          </div> 
        )
  
        ReactDOM.render(portfolioSection, document.getElementById('root'));
      }  

    about = ()=> {
        console.log('About');
        const aboutSection = (
          <div> 
          <Navigation/>  
          <About/>
          <Footer/>
          </div> 
        )
  
        ReactDOM.render(aboutSection, document.getElementById('root'));
      }  


      landing = ()=> {
        console.log('Landing');
        const landingSection = (
          <div> 
          <App/>  
          </div> 
        )
  
        ReactDOM.render(landingSection, document.getElementById('root'));
      }

    render(){
        return(
            <div className="pt-4 nav-bg-color">
                <Navbar collapseOnSelect expand="lg">  
                    <Navbar.Brand onClick={this.landing}><img src={logoSignature} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link onClick={this.home}>HOME</Nav.Link>
                            <Nav.Link onClick={this.work}>WORK</Nav.Link>
                            <Nav.Link onClick={this.home}>ABOUT</Nav.Link>
                            <Nav.Link onClick={this.home}>CONTACT</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className="pr-4" onClick={this.home}>ABOUT</Nav.Link>
                            <Nav.Link className="pr-4" onClick={this.portfolio}>PORTFOLIO</Nav.Link>
                            {/* <Nav.Link className="pr-4" onClick={this.about}>ABOUT</Nav.Link> */}
                            {/* <Nav.Link className="pr-4" onClick={this.contact}>CONTACT</Nav.Link> */}
                            <Nav.Link className="pr-4" href="https://drive.google.com/file/d/1Nnj7VsxdEBL6LoyRUj04jZrBBh_eqty4/view?usp=sharing" target="_blank">CV</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>              
                </Navbar> 
          </div>      
       
        )
    }
}


export default Navigation;