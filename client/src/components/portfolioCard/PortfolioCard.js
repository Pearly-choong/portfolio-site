import React from 'react';
// import ReactDOM from 'react-dom';
import './PortfolioCard.scss';

class PortfolioCard extends React.Component{
    render(){
        return(
            // <div id="greyscale" className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-3" style={{width: '25rem'}}>
            //     <img src={this.props.imgUrl} className="card-img-top" alt="Image"/>
            // </div>
            
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                <figure className="hover-content shadow">   
                    <img src={this.props.imgUrl} alt="Image"/>
                    <figcaption className="d-flex flex-column justify-content-center">
                        <h5>{this.props.title}</h5>
                        <p className="pt-1">{this.props.desc}</p>
                        <a className="pt-1" href={this.props.liveSite} target="_blank">View Project</a>
                        {/* <div className="d-flex flex-column justify-content-center pt-1">
                            <a href={this.props.liveSite} target="_blank">View Live Site</a>
                            <a href={this.props.cStudy} target="_blank">Case Study</a>
                        </div> */}
                    </figcaption>
                </figure>
                    <h5 className="pl-2 pt-2">{this.props.cat}</h5>  
            </div>
        
        )
       
    }
}

export default PortfolioCard;