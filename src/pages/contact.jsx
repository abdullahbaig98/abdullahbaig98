import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
const  contact =  ()  =>{
    return<>
     
		<div className="container ">
		
			<div className="row justify-content-center bg-light w-80 ">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Get in touch</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4" style={{display:'none'}}>
				            Your message was sent, thank you!
				      		</div>
									<form  id="contactForm" name="contactForm" className="form contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" htmlfor="name"><b>Full Name</b></label>
													<input type="text" className="form-control " name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email"><b>Email Address</b></label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject"><b>Subject</b></label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#"><b>Message</b></label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
                          <br></br>
                          
													<input type="submit" value="Send Message" className="btn btn-success"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 d-flex align-items-stretch text-light">
								<div className="info-wrap bg-success w-100 p-md-5 p-3">
									<h3 style={{fontSize:'24px'}}>Let's get in touch</h3>
									<p className="mb-4" style={{fontSize:'12px'}}>We're open for any suggestion or just to have a chat</p>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{border:'1px solid white'}}>
								&ensp;<FontAwesomeIcon icon={faLocationDot} style={{fontSize:'15px'}}  ></FontAwesomeIcon>&ensp;
				        		</div>
				        		<div className="text pl-3">
					            <p>&ensp;&ensp;<span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{border:'1px solid white'}}>
								&ensp; <FontAwesomeIcon icon={faPhone} style={{fontSize:'12px'}}></FontAwesomeIcon>&ensp;
				        		</div>
				        		<div className="text pl-3">
					            <p><br></br>&ensp;<span>Phone:</span> + 1235 2355 98</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{border:'1px solid white'}}>
								&ensp; <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'15px'}}></FontAwesomeIcon>&ensp;
				        		</div>
				        		<div className="text pl-3">
					            <p><br></br>&ensp;<span>Email:</span> info@site.com</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{border:'1px solid white'}}>
								&ensp;<FontAwesomeIcon icon={faEarth} style={{ fontSize:'13px'}}></FontAwesomeIcon>&ensp;
				        		</div>
				        		<div className="text pl-3">
					            <p><br></br>&ensp;<span>Website</span> yoursite.com</p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

      
    </>
    }
    export default contact;