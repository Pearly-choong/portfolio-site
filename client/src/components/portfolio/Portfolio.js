import React from 'react';
import './Portfolio.scss';
import portfolio1 from '../../images/MockupMealKit.png';
import portfolio2 from '../../images/homeAtomation.png';
import portfolio3 from '../../images/treatme mockup2.png';
import portfolio4 from '../../images/MockupStrangerThings3.png';
import PortfolioCard from '../portfolioCard/PortfolioCard';
import RHome from '../../images/homeAutomation/RHome.jpg';
import AHome from '../../images/homeAutomation/AHome.jpg';
import DHome from '../../images/homeAutomation/DHome.jpg';
import DHome2 from '../../images/homeAutomation/DHome2.jpg';
import RStranger from '../../images/strangerThings/RStranger.jpg';
import AStranger from '../../images/strangerThings/AStranger.jpg';
import DStranger from '../../images/strangerThings/DStranger.jpg';
import DStranger2 from '../../images/strangerThings/DStranger2.jpg';
import RMealKit from '../../images/mealkit/RMealKit.jpg';
import AMealKit from '../../images/mealkit/AMealKit.jpg';
import DMealKit from '../../images/mealkit/DMealKit.jpg';
import DMealKit2 from '../../images/mealkit/DMealKit2.jpg';
import RTreatme from '../../images/treatme/RTreatme.jpg';
import ATreatme from '../../images/treatme/ATreatme.jpg';
import DTreatme from '../../images/treatme/DTreatme.jpg';
import DTreatme2 from '../../images/treatme/DTreatme2.jpg';
//import ProjectBg from '../../images/strangerThings/blank.jpg';


class Portfolio extends React.Component{


    constructor(){
        super();
        this.state={
            cards : [
                {
                  id: 0,
                  imageUrl: portfolio1,
                  title: 'Meal Kit Delivery Service',
                  category: 'UX Research | UI | Web Development | CMS',
                  tag: 'UX/UI + WordPress + PHP + WooCommerce + Bootstrap',
                  caseStudy: 'https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing',
                  liveSite: 'http://68.183.98.69/',
                  github: 'https://github.com/Pearly-choong/mealkit-service-wp-theme' , 
                  brief: 'A custom WordPress theme website was designed and developed for Meal Kits delivery services that allow visitors to be able access information relating to the services provided. They also intend to showcase examples of thier meal kit menu, telling stories of their services to give potential customers a more intimate view of the business and their relationship with clients.',
                  overview: 'This is a WordPress CMS website that is built with a custom theme with a mix of third-party functionality that allows users to explore meal kit delivery services, choose their meal plan, read blog post stories, and find healthy recipes, submit contact and make orders. While also allowing clients to customize the theme easily. ',
                  problem: 'Until now M-Kit has relied on positive word-of-mouth to engage with new customers, but now they would like to expand the company and grow their customer base by creating an effective online presence.',
                  audience: 'The target users of the M-Kit delivery service website are professional busy working group people or couples/family. These users love exploring new recipes, want to save time on preparing food, and don’t like to spend time shopping for groceries.',
                  goal:'To develop a simple and intuitive interface for content administrators to easily manage their content and help clients get their customers to engage with their brand to increase awareness and drive sales.',
                  myRole:'UX Research, Ideation, Concept Creation, User Flow, Sketches, Wireframes, Usability Testing, Website Design, Coding, Writing User Documentation',
                  research: RMealKit,
                  analyse: AMealKit,
                  design: DMealKit,
                  design2: DMealKit2
                },
                {
                  id: 1,
                  imageUrl: portfolio2,
                  title: 'Home Automation',
                  category: 'UX Research | UI | Front-end Development',
                  tag: 'UX/UI + HTML + SASS + JS + Jquery', 
                  caseStudy: 'https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/zoneSmartHomeAutomation/',
                  github: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  brief: 'An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices that have functionality to show/hide UI components based on user interaction. Primary targeted on iphone 6/7/8 design. ',
                  overview : 'Zone Smart Home Automation is an application which allows user to control smart home devices in one place with a simple and elegant interface. ',
                  problem: 'An existing electronics company is planning to release a new service for homeowners. They have developed a range of smart home devices such as smart plugs, lights, cameras, alarms, doors etc. While they are intended in creating a new smart home automation control app package with their own brand. Current existing home automation provider, held back by outdated UX and complicated for users to learn and navigate.',
                  audience: 'The primary target users of the Zone Smart Home Automation app are young professionals working in the creative services industry. Ages between 25 and 34, home owner, exisiting user. These users have a strong preference for mobile-first.',
                  goal:'To create new ways for customers to engage with the brand to increase awareness and drive sales. Design an easy to navigate smart home automation app that accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere. ',
                  myRole:'Involved in all web and app design stages from concept to final end implementation. UX Research, Ideation, Concept Creation, User Flow, Wireframes, Prototypes, UI design, Usability Testing, Coding.',
                  research: RHome,
                  analyse: AHome,
                  design: DHome, 
                  design2: DHome2
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'Niche Market App',
                  category: 'UX Research | UI | Full Stack Web Development',
                  tag: 'UX/UI + Bootstrap SASS, Javascript, JQuery, Node.js',
                  caseStudy: 'https://drive.google.com/file/d/1G9XTh4H8Yzb7hJ5tbXQKjOR7fGPyytka/view?usp=sharing',
                  liveSite: 'http://167.172.140.162/summative3/frontEnd/',
                  github: 'https://github.com/Pearly-choong/summative3',
                  brief: 'This project is to work as a team to build an application that use an API to produce a web interface. A C2C platform that allows users to register / login their account, to sell and buy baking goods through online. Registered member able to update thier profile, add new, update or delete their listing.',
                  overview: 'Treat Me app is a C2C (Consumer to consumer) platformas match buyers with sellers, the type of e-commerce is made up of online classified or forums where individuals can buy and sell their baked goods.',
                  problem:'There’s no online C2C platform for selling/buying baked goods in the current market. A lot of home bakers would like to do the startup but do not have enough funds. Our client would like to create a C2C market space for these users to sell their baked goods and buy online. The platform should allow the buyer to post a product with its associated details, while buyers should be able to view, leave comments and ask questions about the products.',
                  audience: 'The primary target users of the Treat Me app are self-employed/unemployed home baker that interested in buying/selling cakes or donuts and wanting to make some small income, 70% female: 30% male; While the secondary target audience is full-time employment that also is home baker, would dream to be a master chief however does not like the lifestyle that comes with it so prefers to do it low key and in their own time without added pressure.',
                  goal:'The aim of this project was to allow home bakers to list their baked goods online and sell them.  Our objective was to design and create an intuitive and easy-to-use platform that allows sellers to sell their baking through images and description, and buyers to navigate through.',
                  myRole:'UX Research, Identify Target Audience, Usability Testing, Wireframing and creating prototypes for Mobile Version, Coding.',
                  research: RTreatme,
                  analyse: ATreatme,
                  design: DTreatme,
                  design2: DTreatme2  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Stranger Things 3',
                  category: 'Front-end Development',
                  tag: 'UX/UI + HTML + CSS + JS',
                  caseStudy: 'https://drive.google.com/file/d/1GVMp1wWzOyT2Cygu6uHlNAeoCADueBuD/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/tvShowWebsite/',
                  github: 'https://github.com/Pearly-choong/tvShowWebsite',
                  brief: 'Assignment project from web course. I was tasked to create and design a one page adaptive and responsive website to promote existing TV shows.',
                  overview: 'This is a website to promote Stranger Things Season 3 TV series. The website provided a trailer, character poster image, synopsis of the plot story, countdown days and social media link.',
                  problem: 'Stranger Things is one of the most popular streaming shows in the world. As a lot of fans will always want to know if there is a new season coming up and what would be the continuing story. I was tasked to create a theme website to promote this TV series, to inform potential visitors that a new season is coming.',
                  audience:'The audience of this website aimed at people between ages 15 and 29 and had watched every episode of Netflix show “Stranger Things” season one and two.',
                  goal:'To have an attractive user experience that immerses the audience in the world of suspense and science fiction.',
                  myRole:'Competitor Analysis Research, Identify Target Audience, Design, Coding.',
                  research: RStranger,
                  analyse: AStranger,
                  design: DStranger,
                  design2: DStranger2  
                }
                     
            ]
        }
    }

    render(){
        console.log(this.state);
        const cardComponent = this.state.cards.map((card)=>{
            return (
               <PortfolioCard key={card.id} imgUrl={card.imageUrl} title={card.title} cat={card.category} 
               tag={card.tag} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite} 
               brief={card.brief} overview={card.overview}  problem={card.problem} goal={card.goal} audience={card.audience} 
               myRole={card.myRole} research={card.research} analyse={card.analyse} design={card.design} design2={card.design2}/> 
            )
        })

        console.log(cardComponent);

        return(
          <div className="my-background">
            <div className="container">
              <div className="row py-5 mx-0">
                  {cardComponent}
              </div>
            </div>
            <hr className="break-line"></hr>
          </div>
        )
    }

}

export default Portfolio;