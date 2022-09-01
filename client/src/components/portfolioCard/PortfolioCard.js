import React from 'react';
import ReactDOM from 'react-dom';
import './PortfolioCard.scss';
// *** NOT USING THIS COMP0NENTS ***

import ShowProject from '../showProject/ShowProject';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-has-link';

class PortfolioCard extends React.Component{
  
    showProject = ()=> {
        console.log('ShowProject');
        const showProjectSection = (
          <div> 
          <Navigation/>  
          {/* <Work/> */}
          <ShowProject title={this.props.title} category={this.props.cat} tag={this.props.tag} cStudy={this.props.cStudy} 
          img={this.props.imgUrl} liveSite={this.props.liveSite} github={this.props.github} brief={this.props.brief} overview={this.props.overview} 
          problem={this.props.problem} goal={this.props.goal} audience={this.props.audience} myRole={this.props.myRole} research={this.props.research} 
          analyse={this.props.analyse} design={this.props.design} design2={this.props.design2}/>
          <div className="text-center">
          <Footer/>
          </div>
          </div> 
        )
  
        ReactDOM.render(showProjectSection, document.getElementById('root'));
      }

      
   

    render(){
        // const showProjectSection2 = (
        //     <div> 
        //     <Navigation/>  
        //     {/* <Work/> */}
        //     <ShowProject title={this.props.title} category={this.props.cat} tag={this.props.tag} cStudy={this.props.cStudy} 
        //     img={this.props.imgUrl} liveSite={this.props.liveSite} github={this.props.github} brief={this.props.brief} overview={this.props.overview} 
        //     problem={this.props.problem} goal={this.props.goal} audience={this.props.audience} myRole={this.props.myRole} research={this.props.research} 
        //     analyse={this.props.analyse} design={this.props.design} design2={this.props.design2}/>
        //     <div className="text-center">
        //     <Footer/>
        //     </div>
        //     </div> 
        //   )
        return(
        
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5 pb-4" style={{width: '35rem'}}>
                <figure className="hover-content shadow">   
                    <img src={this.props.imgUrl} alt=""/>
                    <figcaption className="d-flex flex-column justify-content-center">
                        <h5>{this.props.title}</h5>
                        <p className="pt-1 tag-size">{this.props.tag}</p>
                        {/* <a className="pt-1" href={this.props.liveSite} target="_blank">View Project</a> */}
                        <button className="btn-link" onClick={this.showProject}>View Project</button>
                        {/* <Link to='/Portfolio-Project' className="btn-link">View Project</Link>  */}
                        <Link to={{ 
                            pathname:  '/Portfolio-Project' + this.showProject.id,
                            state: this.showProject
                        }}>
                            View Project 
                        </Link>
                        {/* <button className="btn-link" onClick={this.modal}>Case Study</button>                      */}
                        {/* <div className="d-flex flex-column justify-content-center pt-1">
                            <a href={this.props.liveSite} target="_blank">View Live Site</a>
                            <a href={this.props.cStudy} target="_blank">Case Study</a>
                        </div> */}
                    </figcaption>
                </figure>
                    {/* <h5 className="pl-2 pt-2">{this.props.cat}</h5>                   */}
            </div>
    
        )
       
    }
}

export default PortfolioCard;