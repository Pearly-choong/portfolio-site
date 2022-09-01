import React from 'react';
//import ReactDOM from 'react-dom';
import './MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio1 from '../../../images/MockupMealKit2.png';
import RMealKit from '../../../images/mealkit/RMealKit.jpg';
import AMealKit from '../../../images/mealkit/AMealKit.jpg';
import DMealKit from '../../../images/mealkit/DMealKit.jpg';
import DMealKit2 from '../../../images/mealkit/DMealKit2.jpg';
import PrototypeMockup from '../../../images/mealkit/PrototypeMockup.png'
import {FaFilePdf } from 'react-icons/fa';

class MealKit extends React.Component {
    

    render(){
          
          return(
          <div>
            <Navigation /> 
             
            <div className="portfolio-content container">
              <img src={portfolio1} alt="Images" className="container-fluid img-fluid mx-auto d-block pb-4 figure-img" />
              <div className="text-left mt-3 py-3">
                  <h1 className="page-title">Meal Kit Delivery Service</h1>
                  <p>
                  A custom WordPress theme website was designed and developed for a Meal Kits delivery services that allow visitors to be able to access information relating to the services provided. 
                  </p>                     
              </div> 
              
               <hr className="break-line pb-5"></hr>

              <div className="row m-auto">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Project Timeline: </strong><br></br> 4 weeks</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>My Role: </strong><br></br> Research, UX/UI Design, Wireframes, Prototyping, Web Development</p> 
                 </div>
                </div>
                <div className="row m-auto"> 
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Tools: </strong><br></br>Figma, WordPress, PHP, WooCommerce, Bootstrap</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Deliverable: </strong><br></br> Prototypes, CMS Website, User & Technical Documentation</p>
                 </div>     
              </div>

              <hr className="break-line mt-5 pt-5"></hr>


                <div className="container text-left my-5 pb-5">
                  
                    <h3 className="pb-3">Getting stuck in a food rut? Lack of time to shop for groceries?  </h3>
                    <p>M-kit is a company who offer one of the most convenient ways meal kit delivery services that can keep customer eating healthy and time saving while having a busy
                       lifestyle but still want to do home-made meals. This is a WordPress CMS website that is built with a custom theme with a mix of third-party functionality that allows users to explore meal kit delivery services, choose their meal plan, read blog post stories, and find healthy recipes, submit contact and make orders.  </p>
                                 
                    <h3 className="pt-5 pb-3">Problem and Solution  </h3>
                    <p>There is no website for M-Kit's business. Until now, M-Kit has relied on word-of-mouth advertising to engage with new customers, but now they aim to expand the company and grow their customer base online.</p>
                    <p>M-Kit wants to create a website for their Meal Kit delivery service. Websites can feature information about the services offered, showcase menus, and provide blogs.</p>    
                  
                    <h3 className="pt-5 pb-3">Project Goal </h3>
                    <p>I aimed to create a simple and intuitive interface so that content administrators can easily manage their content and help clients increase awareness of and drive sales with their brand.</p>
                              
               
                  <h3 className="pt-5">Research and Development  </h3>
                    <img src={RMealKit} alt="Images" className="w-100 m-auto d-block" />
                    <img src={AMealKit} alt="Images" className="w-100 m-auto d-block" />
                    <img src={DMealKit} alt="Images" className="w-100 m-auto d-block" />
                    <img src={DMealKit2} alt="Images" className="w-100 m-auto d-block" />
                
                 
                  <div className="my-5 d-flex flex-column my-links">
                  <a className="py-2" href='https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing' target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a>
                  {/* <a className="py-2" href='https://drive.google.com/file/d/1R2XA9iN_3udGZfL-eIs9g7khhb-bUgZb/view?usp=sharing' target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Testing Report</a> */}
                  {/* <a className="py-2" href="https://www.figma.com/proto/AZrKidxDFiBoX3uGPwZZyr/M-Kit-Website?node-id=2%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A2" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Prototype</a> */}
                  
                  </div> 

                  <div className="my-links text-center">
                    <a href="https://www.figma.com/proto/AZrKidxDFiBoX3uGPwZZyr/M-Kit-Website?node-id=2%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A2" target="_blank" rel="noopener noreferrer">
                      <img src={PrototypeMockup} alt="Images" className="w-100 m-auto d-block"/>
                      View Prototype
                    </a>
                    </div>
                </div>
                
               

                <div className="my-5 text-center d-flex flex-wrap justify-content-between  pt-5">            
                  <Link to="/Portfolio" className="bottom-nav mx-3"><span>ALL</span></Link> 
                  <Link to="/Portfolio-NicheMarketApp-Project" className="bottom-nav mx-3"><span>NEXT: NICHE MARKET APP ➜</span></Link>
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


export default MealKit;