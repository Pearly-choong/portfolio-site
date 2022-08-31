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
import { FaGithub, FaChrome} from 'react-icons/fa';

class StrangerThings extends React.Component {


    render(){
          
          return(
          <div>
            <Navigation /> 
              
            <div className="portfolio-content container">
            <img src={portfolio4} alt="Images" className="container-fluid img-fluid mx-auto d-block pb-4 figure-img" />
            <div className="text-left mt-3 py-3">
              <h1 className="page-title">Stranger Things 3</h1>
              <p>
              This is a website to promote Stranger Things Season 3 TV series. The website provided a trailer, character poster image, synopsis of the plot story, countdown days, and social media link. 
              An assignment project from web course. I was tasked to create and design a one-page adaptive and responsive website to promote existing TV shows.
              </p>        
                
            </div> 

            <hr className="break-line pb-5"></hr>

            <div className="row m-auto">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Project Timeline: </strong><br></br> 2 weeks </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>My Role: </strong><br></br> UI/UX Design, Front-end Development</p> 
              </div>
            </div>
              <div className="row m-auto"> 
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Tools: </strong><br></br> Adobe Illustrator, HTML5, CSS3</p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Deliverable: </strong><br></br> Responsive Website</p>
              </div>     
            </div>

            <hr className="break-line mt-5 pt-5"></hr>

              <div className="container text-left my-5">
                  <h2 className="pb-3">Overview</h2>
                    <p>Stranger Things is one of the most popular streaming shows in the world. A lot of fans will always want to know if there is a new season coming up and what would be the continuing story. I was tasked to create a theme website to promote this TV series, to inform potential visitors that a new season is coming.</p>
                 
                    <h2 className="pt-5 pb-3">Users and Audiences</h2>
                    <p>The audience of this website aimed at people between ages 15 and 29 and had watched every episode of Netflix show “Stranger Things” season one and two.</p>
               
                    <h2 className="pt-5 pb-3">Site Purpose</h2>
                    <ul className="ml-4">
                      <li>Promote upcoming TV shows by informing potential visitors about the new season. Show the release date for season 3 and count down the days to it.</li>
                      <li>Discover what's the plot about, watch the trailer, learn about the characters, and discover what is happening each season.</li>
                      <li>Provide visitors with the opportunity to connect and share their thoughts via the official social media links as well as a link to the official Netflix website.</li>
                    </ul>


                    <h2 className="pt-5 pb-3">Project Goal  </h2>
                    <p>To have an attractive user experience that immerses the audience in the world of suspense and science fiction.</p>
                 
               
                
                <h2 className="pt-5 pb-3">Research and Development  </h2>
                  <img src={RStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={AStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DStranger} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DStranger2} alt="Images" className="w-100 m-auto d-block" />
              
                <div className="my-3 d-flex flex-column my-links">
                  {/* <a className="py-2" href="https://drive.google.com/file/d/1GVMp1wWzOyT2Cygu6uHlNAeoCADueBuD/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a> */}
                  <a className="py-2" href="https://github.com/Pearly-choong/tvShowWebsite" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                  <a className="py-2" href="https://pearly-choong.github.io/tvShowWebsite/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
                
                
              <div className="my-5 text-center d-flex flex-wrap justify-content-between  pt-5">
                <Link to="/Portfolio" className="bottom-nav mx-2"><span>ALL</span></Link> 
                <Link to="/Portfolio-AngusRobertson-Project" className="bottom-nav mx-2"><span>NEXT: ANGUS & ROBERTSON ➜</span></Link>         
              </div>

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