import React from 'react';
import portfolio1 from '../../images/homeAtomation.png';
import portfolio2 from '../../images/MockupStrangerThings3.png';
import portfolio3 from '../../images/MockupAmericanos.png';
import portfolio4 from '../../images/MockupMealKit.png';
import portfolio5 from '../../images/MockupEbookApp.png';
import portfolio6 from '../../images/MockupSalonWebsite.png';
import PortfolioCard from '../portfolioCard/PortfolioCard';
import RHome from '../../images/homeAutomation/RHome.jpg';
import AHome from '../../images/homeAutomation/AHome.jpg';
import DHome from '../../images/homeAutomation/DHome.jpg';
import DHome2 from '../../images/homeAutomation/DHome2.jpg';
import RStranger from '../../images/strangerThings/RStranger.jpg';
import AStranger from '../../images/strangerThings/AStranger.jpg';
import DStranger from '../../images/strangerThings/DStranger.jpg';
import DStranger2 from '../../images/strangerThings/DStranger2.jpg';
import RAmericano from '../../images/americanoRestaurant/RAmericano.jpg';
import AAmericano from '../../images/americanoRestaurant/AAmericano.jpg';
import DAmericano from '../../images/americanoRestaurant/DAmericano.jpg';
import RMealKit from '../../images/mealkit/RMealKit.jpg';
import AMealKit from '../../images/mealkit/AMealKit.jpg';
import DMealKit from '../../images/mealkit/DMealKit.jpg';
import DMealKit2 from '../../images/mealkit/DMealKit2.jpg';
import REbook from '../../images/ebook/REbook.jpg';
import AEbook from '../../images/ebook/AEbook.jpg';
import DEbook from '../../images/ebook/DEbook.jpg';
import RSalon from '../../images/salon/RSalon.jpg';
import ASalon from '../../images/salon/ASalon.jpg';
import DSalon from '../../images/salon/DSalon.jpg';

class Portfolio extends React.Component{


    constructor(){
        super();
        this.state={
            cards : [
                {
                  id: 0,
                  imageUrl: portfolio1,
                  title: 'Home Automation',
                  category: 'Web App Design',
                  tag: 'UX + UI + HTML + SASS + JS + Jquery', 
                  toolUsed: 'Trello, Google Doc, Google Form, InVision, Photoshop, Illustrator, Atom, Koala, Github, Xtensio',
                  caseStudy: 'https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing',
                  liveSite: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  github: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  brief: 'An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices useful, relevant and enjoyable. An existing electronics company is planning to release a new service for homeowners. Using a series of connected devices (smoke detectors, cameras, audio devices, lights, blind controls, etc) they intend to give customers control of their home and awareness of it’s health and security. ',
                  challenge: 'To create new ways for customers to engage with the brand to increase awareness and drive sales. Create a web app that accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere.',
                  outcome:'Smart Home Application that have functionality to show/hide UI components based on user interaction. Customers able to see a series of connected devices in their home and will be able to monitor and control devices in their home and awareness of its health and security with minimal human interaction.',
                  myRole:'UX Research, Ideation, Concept Creation, User Flow, Wireframes, Prototypes, Usability Testing, Website Design, Coding.',
                  research: RHome,
                  analyse: AHome,
                  design: DHome, 
                  design2: DHome2
                },
                {
                  id: 1,
                  imageUrl: portfolio2,
                  title: 'Stranger Things 3',
                  category: 'Web Design',
                  tag: 'UI + HTML + CSS + JS',
                  toolUsed: 'Google Doc, Atom',
                  caseStudy: 'Not available',
                  liveSite: 'https://pearly-choong.github.io/tvShowWebsite/',
                  github: 'https://github.com/Pearly-choong/tvShowWebsite',
                  brief: 'Assignment project from web course. I was tasked to create a one page adaptive or responsive website to promote existing TV shows.',
                  challenge: 'To promote TV shows, inform potential visitors that a new season is coming soon.',
                  outcome:'Website will include a trailer,  provide season release date and countdown the days towards it, poster or images, a synopsis of the plot story, links to social media.',
                  myRole:'Competitor Analysis Research, Identify Target Audience, Coding.',
                  research: RStranger,
                  analyse: AStranger,
                  design: DStranger,
                  design2: DStranger2  
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'Americanos Breakfast Restaurant',
                  category: 'Website Redesign',
                  tag: 'UX + UI + HTML + SASS + JS',
                  toolUsed: 'Trello, Google Doc, Google Form, UXPin, Atom, Koala, Github, Xtensio',
                  caseStudy: 'Not available',
                  liveSite: 'https://pearly-choong.github.io/Formative1.2/',
                  github: 'https://github.com/Pearly-choong/Formative1.2',
                  brief: 'This is a group work assignment at Yoobee College. Me and another two people were working in a group to review and improve an existing website\s user experience. After that, use the UX brief created to develop a website individually.',
                  challenge: 'Redesign the website for Americano Breakfast Restaurant and improve user experience, wanting to make the website more user friendly.',
                  outcome:'Developed one-page adaptive website by showcasing the dining experience and adverstising menu items with business contact information for potential visitors',
                  myRole:'UX Research, Identify Target Audience, Usability Testing, Wireframing and creating prototypes for Tablets Version Design, Coding.',
                  research: RAmericano,
                  analyse: AAmericano,
                  design: DAmericano,
                  design2: DStranger2  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Meal Kit Delivery Service',
                  category: 'WordPress Custom Theme',
                  tag: 'UX + UI + WordPress + PHP + WooCommerce',
                  toolUsed: 'Wordpress, Visual Studio Code, Github, Figma, Trello, InDesign, Google Form',
                  caseStudy: 'https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing',
                  liveSite: 'http://68.183.98.69/',
                  github: 'https://github.com/Pearly-choong/mealkit-service-wp-theme' , 
                  brief: 'Until now M-Kit has relied on positive word-of-mouth to engage with new customers, but now they would like to expand the company and grow thier customer base by creating an effective online presence.',
                  challenge: 'To develop a simple and intuitive interface for content administrators to easily manage their content and help clients get their customers to engage with their brand to increase awareness and drive sales.',
                  outcome:'A custom WordPress theme website was designed and developed for Meal Kits delivery services that allow visitors to be able access information relating to the services provided. They also intend to showcase examples of thier meal kit menu, telling stories of their services to give potential customers a more intimate view of the business and thier relationship with clients.',
                  myRole:'UX Research, Ideation, Concept Creation, User Flow, Sketches, Wireframes, Usability Testing, Website Design, Coding.',
                  research: RMealKit,
                  analyse: AMealKit,
                  design: DMealKit,
                  design2: DMealKit2
                },
                {
                  id: 4,
                  imageUrl: portfolio5,
                  title: 'Ebook App',
                  category: 'Single Page App',
                  tag: 'UI + HTML + SASS + JS + JQuery',
                  toolUsed: 'UXPin, Trello, Google Doc, Atom, Github',
                  caseStudy: 'https://drive.google.com/file/d/1P5VkUeVY1-dIjWOXls0DKOx1TpR2xKbd/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/ebookApp/',
                  github: 'https://github.com/Pearly-choong/ebookApp' , 
                  brief: 'Create a single page app that will implement basic use cases which included view list, view detail and filter items by category.',
                  challenge: 'Use javascript to maniputlate the DOM, implement simple algorithms, design and develop a delightful user experience web app for the client.',
                  outcome:'An application have functionality to show/hide UI components based on user interaction.',
                  myRole:'Identify Business Requirement and User Rquirement, Competitor Analysis, Sketches, Wireframes, Prototyping, Write algorithm, Create FlowChart.',
                  research: REbook,
                  analyse: AEbook,
                  design: DEbook,
                  design2: DStranger2
                },
                {
                  id: 5,
                  imageUrl: portfolio6,
                  title: 'Service Industry Website',
                  category: 'Website Redesign',
                  tag: 'UI + HTML + CSS',
                  toolUsed: 'Google Doc, Sublime, Illustrator',
                  caseStudy: 'https://drive.google.com/file/d/1JKgtLBd6BdQOi8Ew4mwJYsqqbG2nVqXG/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/salonWebsite/',
                  github: 'https://github.com/Pearly-choong/salonWebsite' , 
                  brief: 'This is an assignment from Web design course. I have chosen to redesign an existing salon website, and develop with HTML and CSS.',
                  challenge: 'Needed a new small website of around four-five pages to showcase the brand and introduce salon team members on the site by displaying images and brief bio of each member.',
                  outcome:'A usable and aesthetically appealing online platform with brand identity.',
                  myRole:'User Research, Ideation, Sketches, Wireframes, Website Design, Coding.',
                  research: RSalon,
                  analyse: ASalon,
                  design: DSalon,
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
               tag={card.tag} toolUsed={card.toolUsed} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite} 
               brief={card.brief} challenge={card.challenge} outcome={card.outcome} myRole={card.myRole} research={card.research} 
               analyse={card.analyse} design={card.design} design2={card.design2}/> 
            )
        })

        console.log(cardComponent);

        return(
            <div className="row py-5 mx-0">
                {cardComponent}
            </div>
        )
    }

}

export default Portfolio;