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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 m-position" data-aos="fade-right">
                <img className="my-img-size" src={Img} alt="Pearly Choong"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 pt-5 px-5 mw-100" data-aos="fade-left">
                {/* <h1 className="display-3 text-color">PEARLY CHOONG</h1> */}
                {/* <h3 className="text-dark pb-3">WEB DESIGNER & DEVELOPER</h3> */}
                <h2>I'm Pearly :)</h2>
                <h2 className="my-title">A UI/UX designer <span role="img" aria-label="designer">👩🏻‍🎨</span> and developer <span role="img" aria-label="developer">👩🏻‍💻</span> with a particular interest in user experience design and future technologies. </h2>
                <br/>
                <p> I'm a passionate person when it comes to solving problems through design thinking and web development. I enjoy researching, planning, and development. I like working in a challenging environment, 
                    outside of my comfort zone, and have an innate desire to build user-interfaces that will intuitively solve problems and create a seamless experience for the end user.
                </p>
                <p>I graduated from <a className="home-link" href="https://www.yoobee.ac.nz/" target="_blank" rel="noopener noreferrer"><strong>Yoobee Colleges</strong></a>, Wellington with a diploma in <strong>Web and UX Design</strong>. 
                   I loved the human-centered design methods and processes I learned in my study and applied them to my projects. 
                    See my  <Link to="/Portfolio" className="home-link"><strong>projects</strong></Link>  or 
                    download my <a className="home-link" href="https://drive.google.com/file/d/14qxZB3HPx1v5Qz9J55J05wKQOZIQAOW8/view?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>resume</strong></a> to learn more about me.
                </p>
                <p>In my spare time, I love to travel, relax and read. I enjoy family time and catch up with friends whenever possible.</p>
              
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