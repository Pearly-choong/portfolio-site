import React from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import Img from '../../images/img01.jpg';
import Navigation from '../navigation/Navigation';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

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
    
          //   const myImg = {
          //   maxWidth: '100%',
          //   height: 'auto'
          //  // objectFit: 'cover'
          // }
          
          return(
         
          <div>
            <Navigation />
            <div className="home-container row">
              {/* <img style={myBackground} src={background} alt="background"/> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 text-center" data-aos="fade-right">
                <img className="my-img-size" src={Img} alt="Pearly Choong"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 pt-5 px-5 mw-100" data-aos="fade-left">
               
                {/* <h1 className="display-3 text-color">PEARLY CHOONG</h1> */}
                {/* <h3 className="text-dark pb-3">WEB DESIGNER & DEVELOPER</h3> */}
                
                <h2 className="my-title">I'm a product designer <span role="img" aria-label="designer">👩🏻‍🎨</span> and web developer <span role="img" aria-label="developer">👩🏻‍💻</span> , where I'm passionate about UI/UX design and web development. </h2>
                <br/>
                <p> I have learnt UX / UI design, front-end and back-end development at <a className="home-link" href="https://www.yoobee.ac.nz/" target="_blank" rel="noopener noreferrer">Yoobee Colleges</a>. 
                    In my two years at Yoobee College, I’ve completed a great deal of assignment on web development, design trends 
                    and best practices, including Programming Languages, Frameworks and Library, Principles of user Experience Design 
                    and Web Application Design.
                    See my  <Link to="/Portfolio" className="home-link">projects</Link>  or 
                    download my <a className="home-link" href="https://drive.google.com/file/d/1bOu8HIdF3uVLn8_SBcX9ejFHBOX5DQm9/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a> to learn more about me.
                    My website was hand coded and built with React 
                     <a className="home-link" href="https://github.com/Pearly-choong/portfolio-site" target="_blank" rel="noopener noreferrer"> view code in Github</a>
                </p>
                <p>On my spare time, I enjoy travelling, relaxing, watching movies and reading. I collected more recipes than I could cook them myself.
                    I love to eat, always exploring all kinds of foods, also from different countries. 
                    Enjoy family time and catch up with friends whenever possible. </p>
                <div className="float-left">
                <Footer/>  
                </div>
                        
              </div>
            </div>
            
          </div>
          
        );
    
    }
}


export default Home;