import React from 'react';
//import ReactDOM from 'react-dom';
import './AngusRobertson.scss';
import Navigation from '../../navigation/Navigation';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import portfolio5 from '../../../images/MockupAG.png';
import DesignThinkingIllustration from '../../../images/angusRobertson/DesignThinkingApproach.png'
import ProfileScreen from '../../../images/angusRobertson/profile.png';
import CommunityScreen from '../../../images/angusRobertson/community.png';
import BooklistScreen from '../../../images/angusRobertson/booklist.png';
import ReviewScreen from '../../../images/angusRobertson/review.png';
import RecommendScreen from '../../../images/angusRobertson/recommend.png';
import CardSort1 from '../../../images/angusRobertson/cardSort1.png';
import CardSort2 from '../../../images/angusRobertson/cardSort2.png';
import UserFlow from '../../../images/angusRobertson/IA.png';
import Sketch1 from '../../../images/angusRobertson/sketch1.jpg';
import Sketch2 from '../../../images/angusRobertson/sketch2.jpg';
import Wireframe1 from '../../../images/angusRobertson/wireframe1.png';
import Wireframe2 from '../../../images/angusRobertson/wireframe2.png';
import Persona1 from '../../../images/angusRobertson/persona1.png';
import CustomerJourney from '../../../images/angusRobertson/customerJourneyMap.png';
import UXOpportunities from '../../../images/angusRobertson/UXOpportunities.png';
import FinalPrototype from '../../../images/angusRobertson/prototype.png';
import IterationScreen from '../../../images/angusRobertson/iterationScreen.png';
// import {FaChrome} from 'react-icons/fa';

class AngusRobertson extends React.Component {
    

    render(){
          
          return(
          <div>
            <Navigation /> 
              
            <div className="portfolio-content container">
            
             <img src={portfolio5} alt="Images" className="img-fluid mx-auto d-block pb-4 figure-img" />
              {/* <Portfolio/> */}
              <div className="text-left mt-3 py-3">
              <h1 className="page-title">Angus & Robertson UX Project</h1>
              <p>
                Built a reward-based user community with gamification elements for Angus & Robertson online bookstore to improve the user experience which in turn boosting sales and retention rate.
                This project was initiated by Harness Project, a project-based UX bootcamp. 
              </p>        
                 
              </div> 

              <hr className="break-line pb-5"></hr>

              <div className="row m-auto">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Project Timeline: </strong><br></br> 9 weeks</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>My Role: </strong><br></br> Research, UX/UI Design, Prototyping, User Testing</p> 
                 </div>
                </div>
                <div className="row m-auto"> 
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Tools: </strong><br></br> Figma, Miro, Adobe Illustrator</p>
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                 <p><strong>Deliverable: </strong><br></br> Research Report, High-fidelity clickable prototype</p>
                 </div>     
              </div>

              <hr className="break-line mt-5 pt-5"></hr>
              
                <div className="container text-left my-5">
                  {/* <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"> */}
                    <h2 className="pb-3">Who is Angus & Robertson?  </h2>
                    <p>
                    Angus & Robertson has been a major player in the Australian book industry since it was started by two migrant Scotsmen in Sydney in 1886. As an iconic Australian name for book buyers, Angus & Robertson expanded to have stores in every major Australian city and became a dependable and widely available outlet for Australian book buyers.
                    </p>
                    <p>
                    Angus & Robertson closed their last physical store in 2011 and became a 100% online company business. In order to improve their customer experience, A&R is shifting focus from creating a consistent site experience to improving the user experience.
                    </p> 
                  {/* </div> */}

                  {/* <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"> */}
                    
                  {/* </div> */}
                  {/* <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"> */}
                  <h2 className="pt-5 pb-3">The Problem</h2>
                    <p>There is a lack of user engagement when it comes to creating lists and reviews for a community hub of recommendations, excitement, and stimulation of site exploration leading to additional purchases. </p>        
                    <h2 className="pt-5 pb-3">Challenges</h2>       
                    <p>1. Close the gap between users buying and becoming inactive in their system.</p>
                    <p>2. To create a gamified experience to boost organic content and reach in turn boosting sales.</p>                 
                    <p>3. Create an environment where users can: 
                      <ul className="ml-5">
                        <li>Leave and like reviews.</li>
                        <li>Give the ability to create and share lists.</li>
                        <li>Follow and connect with other like minded users.</li>
                        <li>Have and participate in a badge and rewards system.</li>
                      </ul></p>
                  {/* </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"> */}
                    <h2 className="pt-5 pb-3">Constraints  </h2>
                    
                    <ul className="pl-5">
                      <li>Reward system cannot be a monetised reward (i.e. discounts or financial benefits for participating).</li>
                      <li>No user to user social interaction elements (i.e. chat or other means of communicating with each other as this opens up risks regarding abuse & moderation).</li>
                    </ul>
                    
                  {/* </div> */}
                  <div className="info-container">
                    <h2 className="pt-5 pb-3">How Might We? </h2>
                    <p>Below are the questions that helped to inform the design strategies:</p>
                    <ul className="ml-5">
                        <li>How might we <strong>create an engaging, fun, and safe community</strong> to share across?</li>
                        <li>How might we <strong>highlight the visibility of verified trusted reviews and recommendations</strong>?</li>
                        <li>How might we allow readers to <strong>verify the validity of reviews</strong> they are reading?</li>
                        <li>How might we allow readers to <strong>customise their lists</strong>?</li>
                        <li>How might we <strong>simplify reviewing process</strong> to boost postings?</li>
                      </ul>
                  </div>
                  <div className="info-container">
                    <h2 className="pt-5 pb-3">Solution</h2>
                      <div className="solution-container">
                        <h5 className="font-weight-bold text-dark">Personalised Profile and Gamified Reward System</h5> 
                        <p>I created and redesigned a personalized profile that incorporates more gamification and community involvement.</p>
                        <ul className="pl-5">
                          <li>User profile customization. This feature allows users to update their photos and blurb.</li>
                          <li>Community members' followings and followers are displayed.</li>
                          <li>Gamify the user profile by adding badges. Users can earn badges based on the number of series completed, and the number of reviews written.</li>
                          <li>The dashboard/achievement can be viewed here. Users can see how much they have to go to reach the next level by seeing the progression bar. A list of tasks will be provided for the user to understand what needs to be done in order to earn the badge.</li>
                          <li>Upon reaching a certain achievement level, a ranking tile will be upgraded.</li>
                        </ul>
                        
                        <p>As the platform offers users the opportunity to create their own space, it increases user engagement, and the gamification element helps to keep them engaged and creates a bit of fun. </p>
                        <img src={ProfileScreen} alt="Images" className="w-100 m-auto d-block pt-3"/>
                        {/* <img src={ProfileScreen} alt="Images" className="m-auto d-block pt-5" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" /> */}
                        
                        <h5 className="font-weight-bold text-dark mt-5">Community-based</h5> 
                        <p>When they become a member, user can discover people through the community among the website. They can follow other user and view their badges.</p>
                        <p>Follow the community feed to stay updated on thier friends' activity, for example, someone reaching the next level, unlocking new badges, or sharing recommended books. It is also possible for Angus and Robertson to post updates or announcements. </p>                       
                        <p>Due to the constraints of no user to user social interaction element, members won’t be able to add comments or chat with each other on the platform. However, they are allow to interact with the emojis on the news feed posted.</p>
                        <p>These features give the opportunity to connect with like-minded readers, and also boost the community and members’ engagement. </p>
                        <img src={CommunityScreen} alt="Images" className="w-100 m-auto d-block pt-3"/>
                        
                        <h5 className="font-weight-bold text-dark mt-5">Booklist</h5> 
                        <p>Users are able to view their booklist in their library section. It displays their purchased book and the booklists that users created and liked.</p>
                        <img src={BooklistScreen} alt="Images" className="w-100 m-auto d-block pt-3"/>
                        
                        <h5 className="font-weight-bold text-dark mt-5">Review</h5>
                        <p>The review section highlights the visibility of the verified trusted reviews by display of the identity and level of the user who left the reviews. Also, priorities the reviews are written by the following user. </p> 
                        <p>User can leave their review on a simple and easy pop-up review form. Optional for user to share their review among the community feeds.  </p>
                        <img src={ReviewScreen} alt="Images" className="w-100 m-auto d-block pt-3"/>
                        
                        <h5 className="font-weight-bold text-dark mt-5">Recommend</h5> 
                        <p>Users are abe to view all their reviewed items and get notification if someone likes their review. 
                           This also allow to share / recommend books via social media or among the community feeds. </p>
                        <img src={RecommendScreen} alt="Images" className="w-100 m-auto d-block pt-3"/>
                      </div>
                   
                  </div>
                  <div className="container">
                    <h2 className="pt-5 pb-3">Research and Development</h2>
                    <h4 className="pt-5 pb-3">Design Thinking Approach</h4>
                    <p>This illustration is a brief of how I discover, approach and solve the problem.</p>
                    <img src={DesignThinkingIllustration} alt="Images" className="w-100 m-auto d-block"/>
                  </div>
                </div>
                <div className="container">
                  
                    <h4 className="mb-3">Learning about our users</h4>
                    <p>A series of interviews were conducted with avid readers to establish a baseline for what functionality would encourage more user engagement.
                      As part of a team of nine UX designers, I interviewed two users. A total 20 participants interviewed 15 identify as Female and 5 as Male, aged between 21-55.
                      The focus of the interviews was to establish reading, book purchasing and reviewing habits as well as identifying reward based systems likes, dislikes, wants and how gamification could increase user engagement. </p>
                    <p>I then took the responses through a card sorting exercise to find common themes amongst the participants. </p>
                    <h4 className="mt-5 mb-3">Affinity Map</h4>
                    <img src={CardSort1} alt="Images" className="w-100 m-auto d-block pt-3"/>
                    <img src={CardSort2} alt="Images" className="w-100 m-auto d-block"/>
                    
                    <h4 className="mt-5 mb-3">Major Insights</h4>
                    <ol className="pl-4">
                      <li className="font-weight-bold">Trusted Reviews</li>
                        <p>Highlight the visibility of verified trusted reviews and recommendations, allow readers to verify the validity of reviews they are reading.</p>
                      <li className="font-weight-bold">Recognition and ability to share achivements</li>
                        <p>Incentivize users for their interactions. E.g. leaving reviews, recommendations and sharing.</p>
                        <li className="font-weight-bold">Simplify reviewing process and allowing readers to customize their lists</li>
                        <p>Community engagement with books (showing the number of reads, list adds and reviews).</p>
                      <li className="font-weight-bold">Feeling empowered to encourage further engagement</li>
                        <p>Simplify reviewing process and allowing readers to customize their lists.</p>
                    </ol>

                    <h4 className="mt-5 mb-3">Target User & Persona</h4>
                    <p>The next task was deciding the target users to know who we are designing for. According to the user interview, there were two main groups of readers, who are positive and resistant in terms of user engagement and gamification system. At this point, I want to focus on the positive group which is our primary target audience. So I created a persona to define the chosen types of users and understand their frustration and their goals.</p>
                    <p>Julia Mackesy, an avid reader who enjoys sharing and interacting with other like-minded reader has the potential using the reward system. She wishes to receive recognition and be able to share her achievement in A&R website. </p>
                    <img src={Persona1} alt="Images" className="w-100 m-auto d-block pt-3"/>
                    
                    <h4 className="mt-5 mb-3">Synthesis : Journey Mapping</h4>
                    <p>Based upon data from Julia, I organized my observations and categorized them using a customer journey map. This helped my expose pain points, possible solutions and areas for improvement in the website.</p>
                    <img src={CustomerJourney} alt="Images" className="w-100 m-auto d-block pt-3"/>
                   
                    <h4 className="mt-5 mb-3">Balancing User Needs With Business Goals</h4>
                    <p>The initial user research uncovered various areas of opportunity from user’s need. And for the MVP I kept in mind the business goals and organizational capacity and decided to focus upon some key areas. 
                      From the meeting point of both the business and user, opportunities for solutions are present in the following points: <strong>highlighting verified trusted reviews and recommendations, offering users incentives for their interactions, allowing readers to customize their booklists and enhancing the reader experience by integrating a community engagement platform.</strong> 
                    </p>
                    <img src={UXOpportunities} alt="Images" className="w-100 m-auto d-block pt-3"/>
                    
                    <h2 className="pt-5 pb-3">Ideate & Design </h2>
                    <h4 className="mt-5 mb-3">Setting Up the Structure </h4>
                    <p>I refined the concept with research outcomes in-line with our business goals and went through a few rounds of iteration using hand sketching. I also came up with a revised and simplified information architecture that focused on products page and profile page. </p>
                    <img src={UserFlow} alt="Images" className="w-100 m-auto d-block pt-3"/>
                    
                    <p className="mt-5">Brainstorming and Sketches</p>
                    <div className="row">
                        <img src={Sketch1} alt="Images" className="w-100 m-auto d-block pt-3 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"/>
                        <img src={Sketch2} alt="Images" className="w-100 m-auto d-block pt-3 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"/>
                    </div>

                    <h4 className="mt-5 mb-3">From Paper to Digital</h4>
                    <p>I then brought my idea to an interactive digital low-fidelity wireframes.</p>
                    <img src={Wireframe1} alt="Images" className="w-100 m-auto d-block pt-3"/>
                    <img src={Wireframe2} alt="Images" className="w-100 m-auto d-block pt-3 mb-4"/>
                
                   <h2 className="pt-5 pb-3 mt-5 text-dark">High-fidelity Prototype</h2> 
                  
                    <div className="my-links text-center">
                    <a href="https://www.figma.com/proto/VKLeqD1kkI4byupVY7jCmm/Angus-Robertson?node-id=63%3A2708&scaling=scale-down&page-id=63%3A2707&starting-point-node-id=63%3A2708&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                      <img src={FinalPrototype} alt="Images" className="w-100 m-auto d-block pt-3"/>
                      View Prototype
                    </a>
                    </div>
                </div>
                
                <div className="container mt-5">
                  <h2 className="pt-5 pb-3 text-dark">Testing</h2> 
                  <p>To uncover the usability issue of my design, I showed the high-fidelity prototype to all the usability study participants and gained very positive feedbacks. During each test session, I was specifically looking for feedback on: </p>
                  <ul className="pl-3">
                    <li>Sign-in process</li>
                    <li>Finding a books</li>
                    <li>Read review and post review</li>
                    <li>Create a booklist and share the list/book</li>
                    <li>Access profile page, checking their ranking, achievement and badges</li>
                    <li>Access community feeds</li>
                    <li>Back to homepage</li>
                  </ul>
                  <p>Overall all the testing went well, the users were able to accomplish the given tasks without problem. However, most user were struggling to go back to homepage. In my first design, I used the company logo "Angus & Robertson" as the navigation to the homepage.</p> 
                  <img src={IterationScreen} alt="Images" className="w-100 m-auto d-block"/>
                  <p>According to my observation, users had trouble finding the back button when I asked them to return to the main page. Users suggested that putting a home icon would be a better idea. So, I decided to change the design to a home icon within the hamburger menu while remain the logo on the top navigation bar.</p>
                  <br></br><br></br>
                  <h5 className="font-italic px-5 mx-4">" Intuitive to use, I like the idea of the community-based and the gamification element of earning badges and leveling up. That would be very interesting to use within the website, I'd love to try it! ”   -Claire </h5>  
                </div>

                <div className="container pt-5">
                  <h2 className="pt-5 pb-3 text-dark">Takeaways</h2>
                  <p>For me, this was my first UX project incorporating gamification elements, the process was fun as well as challenging because I still have a lot to learn about UX design. It was also my first time <strong>using Miro as an online visual collaboration tool</strong>. I find it an extremely interactive whiteboard tool to work online among the team. </p> 
                  <p>The main takeaways is that the <strong>user interview helps pinpoint your problem statement</strong> even though there are plenty of articles and resources online, <strong>the experience share with you directly by users is more valuable and usable information. </strong> 
                     I have also learned that <strong>asking questions allows a better understanding of direction, which leads to maximum time efficiency.</strong>  </p>
                  <p>Secondly, I feel that the <strong>design thinking approach is a very constructed method for developing a product</strong>, it provide you the direction and process for generating valuable project outcomes. As such, I don’t think we should skip any step in between if possible. </p>
                </div>

            

            <div className="my-5 text-center d-flex flex-wrap justify-content-between pt-5">            
                  <Link to="/Portfolio" className="bottom-nav mx-3"><span>ALL</span></Link> 
                  <Link to="/Portfolio-UxWellington-Project" className="bottom-nav mx-3"><span>NEXT: UX WELLINGTON ➜</span></Link>                  
                </div>
                {/* <div className="my-3 text-center d-flex justify-content-center wrapper pt-5">
                <a className="btn-link py-2 px-5 project-link project-link-fs shadow p-3 mb-5 rounded extra-padding" href="http://68.183.98.69/" target="_blank" rel="noopener noreferrer"><span>Visit Site</span></a>
                </div> */}
                {/* <div className="my-3 text-center d-flex justify-content-center wrapper py-5">
                <Link to="/Portfolio-UxWellington-Project" className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded"><span>Other Project</span></Link> 
                </div> */}
            </div> 
            <hr className="break-line"></hr>
            <div className="text-center px-5">
             <Footer/>
            </div>
          </div>
          
        )
    
    }
}


export default AngusRobertson;