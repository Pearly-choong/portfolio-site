import React from 'react';
import './About.scss';
import profileImg from '../../images/profileImage.jpg';

class About extends React.Component {
    render(){
      const myProfile = {
        maxWidth: '50%',
        height: '200px',
        // borderRadius: '50%'
      }
          return(
            <div> 
               
              <hr></hr>
              <div className="container about-content pb-5">
                <section className="row mb-5 pb-5 mx-0">
                    <div className="col-sm-12 col-md-12 col-lg-1 col-lx-1"></div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-lx-4 my-profile-img"> 
                      <img className="my-5 img-thumbnail" style={myProfile} src={profileImg} alt="profile image"/>                
                      <ul className="my-contact mt-4 text-left">
                        <li><h3 className="font-weight-bold text-dark">Find Me</h3></li>
                        <li><a href="https://www.linkedin.com/in/pearly-choong/" target="_blank">LinkedIn</a></li>
                        <li><a href="mailto:choongpl@gmail.com? subject=subject text">Email</a></li>
                        <li><a href="https://github.com/Pearly-choong" target="_blank">Github</a></li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-lx-6">
                      <div className="pt-3">
                        <h1 className="page-title mt-5">About Me</h1>        
                      </div>  
                      {/* <p className="quotation-mark text-bold">"</p> */}
                      <h5 className="font-weight-bold">I have a passion for web design and web development. I enjoyed doing researching, planning, designing and web development.</h5>
                      {/* <p className="quotation-mark text-bold float-right">"</p> */}
                      <p> I like challenging, and building something that could help to solve problems and intuitively, creating user experiences that are seamless and impactful. 
                        I have learnt UX / UI design, front-end and back-end development at Yoobee Colleges. 
                        In my two years at Yoobee College, I’ve completed a great deal of assignment on web development, design trends 
                        and best practices, including Programming Languages, Frameworks and Library, Principles of user Experience Design 
                        and Web Application Design, where I learned and applied skills such as user journey mapping, application wireframing,
                        designing software along with coding for a variety of mobile devices and operating system. </p>
                        
                      {/* <a className="viewCV" href="https://drive.google.com/file/d/1WV3jGfSa8GRRXa6Z4-K0lExnd_oF8cTu/view?usp=sharing" target="_blank">View My CV</a>  */}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-1 col-lx-1"></div>
                </section>

                <section className="para mt-5 mx-3">
                  <h3 className="pb-1 text-dark font-weight-bold">What I can do</h3>                   
                        <i className="fas fa-user-edit pb-2 mt-4"></i>
                        <h5 className="card-title">UX research and user centered design</h5>
                        <p>Design everything that I know about users and their needs. I can plan and conduct user research and
                          competitor analysis, interpret data and qualitative feedback, create user stories, personas, 
                          and storyboards, and determine information architecture. I gained this experience from the projects that
                          I developed during my study. A series of UX research was conducted to identify the target audience
                          and used problem solving techniques to identify appropriate research methods for a user interface.</p>                                 
                        <i className="fas fa-palette pb-2 mt-4"></i>
                        <h5 className="card-title">UI Design</h5>
                        <p>I like to keep it simple, designing beautiful and functional user experiences. My goal is to focus on 
                          usability, content, typography and message that users want to send. I accomplished this skill during 
                          study projects, iterative design processes were carried out such as prototypes, usability testing, gathered, 
                          analysed feedback and determined the effectiveness of the developed UI. </p>            
                        <i className="fas fa-file-code pb-2 mt-4"></i>
                        <h5 className="card-title">Develop for client's need</h5>
                        <p>I can create websites to run across devices with different programming languages.
                          HTML5 and CSS3 are my most comfortable programming languages at this point, however I’m still
                          developing and upskill with other programming languages.</p>
                     
                </section>

                <section className="mt-5 para mx-3">
                  <h3 className="pt-5 pb-1 text-dark font-weight-bold">Outside of Work</h3>
                  {/* <div className="card px-4 mb-3 shadow p-3">
                      <div className="text-left pb-3"> */}
                          <p>In my spare time I enjoy travelling, relaxing, watching movies and reading. I collected more recipes than I could cook them myself.
                            I love to eat, always exploring all kinds of foods, also from different countries. I also like to watch some funny variety shows to relax from stress.
                            Enjoy family time and catch up with friends whenever possible. </p>
                      {/* </div>
                  </div> */}
                </section>


              </div>  
            </div>
        )
    
    }
}


export default About;
