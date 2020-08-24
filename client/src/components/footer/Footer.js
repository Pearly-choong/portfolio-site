import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render(){
        return (
             <div className="my-background text-center">
                 {/* <hr className="break-line"></hr> */}
                 {/* <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6"> */}
                 <p className="pt-5">CONTACT ME at<a className="my-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></p>
                 <div className="social-icons py-3">
                     <a className="link linked" href="https://www.linkedin.com/in/pearly-choong/" target="_blank"><i className="fab fa-linkedin"></i></a>
                     <a className="link github" href="https://github.com/Pearly-choong" target="_blank"><i className="fab fa-github"></i></a>
                     <a className="link behance" href="https://www.behance.net/choongplf52b" target="_blank"><i className="fab fa-behance"></i></a>
                 </div>
                {/* </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6"> */}
                 <footer className="my-footer-bg pb-3 pt-5 px-1">
                     &copy; 2020 Designed and Developed by <a href="https://www.pearlychoong.com/">Pearly Choong</a> 
                </footer>
                {/* </div> */}
            </div>
        )
    } 
    

}

export default Footer;