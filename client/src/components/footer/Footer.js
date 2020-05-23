import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render(){
        return (
             <div className="my-footer-bg py-5 mt-5 text-center">
                 <p>CONTACT ME: <a className="my-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></p>
                 <div className="social-icons py-3">
                     <a className="link linked" href="https://www.linkedin.com/in/pearly-choong/" target="_blank"><i className="fab fa-linkedin"></i></a>
                     <a className="link github" href="https://github.com/Pearly-choong" target="_blank"><i className="fab fa-github"></i></a>
                     <a className="link instagram" href="https://www.instagram.com/pearly_cpl/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                 </div>
                 <footer className= "pt-4 px-1">
                     This website was built with React.js 
                     <a href="https://github.com/Pearly-choong/portfolio-site" target="_blank"> Website on Github</a><br/>
                     &copy; Copyright 2020 Pearly Choong. All rights reserved | Designed and Developed by Pearly Choong 
                </footer>
            </div>
        )
    } 
    

}

export default Footer;