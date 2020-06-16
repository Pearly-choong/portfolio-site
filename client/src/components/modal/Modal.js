import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/Home';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import BackToTop from 'react-back-to-top-button';

class Modal extends React.Component{
    close = ()=> {
        console.log('Home');
        const homeSection = (
          <div> 
          <Navigation/>  
          <Home/>
          <Footer/>
          </div> 
        )
    
        ReactDOM.render(homeSection, document.getElementById('root'));
      }

    // close = () => {
    //     ReactDOM.render(<Home/>, document.getElementById('root'));
    //   }
    
      render(){
        console.log('Modal');
        return (
            <div className="modal-content bg-dark">
              <div className="modal-header bg-light">
                <h5 className="modal-title text-center display-4">{this.props.category}</h5>
                <button type="button" className="close"data-dismiss="modal" onClick={this.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={this.props.img} alt="Scenes" className="img-thumbnail m-auto d-block" />
                <div className="container text-left text-light mt-5">
                  <h5 className="py-2 text-light">Tools & Creative Field: {this.props.description}</h5>
                  <h4 className="pt-2">Project Brief / Problem: </h4>
                  <p>{this.props.brief}</p>
                  <h4 className="pt-2">Challenge:  </h4>
                  <p>{this.props.challenge}</p>
                  <h4 className="pt-2">Outcome: </h4>
                  <p >{this.props.outcome}</p>
                  <h4 className="pt-2">My Role:  </h4>
                  <p>{this.props.myRole}</p>
                </div>
                <div className="container-fluid my-5">
                  <h4 className="pt-2">Research </h4>
                  <img src={this.props.research} alt="Scenes" className="img-thumbnail m-auto d-block" />
                </div>
                <div className="container-fluid my-5">
                  <h4 className="pt-2">Wireframes: </h4>
                  <img src={this.props.wireframe} alt="Scenes" className="img-thumbnail m-auto d-block" />
                </div>
                <div className="container-fluid my-5">
                  <h4 className="pt-2">Design: </h4>
                  <img src={this.props.design} alt="Scenes" className="img-thumbnail m-auto d-block" />
                </div>
                <div className="mt-3 text-center row">
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.cStudy} target="_blank">Read Full Documentation</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.github} target="_blank">View On Github</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.liveSite} target="_blank">View Live Site</a>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <div className="my-3">
                  <button type="button" className="btn btn-secondary w-100 px-5 text-center" data-dismiss="modal" onClick={this.close}>Close</button>
                </div>
              <BackToTop
              showOnScrollUp
              showAt={1000}
              speed={1500}
              easing="easeInOutQuint"
            >
              <span className="back-to-top"></span>
             </BackToTop> 
              </div>
            </div>
            
      )
    }

}


export default Modal;