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
            <div className="portfolio-content container">

              <img src={portfolio2} alt="Images" className="img-fluid mx-auto d-block pb-4 figure-img" />
              {/* <Portfolio/> */}
              <div className="text-left mt-3 py-3">
                <h1 className="page-title">Home Automation</h1>
                <p>
                  An application I designed for a student project, that allows user to control smart home devices in one place with a simple and elegant interface. 
                  Primary targeted on Iphone 6/7/8 design.
                </p>        
                  
              </div> 

              <hr className="break-line pb-5"></hr>

              <div className="row m-auto">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Project Timeline: </strong><br></br> 3 weeks</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>My Role: </strong><br></br> Research, UX/UI Design, Concept Creation, User Flow, Wireframes, Prototyping, User Testing, Front-end Development</p> 
                 </div>
                </div>
                <div className="row m-auto"> 
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Tools: </strong><br></br> InVision, Adobe Illustrator, HTML5, SASS, JavaScript, Jquery</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Deliverable: </strong><br></br> Prototypes, Responsive Web App, Research Report</p>
                 </div>     
              </div>

              <hr className="break-line mt-5 pt-5"></hr>
              
                <div className="text-left">
                  
                    <h2 className="pb-3 text-dark">Overview</h2>
                    <p>
                    An existing electronics company is planning to release a new service for homeowners. They have developed a range of smart home devices such as smart plugs, lights, cameras, alarms, doors, etc. 
                    While they are intended in creating a new smart home automation control app package with their own brand. Current existing home automation provider, held back by outdated UX and complicated for users to learn and navigate. 
                    </p>
                    <p>In this project, I researched the client background, and some of the current app that offered a similar service/functionality. Analysed the strengths and weaknesses of existing apps. 
                       I had also conducted a range of user research methods to identify our users' needs, behaviors, and motivations, as well as the problem and possible solutions.
                    </p>
                    
                    <h2 className="pt-5 pb-3">Project Goals</h2>
                    <h5>User Goals</h5>
                    <ul className="pl-5">
                      <li>Able to see a series of connected devices in their home and will be able to
                          monitor and control devices in their home and awareness of its health and security with minimal human interaction.</li>
                      <li>Able to add new smart devices to their smart home app interface.</li>
                    </ul>
                    <h5>Business Goals</h5>
                    <ul className="pl-5">
                      <li>To create new ways for customers to engage with the brand to increase awareness and drive sales. </li>
                      <li>A web app and accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere.</li>
                    </ul>
                                          
                    <h2 className="pt-5 pb-3">Project Challenge</h2>
                    <p>This is an individual project to develop a web app from conception to final end implementation in a short timeframe. This includes all phases of the design thinking process and development.</p>               
                </div>
                
                  <h2 className="pt-5 pb-3">Research </h2>
                  <p>In this project, I conducted four types of research which including survey, interviews, competitor analysis and card sort. 
                     User research methods allow us to find similarities between our target audience and recognize their needs. 
                     It is research that prevents us from designing for ourselves. 
                    </p>
                  <p className="font-weight-bold">Research Goal: </p> 
                  <ul className="pl-4">
                    <li>To understand the demographic of users who currently use and don’t use smart home devices.</li>
                    <li>To understand how different types of users control their smart home devices and which one is the most important for them.</li>
                    <li>To analyze the competitors and get familiar with the existing Home Automation interface products, their pros and cons, and user’s reviews.</li>
                  </ul> 

                <div className="info-container">
              
                  <img src={RHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={AHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DHome} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DHome2} alt="Images" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 d-flex flex-column my-links">
                  <a className="py-2" href="https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a>
                  <a className="py-2" href="https://pearly-choong.github.io/zoneSmartHomeAutomation/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                  <a className="py-2" href="https://github.com/Pearly-choong/zoneSmartHomeAutomation" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                </div>
                
                <div className="container pt-5">
                  <h2 className="pt-5 pb-3 text-dark">Highlights and Takeaways</h2>
                  <p><strong>1) Focus on the mvp (minimum viable product).</strong> With a tight deadline and a need to be conservative with design changes, I decided to focus on designed and developed the top features that users would want use. </p> 
                  <p><strong>2) User Testing.</strong> I had a 3 rounds of user testing to validate those feature functionality and UI improvements. From initial wireframe, 2nd iteration wireframes and hi-fidelity wireframes. I also conducted the final usability testing on the completed web application to make sure that user managed to navigate the app easily and without confusing.</p>
                  <p>As a final thoughts, the time limit made the development process more intense than the traditional waterfall process, but the end result was definitely worth it. Focusing on the most important issue and solving the essential problems simultaneously is one of the most efficient ways to design and iterate a product.</p>
                </div>
             

                <div className="my-5 text-center d-flex flex-wrap justify-content-between pt-5">            
                  <Link to="/Portfolio" className="bottom-nav mx-3"><span>ALL</span></Link> 
                  <Link to="/Portfolio-MealKit-Project" className="bottom-nav mx-3"><span>NEXT: MEAL KIT DELIVERY ➜</span></Link>                  
                </div>

            </div>

            <hr className="break-line"></hr>
            <div className="text-center px-5">
             <Footer/>
            </div>
          </div>
          
        )
    
    }
}


export default SmartHome;