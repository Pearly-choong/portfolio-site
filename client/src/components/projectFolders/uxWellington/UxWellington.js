import React from 'react';
//import ReactDOM from 'react-dom';
import './UxWellington.scss';
// import '../../navigation/Navigation.scss';
import '../../projectFolders/mealkit/MealKit.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio6 from '../../../images/MockupUXWG.png';
import StakeholderInterview from '../../../images/uxWellington/stakeholderInterview.png';
import CardSortInterview from '../../../images/uxWellington/cardSortInterview.png';
import CardSortInterview2 from '../../../images/uxWellington/cardSortInterview2.png';
import FutureEvent from '../../../images/uxWellington/futureEvent.png';
// import { FaGithub, FaChrome, FaFilePdf } from 'react-icons/fa';
import { FaFilePdf} from 'react-icons/fa';

class UxWellington extends React.Component {
    

    render(){
          
          return(
          <div>
            <Navigation /> 
           
            <div className="portfolio-content container">

            <img src={portfolio6} alt="Images" className="img-fluid mx-auto d-block pb-4 figure-img" />
            {/* <Portfolio/> */}
            <div className="text-left mt-3 py-3">
              <h1 className="page-title">UX Wellington Community Research</h1>
              <p>
              Volunteering at UX Wellington (UX Wellington is a community Meetup group that hosts public and online events).
              </p>        
                
            </div> 

            <hr className="break-line pb-5"></hr>

            <div className="row m-auto">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Project Timeline: </strong><br></br> 3 months</p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>My Role: </strong><br></br> UX Research, Survey Creation, Interviews, Synthesis.</p> 
              </div>
              </div>
              <div className="row m-auto"> 
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Tools: </strong><br></br> Figma, Miro</p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p><strong>Deliverable: </strong><br></br> Synthesising key findings and artifacts, Research report</p>
              </div>     
            </div>

            <hr className="break-line mt-5 pt-5"></hr>

              <div className="container text-left my-5 pb-5">
                
                  <h3 className="pb-3">Project Overview  </h3>
                  <p>
                  In 2021, there has been a decrease in community engagement among UX Wellington members post-covid-19. In collaboration with another UXer volunteer, Yana, we decided to conduct a research and discovered the best ways to engage UX community members both in-person and online. We started by creating a research plan and proposed it to UX community stakeholders. We then completed user research, conducted interviews, distribute a survey, and analyze collated data and ideation from our findings. Throughout this process, we received
                  feedback from our stakeholders and community member.</p>
                
                  <h3 className="pt-5 pb-3">Problems</h3>
                  <p>There were less senior UXers were attending events and signing up to speak at events after covid. Whereas, there were more beginner UXers who want to enter the UX field were coming to events. Furthemore, we also identified there’s small turnout from the event  (people who sign up with events but do not attend).</p>    

                  <h3 className="pt-5 pb-3">Goals</h3>
                  <p>The research for this project had two goals:</p>
                  
                  <ol className="pl-3">
                    <li><strong>Exploration: </strong> Better understand the community member’s desires, painpoints and interest in participate in UX Wellington.</li>
                    <li><strong>Potential Event: </strong>What they would like to see future UX Wellington events? Are there any things they would like to take away from UX Wellington?</li>
                  </ol>
                  

                  <h3 className="pt-5 pb-3">Process</h3>
                  <h4 className="pt-3">Discovery</h4>
                  <p>To get an overview of possible stakeholder issues and the problem currently faced, we first conducted an interview with two UX community organisers. 
                     Below are the findings from the stakeholder interviews.
                  </p>
                  <img src={StakeholderInterview} alt="Images" className="w-100 m-auto d-block py-3"/>
                  
                  <h3 className="pt-5">Research</h3>
                  <p className="font-weight-bold">A few research questions:</p>
                  <ul className="pl-5">
                    <li>How long have you been working in UX for?</li>
                    <li>What problems do you face as a UX designer/Researcher?</li>
                    <li>Would you be interested in speaking at a UX Wellington event?</li>
                    <li>What kinds of events would you like to see more of in the future?</li>
                    <li>Do you follow our LinkedIn or Twitter? If so, what content do you like to see?</li>
                    <li>What times/days are best for you to attend events such as these?</li>
                  </ul>

                  <h4 className="pt-5">User Survery</h4>
                  <p>We distributed the survey via meetup and UX Wellington Slack channel. A total of 71 responses were received.</p>
                  <ul className="pl-5">
                    <li><strong>40.8% of the participants were Senior</strong> and the challenges they face the most is conducting research with limited resources. </li>
                    <li>33.8% of the participants who rarely attend UX WLG events. </li>
                    <li>Among senior, <strong>41.9% might be interested in speaking at a UX WLG event</strong>, while <strong>32.3% are definitely interested</strong>.</li>
                    <li>69% of participants were <strong>comfortable attending online and in-person events</strong>.</li>
                    <li>87% of participants would prefer to <strong>attend the event afterwork (Monday - Friday)</strong> while we also have nearly <strong>50% of participants who are keen to attend the lunchtime event</strong>. </li>
                    <li>Top three <strong>future events</strong> people would like to see more are <strong>workshops/upskilling, learn UX topics and case studies</strong>. </li>
                    <li><strong>76.1% of the participants </strong> choose they <strong>would like to see information about upcoming / past event on our social media channels</strong>.</li>
                  </ul>
                  <div className="my-5 ml-5 my-links">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScMisv2c3EBbo2wSvkqrzIgnjsxtoJTZT6HIBxzQWn11NMmFQ/viewform" target="_blank" rel="noopener noreferrer">Take the survey </a>
                    <span role="img" aria-label="emoji">🧐</span>
                 </div>

                 <h4 className="pt-5">User Interview</h4>
                 <p>To gain an in-depth understanding of the user’s values, attitudes, desires and experiences, we also conducted user interview. Six participants were interviewed remotely. 
                   There were three senior participants, one intermediate participant, and two junior participants.
                   The focus of the interview was to determine whether the members were interested in attending/speaking at UX Wellington events, to identify their reasons for not participating as much, and to identify what kind of events they enjoyed and wanted to see more of in the future.
                 </p> 
                   <p>Below are the key insights from the interview synthesized by affinity mapping. </p>
                   <ul className="ml-5"> 
                     <li><strong>Enjoy hybrid events</strong>. Prefer <strong>in-person events for networking</strong> and <strong>learning-based via online</strong>. </li>
                     <li>Reason for not attending / participating much: lives far away from city, not convenient, has other hobbies to focus on, unwell or double book, have to take care of the kids after work, focused on the job rather than a meetup. </li>
                     <li>Wanting to <strong>hear from experience Seniors speaker</strong>, cater for a broader scope of members. </li>
                     <li>Enjoy networking, sharing experiences, <strong>learning new things in the industry</strong>. </li>
                     <li>In general, <strong>senior UXers would be happy to talk about their master's thesis and share their knowledge</strong>, but junior UXers might not confident of doing so, since they don't have enough experience yet. </li>
                     <li>Those who are interested in speaking at UX Wellington <strong>have concern about the logistics of setting a venue, marketing, and support</strong>.</li>
                   </ul>
                  <img src={CardSortInterview} alt="Images" className="w-100 m-auto d-block"/>
                  <img src={CardSortInterview2} alt="Images" className="w-100 m-auto d-block pb-3"/>
                  <p className="text-center pb-5">Synthesizing the interview transcript</p>

                <p className="pt-5 font-weight-bold">Clustering all the responses</p>
                 <p>Then we took the responses through a <strong>card sorting </strong>exercise to find common themes amongst the participants.</p> 
                 <img src={FutureEvent} alt="Images" className="w-100 m-auto d-block pb-3"/>
                 
                 <h4 className="pt-5">Synthesis & Insights</h4>
                 <p>We have categorized the findings into four key insights. </p>
                 <ol className="pl-4">
                   <li className="font-weight-bold">Upskilling and Learning</li>
                   <p>- Overall, the members would like to see more demos, case studies and panels. <br></br>
                      - More opportunities for workshops and interactive sessions. <br></br>
                      - Getting to know new trends and latest project’s people working on. 
                   </p>

                   <li className="font-weight-bold">Sharing Stories</li>
                   <p>- Have opportunity to share and hear challenges in similar work. <br></br>
                      - Get feedback on ideas/ thoughts. <br></br>
                   </p>

                   <li className="font-weight-bold">Socialising and Networking</li>
                   <p>- Able to meet like minded people and exchange knowledge.  <br></br>
                      - Connect with people and build community.  <br></br>
                   </p>

                   <li className="font-weight-bold">Events and Social Media</li>
                   <p>- Would like to see more regular events either is online or social events. <br></br>
                      - Offer more option by having meet ups during the day.  <br></br>
                      - Provide links to good resources on LinkedIn.
                   </p>
                 </ol>

                 <h3 className="pt-5">Ideation</h3>
                 <p className="pt-3">After synthesizing the key insights, we brainstormed possible solutions, keying in on "how might we" questions:</p>
                 <ul className="pl-5">
                   <li>How might we improve engagement with speaker volunteers? </li>
                   <li>How might we support potential speaker, become a family friendly community?</li>
                   <li>How might we make our events more accessible?</li>
                 </ul>
                 <p>We first prioritize the potential solutions based on member suggestion (information collected from user interview) and also formulated our recommendation.</p>
                  <p className="pt-3 font-weight-bold">Member Suggestion</p>
                  <ul className="pl-5">
                    <li>Make it easier for speaker to sign up, have a more efficient way to help new speakers (via zoom, call or DM), and provide speaker support. </li>
                    <li>Offer <strong>presentation support and logistic support</strong>, communicate a straightforward process of how the speaker will be supported by UX Wellington. </li>
                    <li>Schedule <strong>daytime events.</strong> Be flexible for parents or those with less time outside of work. </li>
                    <li>Have student-focused events and expert focused event.</li>
                    <li>At event, have an <strong>icebreaker</strong> so members can talk to new people. </li>
                    <li>Consider <strong>round table panel</strong>, seniors could lead a group of discussion.</li>
                    <li>Be more active on <strong>social media</strong> and post more blog content related to UX Wellington and information on events coming up.</li>
                  </ul>
                 
                  <p className="pt-3 font-weight-bold">The opportunity we see with our recommendation</p>
                  <ul className="pl-5">
                    <li>Organise a variety of online and in-person events, online for training and in-person for social. </li>
                    <li>Trial lunchtime event, in-person and online.</li>
                    <li>Categorise event type by the level of expertise.</li>
                    <li>Recruit volunteers to fill gaps of need, i.e. a blog writer, greeter at events, co-organiser. </li>
                  </ul>

                  <div className="my-5 pt-5 my-links">
                    <a className="py-2" href="https://www.figma.com/proto/op4Moup4Uv7CQCl4HVFzqT/October-2021-User-Research-Report?node-id=312%3A658&scaling=min-zoom&page-id=312%3A657" target="_blank" rel="noopener noreferrer"><span className="pr-2"><FaFilePdf/></span>Read Final Report</a>
                  </div>


                  <h3 className="pt-5 pb-3 text-dark">Reflects and What's Next</h3>
                  <p>The research of this project is a challenge, together with the schedule and finding participants for user interviews. I learned that <strong>crafting a clear research plan and setting up a project timeframe is pivotal to a research project</strong> because it identifies and helps define your focus, method, 
                    purpose and goals while also outlining the research project from start to finish. By conducting series of user experience research, I learned that <strong>good research help meets user goals.</strong> Having <strong>support and feedback from senior researchers helped us to find the best direction</strong> and complete the research successfully.</p>
                  <p>I found that spent your own spare time to work on a volunteer work it needs a lot of effort and motivation. Therefore, <strong>it is motivating to have a teammate willing to join together for a volunteer side project as this helps to motivate us to stay focused, track our progress and achieve our goals.</strong>   </p>
                  <p>Overall, this research was to laying a foundation for future work and to support UX Wellington to create a strategic plan for future events.  </p>    
                
         
              </div>
            
        

            <div className="my-5 text-center d-flex flex-wrap justify-content-between  pt-5">
              {/* <button className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded" onClick={this.portfolio}><span>View Other Projects</span></button>  */}
             
              <Link to="/Portfolio" className="bottom-nav mx-3"><span>ALL</span></Link> 
              <Link to="/Portfolio-HomeAutomation-Project" className="bottom-nav mx-3"><span>NEXT: HOME AUTOMATION ➜</span></Link> 
              {/* <Link to="/Portfolio-AngusRobertson-Project" className="bottom-nav mx-3"><span>ANGUS & ROBERTSON</span></Link>
              <Link to="/Portfolio-HomeAutomation-Project" className="bottom-nav mx-3"><span>HOME AUTOMATION</span></Link>
              <Link to="/Portfolio-MealKit-Project" className="bottom-nav mx-3"><span>MEAL KIT DELIVERY</span></Link>
              <Link to="/Portfolio-NicheMarketAppProject" className="bottom-nav mx-3"><span>NICHE MARKET APP</span></Link>
              <Link to="/Portfolio-StrangerThings3-Project" className="bottom-nav mx-3"><span>STRANGER THINGS 3</span></Link> */}      
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


export default UxWellington;