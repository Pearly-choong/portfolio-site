import React from 'react';
// import ReactDOM from 'react-dom';
import './ShowProject.scss';
import Portfolio from '../portfolio/Portfolio';
import Modal from '../modal/Modal';
// import $ from 'jquery';

class ShowProject extends React.Component {
    
  

    render(){
   
          return(
          <div> 
            <div className="text-center mt-5 mb-3 py-3">
              <h1 className="page-title">{this.props.title}</h1>        
            </div>   
            <div className="portfolio-content container">
              {/* <Portfolio/> */}
              <div className="row">
              <img src={this.props.img} alt="Scenes" className="m-auto d-block col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" />
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4">
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href={this.props.github} target="_blank"><span><i className="fab fa-github pr-2"></i></span>Code in Github</a>
                  <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href={this.props.liveSite} target="_blank"><span><i className="fab fa-chrome pr-2"></i></span>Live Site</a>
                </div>
              </div>
              </div>
                <h1 className="pl-5 pt-5">Overview </h1>
                <div className="container text-left mt-5">
                  <h5>{this.props.tag}</h5>
                  <h4 className="pt-4">Tool Used: </h4>
                  <p>{this.props.toolUsed}</p>
                  <h4 className="pt-2">Project Brief / Problem: </h4>
                  <p>{this.props.brief}</p>
                  <h4 className="pt-2">Challenge:  </h4>
                  <p>{this.props.challenge}</p>
                  <h4 className="pt-2 ">Outcome: </h4>
                  <p >{this.props.outcome}</p>
                  <h4 className="pt-2">What I did:  </h4>
                  <p>{this.props.myRole}</p>
                </div>
                <div className="my-5">
                  <h1 className="py-2 pl-5">Research </h1>
                  <img src={this.props.research} alt="Scenes" className="w-100 m-auto d-block" />
                </div>
                <div className="my-5">
                  <h1 className="py-2 pl-5">Analyze: </h1>
                  <img src={this.props.analyse} alt="Scenes" className="w-100 m-auto d-block" />
                </div>
                <div className="my-5">
                  <h1 className="py-2 pl-5">Design: </h1>
                  <img src={this.props.design} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.design2} alt="Scenes" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.cStudy} target="_blank"><span><i className="far fa-file-pdf pr-2"></i></span>Read Full Documentation</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.github} target="_blank"><span><i className="fab fa-github pr-2"></i></span>View On Github</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.liveSite} target="_blank"><span><i className="fab fa-chrome pr-2"></i></span>View Live Site</a>
                </div>
            </div>  
          </div>
          
        )
    
    }
}


export default ShowProject;