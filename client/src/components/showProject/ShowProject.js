import React from 'react';
import './ShowProject.scss';

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
                <div className="row px-3 pt-5">
                  <h5 className="my-title font-weight-bold">{this.props.category}</h5> 
                  <p>{this.props.brief}</p><br/>
                  <hr className="break-line"></hr>
                  <p>Skills : {this.props.tag}</p><br/>
                </div>
                <div className="my-4 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" href={this.props.github} target="_blank"><span><i className="fab fa-github pr-2"></i></span>Code in Github</a>
                  <p className="text-muted col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">Live Site Coming Soon</p>
                  {/* <a className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" href={this.props.liveSite} target="_blank"><span><i className="fab fa-chrome pr-2"></i></span>Live Site</a> */}
                </div>
              </div>
              </div>
                <div className="container text-left mt-5">
                  <h4 className="pt-2 text-dark">What I did:  </h4>
                  <p>{this.props.myRole}</p>
                </div>
                <div className="info-container">
                  <img src={this.props.research} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.analyse} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.design} alt="Scenes" className="w-100 m-auto d-block" />
                  <img src={this.props.design2} alt="Scenes" className="w-100 m-auto d-block" />
                </div>
                <div className="my-3 text-center row my-links">
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.cStudy} target="_blank"><span><i className="far fa-file-pdf pr-2"></i></span>Read Full Documentation</a>
                </div>
            </div>  
            <hr className="break-line"></hr>
          </div>
          
        )
    
    }
}


export default ShowProject;