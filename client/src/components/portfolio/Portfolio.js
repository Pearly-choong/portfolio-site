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
import pic4 from '../../images/4.png';
import pic5 from '../../images/5.png';

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
                  toolUsed: 'Trello, Google Doc, Google Form, InVision, Photoshop, Illustrator, Atom, Koala, Xtensio',
                  caseStudy: 'https://drive.google.com/file/d/1s8mv3NcjJitT15AV3bOHbycnE9B2dMqY/view?usp=sharing',
                  liveSite: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  github: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  brief: 'An assignment at Yoobee College. I was tasked to design an application that makes connecting, controlling and using smart home devices useful, relevant and enjoyable. An existing electronics company is planning to release a new service for homeowners. Using a series of connected devices (smoke detectors, cameras, audio devices, lights, blind controls, etc) they intend to give customers control of their home and awareness of it’s health and security. ',
                  challenge: 'To create new ways for customers to engage with the brand to increase awareness and drive sales. A web app and accessible for mobile and tablet / wall mount sizes so that customers can remotely control their home from anywhere.',
                  outcome:'Customers will be able to see a series of connected devices in their home and will be able to monitor and control devices in their home and awareness of its health and security with minimal human interaction.',
                  myRole:'Research, Ideation, Concept Creation, User Flow, Wireframes, Website Design, Coding.',
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
                  myRole:'Find out target audience, competitor analysis research, coding.',
                  research: pic5,
                  analyse: pic5,
                  design: pic5  
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'Americanos Breakfast Restaurant',
                  category: 'Website Re-design',
                  tag: 'UX + UI + HTML + SASS + JS',
                  caseStudy: 'Not available',
                  liveSite: 'https://pearly-choong.github.io/Formative1.2/',
                  github: 'https://github.com/Pearly-choong/Formative1.2',
                  brief: 'ghi',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic5,
                  analyse: pic4,
                  design: pic5  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Meal Kit Delivery Service',
                  category: 'WordPress Custom Theme',
                  tag: 'UX + UI + WordPress + PHP + WooCommerce',
                  caseStudy: 'https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/ebookApp/',
                  github: 'https://github.com/Pearly-choong/mealkit-service-wp-theme' , 
                  brief: 'jkl',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic4,
                  analyse: pic4,
                  design: pic5
                },
                {
                  id: 4,
                  imageUrl: portfolio5,
                  title: 'Ebook App',
                  category: 'Web App Design',
                  tag: 'UX + UI + HTML + SASS + JS',
                  caseStudy: 'https://drive.google.com/file/d/1P5VkUeVY1-dIjWOXls0DKOx1TpR2xKbd/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/ebookApp/',
                  github: 'https://github.com/Pearly-choong/ebookApp' , 
                  brief: 'lmn',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic4,
                  analyse: pic4,
                  design: pic4
                },
                {
                  id: 5,
                  imageUrl: portfolio6,
                  title: 'Service Industry Website',
                  category: 'Website Redesign',
                  tag: 'UI + HTML + CSS',
                  caseStudy: 'https://drive.google.com/file/d/1JKgtLBd6BdQOi8Ew4mwJYsqqbG2nVqXG/view?usp=sharing',
                  liveSite: 'https://github.com/Pearly-choong/salonWebsite',
                  github: 'https://github.com/Pearly-choong/salonWebsite' , 
                  brief: 'lmn',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic4,
                  analyse: pic4,
                  design: pic4
                }                   
            ]
        }
    }

    render(){
        console.log(this.state);
        const cardComponent = this.state.cards.map((card)=>{
            return (
               <PortfolioCard key={card.id} imgUrl={card.imageUrl} title={card.title} cat={card.category} 
               tag={card.tag} toolUsed={card.toolUsed} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite} brief={card.brief}
               challenge={card.challenge} outcome={card.outcome} myRole={card.myRole} research={card.research} 
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