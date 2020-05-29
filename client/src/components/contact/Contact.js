import React from 'react';
import './Contact.scss';
import nameCard from '../../images/mockupNamecard4a.png';
// import Form from 'react-bootstrap/Form';

class Contact extends React.Component {
    render(){
      const myNameCard = {
        width: '50%',
        height: '50%',
        margin: 'auto' 
      }  

          return(
            <div> 
              <div className="mt-5 mb-3 container">
                <h1 className="page-title">Contact Me</h1>        
              </div>   

              <div className="contact-content container px-5 text-center">
                {/* <img style={myNameCard} src={nameCard} alt="nameCard"/> */}
                  <h4>Email me at : <a className="text-underline contact-email" href="mailto:choongpl@gmail.com? subject=subject text">choongpl@gmail.com</a></h4>
                  <br></br>
              </div>

              {/* <div className="form-container mt-5 pt-5">
                <div className="container">
                  <h4 className="pb-3">Write a message</h4>
                  <p>If you have a question or just saying hi, please don’t hesitate to contact me with the contact above or fill in the form.</p>
                  <br></br>

                  <form action="" method="post" id="contactForm" name="contactForm">
                    <fieldset>
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-3">
                          <label for="contactName">Name <span className="required">*</span></label>
                          <input type="text" defaultValue="" size="35" id="contactName" className="rounded border-style" name="contactName"/>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-3">
                          <label for="contactEmail">Email <span className="required">*</span></label>
                          <input type="text" defaultValue="" size="35" id="contactEmail" className="rounded border-style" name="contactEmail"/>
                        </div>
                      </div>
                      <div className="pb-3">
                        <label for="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" className="rounded border-style" name="contactSubject"/>
                      </div>

                      <div className="pb-3">
                        <label for="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="40" rows="10" id="contactMessage" className="rounded border-style" name="contactMessage"></textarea>
                      </div>

                      <div className="pb-5">
                        <button className="submit my-btn">Submit</button>
                      </div>
                    </fieldset>
                  </form>

                </div>
              </div> */}
            </div>
        )
    
    }
}


export default Contact;