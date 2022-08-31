import React from 'react';
import '../../projectFolders/mealkit/MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio3 from '../../../images/MockupTreatMe1.png';
import RTreatme from '../../../images/treatme/RTreatme.jpg';
import ATreatme from '../../../images/treatme/ATreatme.jpg';
import DTreatme from '../../../images/treatme/DTreatme.jpg';
import DTreatme2 from '../../../images/treatme/DTreatme2.jpg';
import { FaGithub, FaChrome } from 'react-icons/fa';


class TreatMe extends React.Component {


    render(){
          
          return(
          <div>
            <Navigation /> 
         
            <div className="portfolio-content container">
            <img data-aos="fade-right" data-aos-duration="500" src={portfolio3} alt="Images" className="container-fluid img-fluid mx-auto d-block pb-4 figure-img" />
              <div className="text-left mt-3 py-3">
                  <h1 className="page-title">Niche Market App</h1>
                  <p>
                     This project was a student group project where we were required to build an consumer-to-consumer nich market app. We decided to build a platform called Treatme for buying and selling baked goods online. The web interface of the project was created using an API. 
                  </p>                     
              </div> 
              
               <hr className="break-line pb-5"></hr>

              <div className="row m-auto">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Project Timeline: </strong><br></br> 4 weeks</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>My Role: </strong><br></br> UX Research, UI Design, Full Stack Web Development</p> 
                 </div>
                </div>
                <div className="row m-auto"> 
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Tools: </strong><br></br>Figma, Bootstrap SASS, JavaScript, MongoDB, Node.js</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Deliverable: </strong><br></br> Research Report, High-fidelity clickable prototype, Responsive Web App</p>
                 </div>     
              </div>

              <hr className="break-line mt-5 pt-5"></hr>



              {/* <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={portfolio3} alt="Images" className="m-auto d-block col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4 figure-img" />
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-5 pb-4" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">UX Research | UI | Full Stack Web Development</h5> 
                  <p>This project is to work as a team to build an application that uses an API to produce a web interface. A C2C platform that allows users to register/ log in to their account, to sell and buy baking goods online. Registered members able to update their profile, add new, update or delete their listing.</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : UX/UI + Bootstrap SASS, JavaScript, JQuery, Node.js</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="https://github.com/Pearly-choong/summative3" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href="http://167.172.140.162/summative3/frontEnd/" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>Live Site</a>
                </div>
              </div>
              </div> */}
                <div className="container text-left my-5">
                  
                    <h2 className="pt-2">Project Overview  </h2>
                    <p>Treatme app is a C2C (Consumer to consumer) platform that matches buyers with sellers, the type of e-commerce is made up of online classified or forums where individuals can buy and sell their baked goods. 
                       Registered members able to update their profile, add new listing, update or delete their listing within the platform.
                    </p>
                  
                    <h2 className="pt-5 pb-3">Problem and Solution </h2>
                    <p>There’s no online consumer-to-comsumer platform for selling/buying baked goods in the current market. A lot of home bakers would like to do the startup but do not have enough funds. 
                       Treatme would like to create a consumer-to-consumer niche market app to fill the market space for these home bakers to sell and buy baked goods online. The platform should allow the buyer to post a product with its associated details, while buyers should be able to view, leave comments and ask questions about the products.</p>
                 
                    <h2 className="pt-5 pb-3">Target Users  </h2>
                    <p>The primary target users are self-employed or unemployed home baker that interested in buying/selling baked goods and wanting to make some small income. 70% identified as female and 30% identified as male. </p>
                    <p>While the secondary target audience is full-time employment that also is home baker, would dream to be a master chief however does not like the lifestyle that comes with it so prefers to do it low key and in their own time without added pressure.</p>
                
                    <h2 className="pt-5 pb-3">Designer Note  </h2>
                    <p>Despite being an academic project, we were working within a context where we could simulate the pressures, constraints, and business goals of working in a real industry.</p>
                 
                
                <h2 className="pt-5">Research and Development  </h2>
                  <img src={RTreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={ATreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DTreatme} alt="Images" className="w-100 m-auto d-block" />
                  <img src={DTreatme2} alt="Images" className="w-100 m-auto d-block" />
               
                <div className="my-3 d-flex flex-column my-links">
                  <a className="py-2" href="https://www.figma.com/proto/prLyTgW5E2gwcL5yxx5weD/treatme?node-id=1039%3A532&scaling=scale-down" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaChrome/></span>View Prototypes</a>
                  {/* <a className="py-2" href="https://drive.google.com/file/d/1G9XTh4H8Yzb7hJ5tbXQKjOR7fGPyytka/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Full Documentation</a> */}
                  <a className="py-2" href="https://github.com/Pearly-choong/summative3" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaGithub/></span>Code in Github</a>
                </div>

                <div className="container pt-5">
                  <h2 className="pt-5 pb-3 text-dark">Highlights and Takeaways</h2>
                  <p><strong>Daily stand-up meeting and regular group updates.</strong> By having the meeting, it allow us to improve communications, identify, highlight and promote quick decision-making for our project. </p> 
                  <p><strong>Collaboration and being supportive of the other team member.</strong> Effective teamwork with good communication among the team members is important. As a group, we set out our end goal and tried to focus to complete together. 
                      It was also our first time working on a group project online, and I had a good experience. Mistakes that were made during the task were also learned so that things can be improved next time. I think a team is only strong when everyone works together and helps each other. </p>
                  <p><strong>Technical and coding skill. </strong>This project taught me the basic full stack web development about back end setup with Node.js (GET and POST methods), retrieved data from MongoDB and displayed, used Grunt for task runner that helps validates, sass compiler during code development. 
                    As well as collaborating on Github by using branches and merching. </p>
                </div>

              </div>

              <div className="my-5 text-center d-flex flex-wrap justify-content-between  pt-5">            
                  <Link to="/Portfolio" className="bottom-nav mx-3"><span>ALL</span></Link> 
                  <Link to="/Portfolio-StrangerThings3-Project" className="bottom-nav mx-3"><span>NEXT: STRANGER THINGS 3 ➜</span></Link>
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


export default TreatMe;