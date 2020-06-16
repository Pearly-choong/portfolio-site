import React from 'react';
import portfolio1 from '../../images/homeAtomation.png';
import portfolio2 from '../../images/marketingWebsite.jpg';
import portfolio3 from '../../images/MockupTreatMe.png';
import portfolio4 from '../../images/ebookApp2.png';
import PortfolioCard from '../portfolioCard/PortfolioCard';
import pic1 from '../../images/1.png';
import pic2 from '../../images/2.png';
import pic3 from '../../images/3.png';
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
                  description: 'UX + UI + HTML + SASS + JS + Jquery', 
                  caseStudy: 'https://docs.google.com/document/d/1zb3Zgfz1OQ8o1tVUXIsuBJWpPuHPHBFvTEqLwcXaCeE/edit?usp=sharing',
                  liveSite: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  github: 'https://github.com/Pearly-choong/zoneSmartHomeAutomation',
                  brief: 'ABC',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic3,
                  design: pic5 
                },
                {
                  id: 1,
                  imageUrl: portfolio2,
                  title: 'Stranger Things 3',
                  category: 'Web Design',
                  description: 'UX + UI + HTML + CSS + JS',
                  caseStudy: 'Not available',
                  liveSite: 'https://pearly-choong.github.io/tvShowWebsite/',
                  github: 'https://github.com/Pearly-choong/tvShowWebsite',
                  brief: 'def',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic2,
                  design: pic3  
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'Americanos Breakfast Restaurant',
                  category: 'Website Re-design',
                  description: 'UX + UI + HTML + SASS + JS',
                  caseStudy: 'Not available',
                  liveSite: 'https://pearly-choong.github.io/Formative1.2/',
                  github: 'https://github.com/Pearly-choong/Formative1.2',
                  brief: 'ghi',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic4,
                  wireframe: pic2,
                  design: pic3  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Meal Kit Delivery Service',
                  category: 'WordPress Custom Theme',
                  description: 'UX + UI + WordPress + PHP + WooCommerce',
                  caseStudy: 'https://drive.google.com/file/d/1EUlKgbdcT27heweOk3y_LrK2twmZGmYk/view?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/ebookApp/',
                  github: 'https://github.com/Pearly-choong/mealkit-service-wp-theme' , 
                  brief: 'jkl',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic2,
                  design: pic3
                },
                {
                  id: 4,
                  imageUrl: portfolio4,
                  title: 'Ebook App',
                  category: 'Web App Design',
                  description: 'UX + UI + HTML + SASS + JS',
                  caseStudy: 'https://docs.google.com/document/d/1Pc3RhdL5Ctr_TNIX0wpx-OOUOWHTmmk9EEpPZEKddqA/edit?usp=sharing',
                  liveSite: 'https://pearly-choong.github.io/ebookApp/',
                  github: 'https://github.com/Pearly-choong/ebookApp' , 
                  brief: 'lmn',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  myRole:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic2,
                  design: pic3
                }                   
            ]
        }
    }

    render(){
        console.log(this.state);
        const cardComponent = this.state.cards.map((card)=>{
            return (
               <PortfolioCard key={card.id} imgUrl={card.imageUrl} title={card.title} cat={card.category} 
               desc={card.description} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite} brief={card.brief}
               challenge={card.challenge} outcome={card.outcome} myRole={card.myRole} research={card.research} 
               wireframe={card.wireframe} design={card.design}/> 
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