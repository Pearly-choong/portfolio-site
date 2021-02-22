import React from 'react';
import '../../projectFolders/mealkit/MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio3 from '../../../images/treatme mockup2.png';
import RTreatme from '../../../images/treatme/RTreatme.jpg';
import ATreatme from '../../../images/treatme/ATreatme.jpg';
import DTreatme from '../../../images/treatme/DTreatme.jpg';
import DTreatme2 from '../../../images/treatme/DTreatme2.jpg';



class TreatMe extends React.Component {


    render(){
          
          return(
          <div>
            <Navigation /> 
            <div className="text-center mt-5 py-3">
              <h1 className="page-title">Niche Market App</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={portfolio3} alt="Images" className="m-auto d-block col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" />
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">UX Research | UI | Full Stack Web Development</h5> 
                  <p>This project is to work as a team to build an application that use an API to produce a web interface. A C2C platform that allows users to register / login their account, to sell and buy baking goods through online. Registered member able to update thier profile, add new, update or delete their listing.</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : UX/UI + Bootstrap SASS, Javascript, JQuery, Node.js</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://github.com/Pearly-choong/summative3" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-github pr-2"></i></span>Code in Github</a>
                  {/* <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p> */}
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="http://167.172.140.162/summative3/frontEnd/" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-chrome pr-2"></i></span>Live Site</a>
                </div>
              </div>
              </div>
                <div className="container text-left my-5">
                  <div data-aos="fade-up" data-aos-easing="linear">
                    <h4 className="pt-2 text-dark">Overview:  </h4>
                    <p>Treat Me app is a C2C (Consumer to consumer) platformas match buyers with sellers, the type of e-commerce is made up of online classified or forums where individuals can buy and sell their baked goods. </p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">My Role:  </h4>
                    <p>UX Research, Identify Target Audience, Usability Testing, Wireframing and creating prototypes for Mobile Version, Coding.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">The Problem:  </h4>
                    <p>There’s no online C2C platform for selling/buying baked goods in the current market. A lot of home bakers would like to do the startup but do not have enough funds. Our client would like to create a C2C market space for these users to sell their baked goods and buy online. The platform should allow the buyer to post a product with its associated details, while buyers should be able to view, leave comments and ask questions about the products.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Users & Audience:  </h4>
                    <p>The primary target users of the Treat Me app are self-employed/unemployed home baker that interested in buying/selling cakes or donuts and wanting to make some small income, 70% female: 30% male; While the secondary target audience is full-time employment that also is home baker, would dream to be a master chief however does not like the lifestyle that comes with it so prefers to do it low key and in their own time without added pressure.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Project Goal:  </h4>
                    <p>The aim of this project was to allow home bakers to list their baked goods online and sell them.  Our objective was to design and create an intuitive and easy-to-use platform that allows sellers to sell their baking through images and description, and buyers to navigate through.</p>
                  </div>
                </div>
                <div className="info-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h4 className="pt-4 pl-3 text-dark">Design Process:  </h4>
                  <img src={RTreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={ATreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DTreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DTreatme2} alt="Images" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4" href="https://drive.google.com/file/d/1G9XTh4H8Yzb7hJ5tbXQKjOR7fGPyytka/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span><i className="far fa-file-pdf pr-2"></i></span>Read Full Documentation</a>
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


export default TreatMe;