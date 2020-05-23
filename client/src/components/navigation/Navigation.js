import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';
import { Navbar, Nav} from 'react-bootstrap';
import Home from '../home/Home';
import Work from '../work/Work';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import logoSignature from '../../logo.png';

class Navigation extends React.Component{
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

    work = ()=> {
        console.log('Work');
        const workSection = (
          <div> 
          <Navigation/>  
          <Work/>
          <Footer/>
          </div> 
        )
  
        ReactDOM.render(workSection, document.getElementById('root'));
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

      contact = ()=> {
        console.log('Contact');
        const contactSection = (
          <div> 
          <Navigation/>  
          <Contact/>
          <Footer/>
          </div> 
        )
  
        ReactDOM.render(contactSection, document.getElementById('root'));
      }  

    render(){
        return(
            <div className="pt-5">
                <Navbar inverse collapseOnSelect expand="lg">  
                    <Navbar.Brand onClick={this.home}><img src={logoSignature} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link onClick={this.home}>HOME</Nav.Link>
                            <Nav.Link onClick={this.work}>WORK</Nav.Link>
                            <Nav.Link onClick={this.home}>ABOUT</Nav.Link>
                            <Nav.Link onClick={this.home}>CONTACT</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className="pr-4 text-dark" onClick={this.home}>HOME</Nav.Link>
                            <Nav.Link className="pr-4 text-dark" onClick={this.work}>WORK</Nav.Link>
                            <Nav.Link className="pr-4 text-dark" onClick={this.about}>ABOUT</Nav.Link>
                            <Nav.Link className="pr-4 text-dark" onClick={this.contact}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>              
                </Navbar> 
          </div>      
       
        )
    }
}


export default Navigation;