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
import RMealKit from '../../images/mealkit/RMealKit.jpg';
import AMealKit from '../../images/mealkit/AMealKit.jpg';
import DMealKit from '../../images/mealkit/DMealKit.jpg';
import DMealKit2 from '../../images/mealkit/DMealKit2.jpg';
import TreatMe from '../../images/treatme/Treatme.jpg';
import TreatMe2 from '../../images/treatme/Treatme1.jpg';
import ProjectBg from '../../images/treatme/blank.jpg';


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
                  tag: 'WordPress + PHP + WooCommerce + Bootstrap',
                  caseStudy: 'https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing',
                  liveSite: 'http://68.183.98.69/',
                  github: 'https://github.com/Pearly-choong/mealkit-service-wp-theme' , 
                  brief: 'A custom WordPress theme website was designed and developed for Meal Kits delivery services that allow visitors to be able access information relating to the services provided. They also intend to showcase examples of thier meal kit menu, telling stories of their services to give potential customers a more intimate view of the business and thier relationship with clients.',
                  //brief: 'Until now M-Kit has relied on positive word-of-mouth to engage with new customers, but now they would like to expand the company and grow thier customer base by creating an effective online presence.',
                  challenge: 'To develop a simple and intuitive interface for content administrators to easily manage their content and help clients get their customers to engage with their brand to increase awareness and drive sales.',
                  outcome:'A custom WordPress theme website was designed and developed for Meal Kits delivery services that allow visitors to be able access information relating to the services provided. They also intend to showcase examples of thier meal kit menu, telling stories of their services to give potential customers a more intimate view of the business and thier relationship with clients.',
                  myRole:'UX Research, Ideation, Concept Creation, User Flow, Sketches, Wireframes, Usability Testing, Website Design, Coding.',
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
                  tag: 'HTML + SASS + JS + Jquery', 
                  caseStudy: 'https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing',
                  liveSite: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  github: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  brief: 'An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices that have functionality to show/hide UI components based on user interaction. Primary targeted on iphone 6/7/8 design. ',
                 // brief: 'An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices useful, relevant and enjoyable. An existing electronics company is planning to release a new service for homeowners. Using a series of connected devices (smoke detectors, cameras, audio devices, lights, blind controls, etc) they intend to give customers control of their home and awareness of it’s health and security. ',
                  challenge: 'To create new ways for customers to engage with the brand to increase awareness and drive sales. Create a web app that accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere.',
                  outcome:'Smart Home Application that have functionality to show/hide UI components based on user interaction. Customers able to see a series of connected devices in their home and will be able to monitor and control devices in their home and awareness of its health and security with minimal human interaction.',
                  myRole:'UX Research, Ideation, Concept Creation, User Flow, Wireframes, Prototypes, Usability Testing, Website Design, Coding.',
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
                  tag: 'Bootstrap SASS, Javascript, JQuery, Node.js',
                  caseStudy: 'https://drive.google.com/file/d/1G9XTh4H8Yzb7hJ5tbXQKjOR7fGPyytka/view?usp=sharing',
                  liveSite: 'http://167.172.140.162/summative3/frontEnd/',
                  github: 'https://github.com/Pearly-choong/summative3',
                  brief: 'This project is to work as a team to build an application that use an API to produce a web interface. A C2C platform that allows users to register / login their account, to sell and buy baking goods through online. Registered member able to update thier profile, add new, update or delete their product list.',
                  challenge: 'Redesign the website for Americano Breakfast Restaurant and improve user experience, wanting to make the website more user friendly.',
                  outcome:'Developed one-page adaptive website by showcasing the dining experience and adverstising menu items with business contact information for potential visitors',
                  myRole:'UX Research, Identify Target Audience, Usability Testing, Wireframing and creating prototypes for Tablets Version Design, Coding.',
                  research: TreatMe,
                  analyse: TreatMe2,
                  design: ProjectBg,
                  design2: ProjectBg  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Stranger Things 3',
                  category: 'Front-end Development',
                  tag: 'HTML + CSS + JS',
                  caseStudy: 'https://drive.google.com/file/d/1GVMp1wWzOyT2Cygu6uHlNAeoCADueBuD/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/tvShowWebsite/',
                  github: 'https://github.com/Pearly-choong/tvShowWebsite',
                  brief: 'Assignment project from web course. I was tasked to create a one page adaptive or responsive website to promote existing TV shows.',
                  challenge: 'To promote TV shows, inform potential visitors that a new season is coming soon.',
                  outcome:'Website will include a trailer,  provide season release date and countdown the days towards it, poster or images, a synopsis of the plot story, links to social media.',
                  myRole:'Competitor Analysis Research, Identify Target Audience, Coding.',
                  research: RStranger,
                  analyse: AStranger,
                  design: DStranger,
                  design2: ProjectBg  
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
               brief={card.brief} challenge={card.challenge} outcome={card.outcome} myRole={card.myRole} research={card.research} 
               analyse={card.analyse} design={card.design} design2={card.design2}/> 
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