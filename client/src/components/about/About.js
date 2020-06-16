import React from 'react';
import './About.scss';
import profileImg from '../../images/profileImage.jpg';

class About extends React.Component {
    render(){
      const myProfile = {
        width: '35%',
        height: '220px',
        // borderRadius: '50%'
      }
          return(
            <div> 
               
              <hr></hr>
              <div className="container about-content pb-5">
                <section className="container row mb-5 pb-5 mx-0">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-lx-6 text-center">
                      <img className="mt-5 img-thumbnail" style={myProfile} src={profileImg} alt="profile image"/>
                      
                      <ul className="my-contact mt-4">
                        <li><h4 className="font-weight-bold text-dark">Find Me</h4></li>
                        <li><a href="https://www.linkedin.com/in/pearly-choong/" target="_blank">LinkedIn</a></li>
                        <li><a href="mailto:choongpl@gmail.com? subject=subject text" target="_blank">Email</a></li>
                        <li><a href="https://github.com/Pearly-choong" target="_blank">Github</a></li>
                      </ul>
                   
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-lx-6">
                      <div className="text-center mb-3 py-3">
                        <h1 className="page-title mt-5">About Me</h1>        
                      </div>  
                      {/* <p className="quotation-mark text-bold">"</p> */}
                      <p>Hi, my name is Pearly.  I have a passion for web design and web development, creating user experiences that are 
                        seamless and impactful. I have learnt UX / UI design, front-end and back-end development at Yoobee Colleges. 
                        In my two years at Yoobee College, I’ve completed a great deal of assignment on web development, design trends 
                        and best practices, including Programming Languages, Frameworks and Library, Principles of user Experience Design 
                        and Mobile Application Design, where I learned and applied skills such as user journey mapping, application wireframing,
                        designing software along with coding for a variety of mobile devices and operating system. </p>
                        {/* <p className="quotation-mark text-bold float-right">"</p> */}
                      {/* <a className="viewCV" href="https://drive.google.com/file/d/1WV3jGfSa8GRRXa6Z4-K0lExnd_oF8cTu/view?usp=sharing" target="_blank">View My CV</a>  */}
                    </div>
                </section>

                <section className="mx-5 para mt-5">
                  <h4 className="pb-3">What I can do</h4>
                  <div className="row mx-0">
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mr-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                          <i className="fas fa-user-edit pb-2"></i>
                          <h5 className="card-title">UX research and user centered design</h5>
                          <p>Design everything that I know about users and their needs. I can plan and conduct user research and
                            competitor analysis, interpret data and qualitative feedback, create user stories, personas, 
                            and storyboards, determine information architecture. I gained this experience from the projects that
                             I developed during my study. A series of UX research were conducted to identify target audience
                             and used problem solving techniques to identify appropriate research methods for a user interface.</p>                 
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mr-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                          <i className="fas fa-palette pb-2"></i>
                          <h5 className="card-title">UI Design</h5>
                          <p>I like to keep it simple, designing beautiful and functional user experiences. My goal is to focus on 
                            usability, content, typography and message that user want to send. I accomplishments this skill during 
                            study projects, iterative design process were carried out such as prototypes, usability testing, gathered, 
                            analysed feedback and determined the effectiveness of the developed UI. </p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mr-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                        <i className="fas fa-file-code pb-2"></i>
                        <h5 className="card-title">Develop for client's need</h5>
                          <p>I can create websites to run across devices with different programming languages.
                            HTML5 and CSS are my strongest programming languages at this point, however I’m still keep 
                            developing and upskill with others programming languages.</p>
                        </div>
                    </div>                   
                  </div>
                  <br></br>
                  <h4 className="py-3">How I do my work</h4>
                  <div className="row mx-0">
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                          <i className="fas fa-hand-holding-heart pb-2"></i>
                          <h5 className="card-title">Detailed-oriented, sense of responsibility and committed person.</h5>
                          <p>I like to be helpful to others in any way possible. All the projects that I have been working through, 
                            I always put my 100% effort, care for each detail part and also try to achieve the goal within timeframes.</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                          <i className="fas fa-users pb-2"></i>
                          <h5 className="card-title">Enjoy working with others and sharing ideas, meeting new people</h5>
                          <p>Enjoy working with others and sharing ideas.  Work well with others to complete task and meet goals, experience 
                            from school team project. I would like to build strong relationships with everyone on the team like product manager,
                            developer, designer and others. Concept communication between myself and others, make sure we are on the same page, 
                            everyone can discuss the design, everyone works together. </p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-2 mb-3 shadow p-3" style={{width: '18rem'}}>
                      <div className="card-body text-left pb-3">
                        <i className="fas fa-shapes pb-2"></i>
                        <h5 className="card-title">Flexible and comfortable in adapting new skills.</h5>
                          <p>I enjoy learning new things and can assimilate new ideas quickly. Our school has been teaching us a lot of programming 
                            languages/frameworks/libraries like Nodejs, React, PHP, WordPress and all different tools during each module. I have 
                            developed numerous website and responsive web apps with different levels and different kinds of programming languages.</p>
                        </div>
                    </div>                   
                  </div>
                </section>

                <section className="mx-5 mt-5 pt-5">
                  <h4 className="pb-4">When I'm not working</h4>
                  <div className="card px-4 mb-3 shadow p-3">
                      <div className="text-left pb-3">
                          <p>In my spare time I enjoy travelling, relaxing, watching movies and reading. I collected more recipes than I could cook them myself.
                            I love to eat, always exploring all kinds of foods, also from different countries.</p>
                      </div>
                  </div>
                </section>

                {/* <section className="container">
                  <h4 className="text-center mt-3 pb-4">Skills and tools I use</h4>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-lx-6 text-center">
                      <h5 className="text-bold">Designer</h5>
                      <ul className="pb-3">
                        <li>UX Design</li>
                        <li>UI Design</li>
                        <li>Research</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>InVision</li>
                        <li>UXPin</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                      </ul>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-lx-6 text-center">
                      <h5 className="text-bold">Coder</h5>
                      <ul>
                        <li>HTML 5</li>
                        <li>CSS3 / SASS</li>
                        <li>Bootstrap</li>
                        <li>Javascript / Jquery</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Grunt / Npm</li>
                        <li>Php</li>
                        <li>MySql</li>
                        <li>Wordpress</li>
                        <li>Git / Github</li>
                        <li>Atom / Visual Studio Code</li>
                      </ul>
                    </div>
                  </div>
                </section> */}

              </div>  
            </div>
        )
    
    }
}


export default About;



{/* <section className="row para mt-5">
<div className="col-sm-12 col-md-12 col-lg-6 col-lx-6">
  <h4 className="text-center pb-4">What I can do</h4>
  <div className="px-4">
    <div className="text-left pb-3">
      <h5 className="text-bold">UX research and user centered design</h5>
      <p>Design everything that I know about users and their needs. As a user experience designer, I can plan
        and conduct user research and competitor analysis, interpret data and qualitative feedback, create 
        user stories, personas, and storyboards, determine information architecture. I gained this experience 
        from the projects that I developed during my study. A series of UX research were conducted to identify 
        target audience and used problem solving techniques to identify appropriate research methods for a user 
        interface.</p>
    </div>
    <div className="text-left pb-3">
      <h5 className="text-bold">UI Design</h5>
      <p>I like to keep it simple, designing beautiful and functional user experiences. My goal is to focus on 
        usability, content, typography and message that user want to send. I accomplishments this skill during 
        study projects, iterative design process were carried out such as prototypes, usability testing, gathered, 
        analysed feedback and determined the effectiveness of the developed UI. </p>
    </div>
    <div className="text-left pb-3">
      <h5 className="text-bold">Develop for client's need</h5>
      <p>I’m a developer, so I know how to create websites to run across devices with different programming 
        languages. HTML5 and CSS are my strongest programming languages at this point, however I’m still keep 
        developing and upskill with others programming languages.</p>
    </div>
  </div>
</div>

<div className="col-sm-12 col-md-12 col-lg-6 col-lx-6">
  <h4 className="text-center pb-2">How I do my work</h4>
  <div className="px-4">
    <div className="text-left pb-3">
      <h5 className="text-bold">Detailed-oriented, sense of responsibility and committed person. </h5>
      <p>I like to be helpful to others in any way possible. All the projects that I have been working through, 
        I always put my 100% effort, care for each detail part and also try to achieve the goal within timeframes.</p>
    </div>
    <div className="text-left pb-3">
      <h5 className="text-bold">Enjoy working with others and sharing ideas, meeting new people, able to work independently and dynamic team players.</h5>
      <p>Enjoy working with others and sharing ideas.  Work well with others to complete task and meet goals, experience 
        from school team project. I would like to build strong relationships with everyone on the team like product manager,
        developer, designer and others. Concept communication between myself and others, make sure we are on the same page, 
        everyone can discuss the design, everyone works together.</p>
    </div>
    <div className="text-left pb-3">
      <h5 className="text-bold">Flexible and comfortable in adapting new skills.</h5>
      <p>I enjoy learning new things and can assimilate new ideas quickly. Our school has been teaching us a lot of programming 
        languages/frameworks/libraries like Nodejs, React, PHP, WordPress and all different tools during each module. I have 
        developed numerous website and responsive web apps with different levels and different kinds of programming languages.</p>
    </div>
  </div>
</div>                
</section> */}