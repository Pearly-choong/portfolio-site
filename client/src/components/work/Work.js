import React from 'react';
// import ReactDOM from 'react-dom';
import './Work.scss';
import Portfolio from '../portfolio/Portfolio';

import $ from 'jquery';

class Work extends React.Component {
    
  

    render(){
   
          return(
          <div> 
            <div className="text-center mt-5 mb-3 py-3">
              <h1 className="page-title">Portfolio</h1>        
            </div>   
            <div className="portfolio-content px-5 py-5 bg-dark">
              <Portfolio/>
            </div>  
          </div>
          
        )
    
    }
}


export default Work;