import React from 'react';
import './Project.scss';
import portfolio1 from '../../images/MockupMealKit.png';
import portfolio2 from '../../images/homeAtomation.png';
import portfolio3 from '../../images/treatme mockup2.png';
import portfolio4 from '../../images/MockupStrangerThings3.png';
// import PortfolioCard from '../portfolioCard/PortfolioCard';
import { Link } from 'react-router-dom';
//import ProjectBg from '../../images/strangerThings/blank.jpg';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

class Portfolio extends React.Component{



    render(){
       

        return(
          <div className="my-background">
            <Navigation />
            <div className="container">
              <div className="row pt-5 mx-0">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-3" style={{width: '35rem'}}>
                    <figure className="hover-content shadow">   
                        <img src={portfolio1} alt="images"/>
                        <figcaption className="d-flex flex-column justify-content-center">
                            <h5>Meal Kit Delivery Service</h5>
                            <p className="pt-1 tag-size">UX/UI + WordPress + PHP + WooCommerce + Bootstrap</p>
                            <Link to='/Portfolio-MealKit-Project' className="btn-link">View Project</Link>          
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5" style={{width: '35rem'}}>
                    <figure className="hover-content shadow">   
                        <img src={portfolio2} alt="images"/>
                        <figcaption className="d-flex flex-column justify-content-center">
                            <h5>Home Automation</h5>
                            <p className="pt-1 tag-size">UX/UI + HTML + SASS + Javascript + Jquery</p>
                            <Link to='/Portfolio-HomeAutomation-Project' className="btn-link">View Project</Link>          
                        </figcaption>
                    </figure>
                </div>
              </div>
              <div className="row py-5 mx-0">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                    <figure className="hover-content shadow">   
                        <img src={portfolio3} alt="images"/>
                        <figcaption className="d-flex flex-column justify-content-center">
                            <h5>Niche Market App</h5>
                            <p className="pt-1 tag-size">UX/UI + Bootstrap SASS, Javascript, JQuery, Node.js</p>
                            <Link to='/Portfolio-NicheMarketApp-Project' className="btn-link">View Project</Link>          
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                    <figure className="hover-content shadow">   
                        <img src={portfolio4} alt="images"/>
                        <figcaption className="d-flex flex-column justify-content-center">
                            <h5>Stranger Things 3</h5>
                            <p className="pt-1 tag-size">UX/UI + HTML + CSS + Javascript</p>
                            <Link to='/Portfolio-StrangerThings3-Project' className="btn-link">View Project</Link>          
                        </figcaption>
                    </figure>
                </div>
              </div>
            </div>
            <hr className="break-line"></hr>
            <div className="text-center">
             <Footer/>
            </div>
          </div>
        )
    }

}

export default Portfolio;