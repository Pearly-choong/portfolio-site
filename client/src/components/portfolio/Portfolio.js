import React from 'react';
import portfolio1 from '../../images/homeAtomation.png';
import portfolio2 from '../../images/marketingWebsite.jpg';
import portfolio3 from '../../images/MockupTreatMe.png';
import portfolio4 from '../../images/ebookApp2.png';
import PortfolioCard from '../portfolioCard/PortfolioCard';

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
                  github: '' 
                },
                {
                  id: 1,
                  imageUrl: portfolio2,
                  title: 'Schoc Website',
                  category: 'Website Redesign',
                  description: 'UX + UI + HTML + CSS + JS',
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: '',
                  github: ''  
                },
                {
                  id: 2,
                  imageUrl: portfolio3,
                  title: 'TreatMe App',
                  category: 'C2C Nich Market App',
                  description: 'UX + UI + HTML + SASS + JS + Nodejs + API',
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: '',
                  github: ''  
                },
                {
                  id: 3,
                  imageUrl: portfolio4,
                  title: 'Ebook App',
                  category: 'Web App Design',
                  description: 'UX + UI + HTML + SASS + JS',
                  caseStudy: 'https://www.behance.net/gallery/82015621/Boutique-chocolate-website',
                  liveSite: '',
                  github: ''   
                }               
            ]
        }
    }

    render(){
        console.log(this.state);
        const cardComponent = this.state.cards.map((card)=>{
            return (
               <PortfolioCard key={card.id} imgUrl={card.imageUrl} title={card.title} cat={card.category} 
               desc={card.description} cStudy={card.caseStudy} github={card.github} liveSite={card.liveSite}/> 
            )
        })

        console.log(cardComponent);

        return(
            <div className="row">
                {cardComponent}
            </div>
        )
    }

}

export default Portfolio;