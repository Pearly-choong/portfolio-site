import React from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import background from '../../background.png';
import project1 from '../../images/MockupEbook.png';
import project2 from '../../images/MockupSchoc.png';
import project3 from '../../images/MockupTreatMe.png';
import Navigation from '../navigation/Navigation';
import Work from '../work/Work';
// import About from '../about/About';
import Footer from '../footer/Footer';
import Typical from 'react-typical';
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

    work = ()=> {
      console.log('Work');
      const workSection = (
        <div> 
        <Navigation/>  
        <Work/>
        <Footer/>
        </div> 
      )

      ReactDOM.render(workSection, document.getElementById('root'));
    }


    render(){
          const myBackground = {
            width: '100%',
            height: 'auto'
            // backgroundImage: `url(${background})`,
            //backgroundSize: 'cover',  
          }

          // const projectImg = {
          //   width: '100%',
          //   height: '300px',
          //   marginLeft: 'auto',
          //   marginRight: 'auto',
          //   marginBottom: '50px' 
          // }

          const projectImg = {
            width: '100%',
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '50px' 
          }
          
          const steps = [
            'Hi, I am Pearly. 👩🏻' , 1500,
            'I am UI/UX Designer. 👩🏻‍🎨 ', 1500,
            'I am Front-end Developer. 👩🏻‍💻', 1500,
            'I am based in Wellington, New Zealand. 🇳🇿', 1500,
            'Hi, I am Pearly. UI/UX Designer & Front-end Developer based in Wellington, New Zealand.', 2000
          ]

          return(
          // <div className="home-container" style={myBackground}>
          <div>
          <section id="sec1">
            <div className="home-container">
              <img style={myBackground} src={background} alt="background"/>
              <div className="intro">
                {/* <h2 className="intro__nameFont mill">
                  <span class="text-wrapper">
                    <span class="line line1"></span>
                    <span class="letters">Hi, I'm Pearly.</span>
                  </span>
                </h2> */}
                {/* <h2 className="intro__nameFont">Hi, I'm Pearly.</h2> */}
                <Typical wrapper="span" steps={steps} loop={1} className={'intro__titleFont'} />
                {/* <h1 className="intro__titleFont">UI/UX Designer & Front-end Developer based in Wellington, New Zealand.</h1> */}
                {/* <button className="my-btn" onClick={this.about}>More About Me</button> */}
              </div>
              <div className="indicator">
                <p className="pb-4">Selected works</p>           
                <span></span>
                <span></span>
                <span></span>
              </div>  
            </div>
          </section>
          <section id="sec2">
            <div className="container home-content py-5 text-center">
              <div className="container d-flex flex-column mb-5 pt-3 pb-5 m-auto">
                <img style={projectImg} src={project1} alt="image"/>
                <img style={projectImg} src={project2} alt="image"/>
                <img style={projectImg} src={project3} alt="image"/>
              </div>
                {/* <div className="container row">
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img style={projectImg} src={project1} alt="image"/>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img style={projectImg} src={project2} alt="image"/>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img style={projectImg} src={project3} alt="image"/>
                  </div>
              </div> */}
            <button className="my-btn mb-5" onClick={this.work}>See All Works</button>
            </div>

          </section> 
          </div>
        );
    
    }
}


export default Home;