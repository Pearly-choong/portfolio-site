import React from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import Img from '../../images/img01.jpg';
import Navigation from '../navigation/Navigation';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';


class Home extends React.Component {

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
    

            const myImg = {
            maxWidth: '100%',
            height: 'auto'
           // objectFit: 'cover'
          }



          return(
         
          <div>
            <div className="home-container row">
              {/* <img style={myBackground} src={background} alt="background"/> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                <img className="d-block my-img-size" style={myImg} src={Img} alt="image"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 py-5 px-5 mw-100">
               
                {/* <h1 className="display-3 text-color">PEARLY CHOONG</h1> */}
                {/* <h3 className="text-dark pb-3">WEB DESIGNER & DEVELOPER</h3> */}
                
                <h2 className="my-title">I'm a web designer 👩🏻‍🎨 and developer 👩🏻‍💻 , where I'm passionate about UI/UX design and web development. </h2>
                <br/>
                 
                <p> I have learnt UX / UI design, front-end and back-end development at <a className="home-link" href="https://www.yoobee.ac.nz/" target="_blank">Yoobee Colleges</a>. 
                    In my two years at Yoobee College, I’ve completed a great deal of assignment on web development, design trends 
                    and best practices, including Programming Languages, Frameworks and Library, Principles of user Experience Design 
                    and Web Application Design.
                    See my<button className="btn-link home-link" onClick={this.portfolio}> &nbsp;projects</button> or 
                    download my <a className="home-link" href="https://drive.google.com/file/d/1Nnj7VsxdEBL6LoyRUj04jZrBBh_eqty4/view?usp=sharing" target="_blank" target="_blank">CV</a> to learn more about me.
                    My website was hand coded and built with React 
                     <a className="home-link" href="https://github.com/Pearly-choong/portfolio-site" target="_blank"> view code in Github</a>
                </p>
                <p>On my spare time, I enjoy travelling, relaxing, watching movies and reading. I collected more recipes than I could cook them myself.
                    I love to eat, always exploring all kinds of foods, also from different countries. 
                    Enjoy family time and catch up with friends whenever possible. </p>
                <div className="float-left">
                <Footer/>  
                </div>
                
               
              </div>
              {/* <div className="indicator">
                <p className="pb-4">Selected Projects</p>           
                <span></span>
                <span></span>
                <span></span>
              </div>   */}
            </div>
            
          </div>
          
        );
    
    }
}


export default Home;