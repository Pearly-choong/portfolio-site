import React from 'react';
import '../../projectFolders/mealkit/MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio2 from '../../../images/homeAtomation.png';
import RHome from '../../../images/homeAutomation/RHome.jpg';
import AHome from '../../../images/homeAutomation/AHome.jpg';
import DHome from '../../../images/homeAutomation/DHome.jpg';
import DHome2 from '../../../images/homeAutomation/DHome2.jpg';
import { FaGithub, FaChrome, FaFilePdf } from 'react-icons/fa';

class SmartHome extends React.Component {


    render(){
          
          return(
          <div>
            <Navigation /> 
            <div className="text-center mt-5 py-3">
              <h1 className="page-title">Home Automation</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={portfolio2} alt="Images" className="m-auto d-block col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4 figure-img" />
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">UX Research | UI | Front-end Development</h5> 
                  <p>An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices that have functionality to show/hide UI components based on user interaction. Primary targeted on iphone 6/7/8 design.</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : UX/UI + HTML + SASS + Javascript + Jquery</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://github.com/Pearly-choong/zoneSmartHomeAutomation" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                  {/* <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p> */}
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://pearly-choong.github.io/zoneSmartHomeAutomation/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
              </div>
              </div>
                <div className="container text-left my-5">
                  <div data-aos="fade-up" data-aos-easing="linear">
                    <h4 className="pt-2 text-dark">Overview:  </h4>
                    <p>Zone Smart Home Automation is an application which allows user to control smart home devices in one place with a simple and elegant interface. </p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">My Role:  </h4>
                    <p>Involved in all web and app design stages from concept to final end implementation. UX Research, Ideation, Concept Creation, User Flow, Wireframes, Prototypes, UI design, Usability Testing, Coding.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Challenge:  </h4>
                    <p>An existing electronics company is planning to release a new service for homeowners. They have developed a range of smart home devices such as smart plugs, lights, cameras, alarms, doors etc. While they are intended in creating a new smart home automation control app package with their own brand. Current existing home automation provider, held back by outdated UX and complicated for users to learn and navigate.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Users & Audience:  </h4>
                    <p>The primary target users of the Zone Smart Home Automation app are young professionals working in the creative services industry. Ages between 25 and 34, home owner, exisiting user. These users have a strong preference for mobile-first.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Project Goal:  </h4>
                    <p>To create new ways for customers to engage with the brand to increase awareness and drive sales. Design an easy to navigate smart home automation app that accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere. </p>
                  </div>
                </div>
                <div className="info-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h4 className="pt-4 pl-3 text-dark">Design Process:  </h4>
                  <img src={RHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={AHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DHome2} alt="Images" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4" href="https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a>
                </div>
                <div className="my-3 text-center d-flex justify-content-center wrapper py-5">
                {/* <button className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded" onClick={this.portfolio}><span>View Other Projects</span></button>  */}
                <Link to="/Portfolio" className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded"><span>View Other Projects</span></Link> 
                </div>
            </div>  
            <hr className="break-line"></hr>
            <div className="text-center">
             <Footer/>
            </div>
          </div>
          
        )
    
    }
}


export default SmartHome;