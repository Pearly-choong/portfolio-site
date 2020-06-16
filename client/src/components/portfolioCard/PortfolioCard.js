import React from 'react';
import ReactDOM from 'react-dom';
import './PortfolioCard.scss';
import Modal from '../modal/Modal';


class PortfolioCard extends React.Component{

    modal = ()=> {
        const modalContent = (
          <Modal title={this.props.title} category={this.props.cat} description={this.props.desc} cStudy={this.props.cStudy} img={this.props.imgUrl} liveSite={this.props.liveSite} github={this.props.github} brief={this.props.brief} challenge={this.props.challenge}
          outcome={this.props.outcome} myRole={this.props.myRole} research={this.props.research} wireframe={this.props.wireframe} design={this.props.design}/>
        )
        ReactDOM.render(modalContent, document.getElementById('root'));
      }

    render(){
        return(
            // <div id="greyscale" className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-3" style={{width: '25rem'}}>
            //     <img src={this.props.imgUrl} className="card-img-top" alt="Image"/>
            // </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                <figure className="hover-content shadow">   
                    <img src={this.props.imgUrl} alt="Image"/>
                    <figcaption className="d-flex flex-column justify-content-center">
                        <h5>{this.props.title}</h5>
                        <p className="pt-1">{this.props.desc}</p>
                        <a className="pt-1" href={this.props.liveSite} target="_blank">View Project</a>
                        <button className="btn-link" onClick={this.modal}>Case Study</button>                     
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