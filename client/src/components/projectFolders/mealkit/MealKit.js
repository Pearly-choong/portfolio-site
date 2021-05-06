import React from 'react';
//import ReactDOM from 'react-dom';
import './MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio1 from '../../../images/MockupMealKit.png';
import RMealKit from '../../../images/mealkit/RMealKit.jpg';
import AMealKit from '../../../images/mealkit/AMealKit.jpg';
import DMealKit from '../../../images/mealkit/DMealKit.jpg';
import DMealKit2 from '../../../images/mealkit/DMealKit2.jpg';
import { FaGithub, FaChrome, FaFilePdf } from 'react-icons/fa';

class MealKit extends React.Component {
    

    render(){
          
          return(
          <div>
            <Navigation /> 
            <div className="text-center mt-5 py-3">
              <h1 className="page-title">Meal Kit Delivery Service</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={portfolio1} alt="Images" className="m-auto d-block col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4 figure-img" />
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4 project-desc" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">UX Research | UI | Web Development | CMS</h5> 
                  <p>A custom WordPress theme website was designed and developed for Meal Kits delivery services that allow visitors to be able to access information relating to the services provided. They also intend to showcase examples of their meal kit menu, telling stories of their services to give potential customers a more intimate view of the business and their relationship with clients.</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : UX/UI + WordPress + PHP + WooCommerce + Bootstrap</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://github.com/Pearly-choong/mealkit-service-wp-theme" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                  {/* <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p> */}
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="http://68.183.98.69/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
              </div>
              </div>
                <div className="container text-left my-5">
                  <div data-aos="fade-up" data-aos-easing="linear">
                    <h4 className="pt-2 text-dark">Overview:  </h4>
                    <p>This is a WordPress CMS website that is built with a custom theme with a mix of third-party functionality that allows users to explore meal kit delivery services, choose their meal plan, read blog post stories, and find healthy recipes, submit contact and make orders. While also allowing clients to customize the theme easily. </p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">My Role:  </h4>
                    <p>UX Research, Ideation, Concept Creation, User Flow, Sketches, Wireframes, Usability Testing, Website Design, Coding, Acceptance Testing, Broswer Testing, Writing User Documentation.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Challenge:  </h4>
                    <p>Until now M-Kit has relied on positive word-of-mouth to engage with new customers, but now they would like to expand the company and grow their customer base by creating an effective online presence.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Users & Audience:  </h4>
                    <p>The target users of the M-Kit delivery service website are a professional busy working group people or couples/family. These users love exploring new recipes, want to save time on preparing food, and don’t like to spend time shopping for groceries.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Project Goal:  </h4>
                    <p>To develop a simple and intuitive interface for content administrators to easily manage their content and help clients get their customers to engage with their brand to increase awareness and drive sales.</p>
                  </div>
                </div>
                <div className="info-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h4 className="pt-4 pl-3 text-dark">Design Process:  </h4>
                  <img src={RMealKit} alt="Images" className="w-100 m-auto d-block" />
                  <img src={AMealKit} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DMealKit} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DMealKit2} alt="Images" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 ml-5 d-flex flex-column my-links">
                  <a className="py-2" href='https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing' target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a>
                  <a className="py-2" href='https://drive.google.com/file/d/1R2XA9iN_3udGZfL-eIs9g7khhb-bUgZb/view?usp=sharing' target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Testing Report</a>
                  <a className="py-2" href="http://68.183.98.69/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
                {/* <div className="my-3 text-center d-flex justify-content-center wrapper pt-5">
                <a className="btn-link py-2 px-5 project-link project-link-fs shadow p-3 mb-5 rounded extra-padding" href="http://68.183.98.69/" target="_blank" rel="noopener noreferrer"><span>Visit Site</span></a>
                </div> */}
                <div className="my-3 text-center d-flex justify-content-center wrapper py-5">
                <Link to="/Portfolio" className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded"><span>View Other Projects</span></Link> 
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