import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/Home';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

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
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title text-center">{this.props.category}</h1>
                <button type="button" className="close"data-dismiss="modal" onClick={this.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={this.props.img} alt="Scenes" className="img-thumbnail m-auto d-block" />
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
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.cStudy} target="_blank"><span><i class="far fa-file-pdf pr-2"></i></span>Read Full Documentation</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.github} target="_blank"><span><i class="fab fa-github pr-2"></i></span>View On Github</a>
                  <a className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" href={this.props.liveSite} target="_blank"><span><i class="fab fa-chrome pr-2"></i></span>View Live Site</a>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <div className="mb-3">
                  <button type="button" className="btn btn-primary w-100 px-5 text-center" data-dismiss="modal" onClick={this.close}>Close</button>
                </div>
              </div>
            </div>
            
      )
    }

}


export default Modal;