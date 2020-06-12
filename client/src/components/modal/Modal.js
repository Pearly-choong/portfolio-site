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
            <div className="modal-content bg-dark">
              <div className="modal-header bg-light">
                <h5 className="modal-title text-center display-4">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={this.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={this.props.img} alt="Scenes" className="img-thumbnail m-auto d-block" />
                <p className="text-center pt-2 text-light">{this.props.description}</p>
                <p className="text-left pt-2 text-light">Client: {this.props.client}</p>
                <p className="text-center pt-2 text-light">Approach: {this.props.approach}</p>
                <img src={this.props.research} alt="Scenes" className="img-thumbnail m-auto d-block" />
                <img src={this.props.wireframe} alt="Scenes" className="img-thumbnail m-auto d-block" />
                <img src={this.props.design} alt="Scenes" className="img-thumbnail m-auto d-block" />
              </div>
              <div className="modal-footer">
                <a className="pt-1" href={this.props.github} target="_blank">View On Github</a>
                <a className="pt-1" href={this.props.liveSite} target="_blank">View Live Site</a>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.close}>Close</button>
              </div>
            </div>
            
      )
    }

}


export default Modal;