import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render(){
        return (
             <div className="text-center">
                 <hr className="break-line"></hr>
                 <p className="mt-5">CONTACT ME: <a className="my-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></p>
                 <div className="social-icons py-3">
                     <a className="link linked" href="https://www.linkedin.com/in/pearly-choong/" target="_blank"><i className="fab fa-linkedin"></i></a>
                     <a className="link github" href="https://github.com/Pearly-choong" target="_blank"><i className="fab fa-github"></i></a>
                     <a className="link instagram" href="https://www.instagram.com/pearly_cpl/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                 </div>
                 <footer className="my-footer-bg pb-3 pt-5 px-1">
                     This website was built with React.js 
                     <a href="https://github.com/Pearly-choong/portfolio-site" target="_blank"> Website on Github</a><br/>
                     &copy; 2020 Pearly Choong | Designed and Developed by <a href="https://www.pearlychoong.com"> Pearly Choong</a>
                </footer>
            </div>
        )
    } 
    

}

export default Footer;