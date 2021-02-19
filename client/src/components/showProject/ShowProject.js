import React from 'react';
import ReactDOM from 'react-dom';
import './ShowProject.scss';
import Navigation from '../navigation/Navigation';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';

class ShowProject extends React.Component {
    
  portfolio = ()=> {
    console.log('Portfolio');
    const portfolioSection = (
      <div> 
      <Navigation/>
      <Portfolio/>
      <div className="text-center">  
      <Footer/>
      </div>
      </div> 
    )

    ReactDOM.render(portfolioSection, document.getElementById('root'));
  }  

    render(){
          
          return(
          <div> 
            <div className="text-center mt-5 py-3">
              <h1 className="page-title">{this.props.title}</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img data-aos="fade-right" data-aos-duration="500" src={this.props.img} alt="Scenes" className="m-auto d-block col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" />
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" data-aos="fade-left" data-aos-duration="500">
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">{this.props.category}</h5> 
                  <p>{this.props.brief}</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : {this.props.tag}</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" href={this.props.github} target="_blank" rel="noopener noreferrer"><span><i className="fab fa-github pr-2"></i></span>Code in Github</a>
                  {/* <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p> */}
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href={this.props.liveSite} target="_blank" rel="noopener noreferrer"><span><i className="fab fa-chrome pr-2"></i></span>Live Site</a>
                </div>
              </div>
              </div>
                <div className="container text-left my-5">
                  <div data-aos="fade-up" data-aos-easing="linear">
                    <h4 className="pt-2 text-dark">Overview:  </h4>
                    <p>{this.props.overview}</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">My Role:  </h4>
                    <p>{this.props.myRole}</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">The Problem / Challenge:  </h4>
                    <p>{this.props.problem}</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Users & Audience:  </h4>
                    <p>{this.props.audience}</p>
                  </div>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h4 className="pt-5 text-dark">Project Goal:  </h4>
                    <p>{this.props.goal}</p>
                  </div>
                </div>
                <div className="info-container" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h4 className="pt-4 pl-3 text-dark">Design Process:  </h4>
                  <img src={this.props.research} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.analyse} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.design} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.design2} alt="Scenes" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.cStudy} target="_blank" rel="noopener noreferrer"><span><i className="far fa-file-pdf pr-2"></i></span>Read Full Documentation</a>
                </div>
                <div className="my-3 text-center d-flex justify-content-center wrapper py-5">
                <button className="btn-link py-2 px-4 project-link project-link-fs shadow p-3 mb-5 rounded" onClick={this.portfolio}><span>View Other Projects</span></button> 
                </div>
            </div>  
            <hr className="break-line"></hr>
          </div>
          
        )
    
    }
}


export default ShowProject;