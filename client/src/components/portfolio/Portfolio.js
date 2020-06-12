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
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: '',
                  github: '',
                  client: 'ABC',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  approach:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic3,
                  design: pic5 
                },
                {
                  id: 1,
                  imageUrl: portfolio2,
                  title: 'Schoc Website',
                  category: 'Website Redesign',
                  description: 'UX + UI + HTML + CSS + JS',
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: '',
                  github: '',
                  client: 'DEF',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  approach:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic1,
                  wireframe: pic2,
                  design: pic3  
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'TreatMe App',
                  category: 'C2C Nich Market App',
                  description: 'UX + UI + HTML + SASS + JS + Nodejs + API',
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: 'http://159.89.237.235/',
                  github: '',
                  client: 'GHI',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  approach:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  research: pic4,
                  wireframe: pic2,
                  design: pic3  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Ebook App',
                  category: 'Web App Design',
                  description: 'UX + UI + HTML + SASS + JS',
                  caseStudy: '',
                  liveSite: 'https://pearly-choong.github.io/tvShowWebsite/',
                  github: 'https://github.com/Pearly-choong/tvShowWebsite' , 
                  client: 'JKL',
                  challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  approach:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  outcome:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
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
               desc={card.description} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite}
               client={card.client} challenge={card.challenge} approach={card.approach} outcome={card.outcome}
               research={card.research} wireframe={card.wireframe} design={card.design}/> 
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