import React from 'react';
import './Footer.scss';
import { FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa';


class Footer extends React.Component{
    render(){
        return (
             <div className="my-background">
                 <div className="pt-4 pb-2 contact-group">              
                     <a className="link mx-2" href="https://www.linkedin.com/in/pearly-choong/" target="_blank" rel="noopener noreferrer"><FaLinkedin/> </a>
                     <a className="link mx-2" href="https://github.com/Pearly-choong" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
                     <a className="link mx-2" href="https://www.behance.net/choongplf52b" target="_blank" rel="noopener noreferrer"> <FaBehance/></a>
                 </div>
                 <p className="pt-1">CONTACT ME at<a className="my-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></p>
                 <footer className="my-footer-bg pb-5">
                     &copy; 2020 Designed and Developed by <a href="https://www.pearlychoong.com/">Pearly Choong</a> 
                     <span role="img" aria-label="pointer"> &nbsp; 👉🏻 &nbsp; </span><a href="https://github.com/Pearly-choong/portfolio-site" rel="noopener noreferrer">
                        Code in Github
                     </a>
                </footer>
            </div>
        )
    } 
    

}

export default Footer;