import React from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import background from '../../bg.png';
import Img from '../../images/img01.jpg';
import Navigation from '../navigation/Navigation';
import Project from '../showProject/ShowProject';
import Portfolio from '../portfolio/Portfolio';
// import About from '../about/About';
import Footer from '../footer/Footer';
import Typical from 'react-typical';
// import BackToTop from 'react-back-to-top-button';

// import "../../shared/_mediaQuery.scss";

class Home extends React.Component {
    // about = ()=> {
    //   console.log('About');
    //   const workSection = (
    //     <div> 
    //     <Navigation/>  
    //     <About/>
    //     <Footer/>
    //     </div> 
    //   )

    //   ReactDOM.render(workSection, document.getElementById('root'));
    // }  

    // work = ()=> {
    //   console.log('Work');
    //   const workSection = (
    //     <div> 
    //     <Navigation/>  
    //     <Work/>
    //     <Footer/>
    //     </div> 
    //   )

    //   ReactDOM.render(workSection, document.getElementById('root'));
    // }
    portfolio = ()=> {
      console.log('Portfolio');
      const portfolioSection = (
        <div> 
        <Navigation/>  
        <Portfolio/>
        <Footer/>
        </div> 
      )

      ReactDOM.render(portfolioSection, document.getElementById('root'));
    }  


    render(){
          // const myBackground = {
          //   width: '100%',
          //   height: 'auto'
          // }

            const myImg = {
            maxWidth: '100%',
            height: 'auto'
           // objectFit: 'cover'
          }

          
          // const steps = [
          //   // 'Hi, I am Pearly. 👩🏻 Web Designer 👩🏻‍🎨 & Web Developer 👩🏻‍💻 based in Wellington, New Zealand.' , 1500,
          //   'Hello, my name is Pearly. 👩🏻' , 1500,
          //   'I am a Web Designer. 👩🏻‍🎨 ', 1500,
          //   'I am a Web Developer. 👩🏻‍💻', 1500,
          //   'Based in Wellington, New Zealand. 🇳🇿', 1500,
          //   'Hello, my name is Pearly. Web Designer and Developer based in Wellington, New Zealand.', 2000
          // ]

          return(
          // <div className="home-container" style={myBackground}>
          <div>
            <div className="home-container row">
              {/* <img style={myBackground} src={background} alt="background"/> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <img className="d-block" style={myImg} src={Img} alt="image"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 py-5 px-5 mw-100">
               
                {/* <h1 className="display-3 text-color">PEARLY CHOONG</h1> */}
                {/* <h3 className="text-dark pb-3">WEB DESIGNER & DEVELOPER</h3> */}
                
                <h2 className="my-title">I'm a web designer 👩🏻‍🎨 and developer 👩🏻‍💻 , where I'm passionate about UI/UX design and web development. </h2>
                <br/>
                 
                <p> I have learnt UX / UI design, front-end and back-end development at <a className="home-link" href="https://www.yoobee.ac.nz/" target="_blank">Yoobee Colleges</a>. 
                    In my two years at Yoobee College, I’ve completed a great deal of assignment on web development, design trends 
                    and best practices, including Programming Languages, Frameworks and Library, Principles of user Experience Design 
                    and Web Application Design.
                    See my<button className="btn-link home-link" onClick={this.portfolio}> &nbsp;projects</button> or download my <a className="home-link" href="https://drive.google.com/file/d/1pyzoEhF1-LQusQRa-fKU5Agi_fMyBArg/view?usp=sharing" target="_blank" target="_blank">CV</a> to learn more about me.
                    My website was hand coded and built with React 
                     <a className="home-link" href="https://github.com/Pearly-choong/portfolio-site" target="_blank"> view code in Github</a>
                </p>
                <p>In my spare time I enjoy travelling, relaxing, watching movies and reading. I collected more recipes than I could cook them myself.
                    I love to eat, always exploring all kinds of foods, also from different countries. I also like to watch some funny variety shows to relax from stress.
                    Enjoy family time and catch up with friends whenever possible. </p>
                <div className="float-left text-left">
                <Footer/>  
                </div>  
                {/* <div className="row footer-container">
                <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                <p className="mt-5">CONTACT ME at <a className="my-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></p>
                 <div className="social-icons py-3 mb-5">
                     <a className="link linked" href="https://www.linkedin.com/in/pearly-choong/" target="_blank"><i className="fab fa-linkedin"></i></a>
                     <a className="link github" href="https://github.com/Pearly-choong" target="_blank"><i className="fab fa-github"></i></a>
                     <a className="link behance" href="https://www.behance.net/choongplf52b" target="_blank"><i className="fab fa-behance"></i></a>
                 </div>
                 </div>
                 <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                 <footer className="my-footer-bg px-1">
                     &copy; 2020 Designed and Developed by Pearly Choong
                </footer>
                </div>
                </div> */}
                 {/* <div className="col-lg-6">
                 <img style={myImg} src={Img} alt="image"/>
                 </div> */}
                {/* <h2 className="intro__nameFont mill">
                  <span class="text-wrapper">
                    <span class="line line1"></span>
                    <span class="letters">Hi, I'm Pearly.</span>
                  </span>
                </h2> */}
                {/* <h2 className="intro__nameFont">Hi, I'm Pearly.</h2> */}
                {/* <Typical wrapper="span" steps={steps} loop={1} className={'intro__titleFont'} /> */}
                {/* <h1 className="intro__titleFont">UI/UX Designer & Front-end Developer based in Wellington, New Zealand.</h1> */}
                {/* <button className="my-btn" onClick={this.about}>More About Me</button> */}
              </div>
              {/* <div className="indicator">
                <p className="pb-4">Selected Projects</p>           
                <span></span>
                <span></span>
                <span></span>
              </div>   */}
            </div>
            
          {/* <section id="sec2"> 
            <div className="container home-content">
           
            <Portfolio/>
              
            </div>
          
          </section>  */}
          </div>
          
        );
    
    }
}


export default Home;