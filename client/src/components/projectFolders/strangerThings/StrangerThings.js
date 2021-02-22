import React from 'react';
import '../../projectFolders/mealkit/MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio4 from '../../../images/MockupStrangerThings3.png';
import RStranger from '../../../images/strangerThings/RStranger.jpg';
import AStranger from '../../../images/strangerThings/AStranger.jpg';
import DStranger from '../../../images/strangerThings/DStranger.jpg';
import DStranger2 from '../../../images/strangerThings/DStranger2.jpg';
import { FaGithub, FaChrome, FaFilePdf } from 'react-icons/fa';

class StrangerThings extends React.Component {


    render(){
          
          return(
          <div>
            <Navigation /> 
            <div className="text-center mt-5 py-3">
              <h1 className="page-title">Stranger Things 3</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={portfolio4} alt="Images" className="m-auto d-block col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4 figure-img" />
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">UX Research | UI | Front-end Development</h5> 
                  <p>Assignment project from web course. I was tasked to create and design a one page adaptive and responsive website to promote existing TV shows.</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : UX/UI + HTML + CSS + Javascript</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://github.com/Pearly-choong/tvShowWebsite" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                  {/* <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p> */}
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://pearly-choong.github.io/tvShowWebsite/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
              </div>
              </div>
                <div className="container text-left my-5">
                  <div data-aos="fade-up" data-aos-easing="linear">
                    <h4 className="pt-2 text-dark">Overview:  </h4>
                    <p>This is a website to promote Stranger Things Season 3 TV series. The website provided a trailer, character poster image, synopsis of the plot story, countdown days and social media link. </p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">My Role:  </h4>
                    <p>Competitor Analysis Research, Identify Target Audience, Design, Coding.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Challenge:  </h4>
                    <p>Stranger Things is one of the most popular streaming shows in the world. As a lot of fans will always want to know if there is a new season coming up and what would be the continuing story. I was tasked to create a theme website to promote this TV series, to inform potential visitors that a new season is coming.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Users & Audience:  </h4>
                    <p>The audience of this website aimed at people between ages 15 and 29 and had watched every episode of Netflix show “Stranger Things” season one and two.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Project Goal:  </h4>
                    <p>To have an attractive user experience that immerses the audience in the world of suspense and science fiction.</p>
                  </div>
                </div>
                <div className="info-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h4 className="pt-4 pl-3 text-dark">Design Process:  </h4>
                  <img src={RStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={AStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DStranger2} alt="Images" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4" href="https://drive.google.com/file/d/1GVMp1wWzOyT2Cygu6uHlNAeoCADueBuD/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a>
                </div>
                <div className="my-3 text-center d-flex justify-content-center wrapper py-5">
                {/* <button className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded" onClick={this.portfolio}><span>View Other Projects</span></button>  */}
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


export default StrangerThings;