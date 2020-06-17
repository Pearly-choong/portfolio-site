import React from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import background from '../../background.png';
import Navigation from '../navigation/Navigation';
import Work from '../work/Work';
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
            <div className="container home-content">
            {/* <div className="text-center mt-5 mb-3 py-3">
              <h1 className="page-title">Portfolio</h1>        
            </div> */}
            <Portfolio/>
              
            {/* <button className="my-btn mb-5" onClick={this.work}>See All Works</button> */}
            </div>
            {/* <BackToTop
              showOnScrollUp
              showAt={1000}
              speed={1500}
              easing="easeInOutQuint"
            >
              <span className="back-to-top">Back to top</span>
             </BackToTop>  */}
          </section> 
          </div>
        );
    
    }
}


export default Home;