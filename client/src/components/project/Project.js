import React from 'react';
import './Project.scss';
import portfolio1 from '../../images/MockupMealKit.png';
import portfolio2 from '../../images/homeAtomation.png';
import portfolio3 from '../../images/MockupTreatMe1.png';
import portfolio4 from '../../images/MockupStrangerThings3.png';
import portfolio5 from '../../images/MockupAG.png';
import portfolio6 from '../../images/MockupUXWG.png';
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
            <div className="container-fluid">
                <div className="row pt-5 mx-0">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-3" style={{width: '35rem'}}>
                    <Link to='/Portfolio-AngusRobertson-Project'>
                    <figure className="hover-content shadow">  
                        <img src={portfolio5} alt="images"/>
                    </figure>
                    </Link> 
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">Angus & Robertson</h4>
                        <p className="tag-size">UX/UI, Web Design</p>
                        <p className="my-color"><Link to='/Portfolio-AngusRobertson-Project' className="home-link"><strong>Read Case Study </strong></Link> ➞</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5" style={{width: '35rem'}}>
                    <Link to='/Portfolio-UxWellington-Project'>
                    <figure className="hover-content shadow">   
                        <img src={portfolio6} alt="images"/>
                    </figure>
                    </Link>
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">UX Wellington </h4>
                        <p className="tag-size">User Research</p>
                        <p className="my-color"><Link to='/Portfolio-UxWellington-Project' className="home-link"><strong>Read Case Study </strong></Link> ➞</p>
                    </div>
                </div>
              </div>
              <div className="row pt-5 mx-0">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-3" style={{width: '35rem'}}>
                <Link to='/Portfolio-HomeAutomation-Project'>
                    <figure className="hover-content shadow">   
                        <img src={portfolio2} alt="images"/>
                        {/* <figcaption className="d-flex flex-column justify-content-center">
                            <h5>Home Automation</h5>
                            <p className="pt-1 tag-size">UX/UI + HTML5 + SASS + JavaScript + Jquery</p>
                            <Link to='/Portfolio-HomeAutomation-Project' className="btn-link">View Project</Link>          
                        </figcaption> */}
                    </figure>
                    </Link>
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">Home Automation</h4>
                        <p className="tag-size">UX/UI, Web App Design, Front-end Develoment</p>
                        <p className="my-color"><Link to='/Portfolio-HomeAutomation-Project' className="home-link"><strong>Read Case Study </strong></Link> ➞</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5" style={{width: '35rem'}}>
                <Link to='/Portfolio-MealKit-Project'>
                    <figure className="hover-content shadow">   
                        <img src={portfolio1} alt="images"/>
                    </figure>
                    </Link>
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">Meal Kit Delivery</h4>
                        <p className="tag-size">UX/UI, Web Design, CMS (WordPress)</p>
                        <p className="my-color"><Link to='/Portfolio-MealKit-Project' className="home-link"><strong>Read Case Study </strong></Link> ➞</p>
                    </div>
                    
                </div>
              </div>
              <div className="row py-5 mx-0">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                    <Link to='/Portfolio-NicheMarketApp-Project'>
                    <figure className="hover-content shadow">   
                        <img src={portfolio3} alt="images"/>
                    </figure>
                    </Link>
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">Niche Market App</h4>
                        <p className="tag-size">UX/UI, Web App Design, Full Stack Web Development</p>
                        <p className="my-color"><Link to='/Portfolio-NicheMarketApp-Project' className="home-link"><strong>Read Case Study </strong></Link> ➞</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                    <Link to='/Portfolio-StrangerThings3-Project'>
                    <figure className="hover-content shadow">   
                        <img src={portfolio4} alt="images"/>
                    </figure>
                    </Link>
                    <div className="pl-3">
                        <h4 className="pt-3 title-font">Stranger Things 3</h4>
                        <p className="tag-size">UX/UI, Web Design, Front-end Development</p>
                        <p className="my-color"><Link to='/Portfolio-StrangerThings3-Project' className="home-link"><strong>View Project </strong></Link> ➞</p>
                    </div>
                </div>
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


export default Portfolio;

