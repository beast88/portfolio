import React from 'react'
import Form from 'react-bootstrap/Form'

import '../Styles/Contact.css'

const Contact = () => {
	return(
		<div className="section-container">
			<div className="dots-container">
				<div id="dot-1" className="browser-dot"></div>
				<div id="dot-2" className="browser-dot"></div>
				<div id="dot-3" className="browser-dot"></div>
			</div>

			<h2 id="contact">Contact</h2>

			<Form className="contact-form p-4 m-auto" name="contact-v1" method="POST" data-netlify="true" onSubmit="submit">
				<input type="hidden" name="form-name" value="contact-v1" />

				<h4>Send a message</h4>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control 
						type="text" 
						placeholder="Enter Here"
						name="name"
					/>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="example@email.com"
						name="email"
					/>
				</Form.Group>

				<Form.Group controlId="message">
					<Form.Label>Message</Form.Label>
					<Form.Control 
						as="textarea" 
						placeholder="Enter your message..."
						name="message" 
					/>
				</Form.Group>

				<button type="submit">Submit</button>
			</Form>

			<div className="more-contact m-auto p-4 d-flex flex-column flex-md-row justify-content-around">
				<div className="email-address mb-3 mb-md-0 align-self-start align-self-md-center">
					<h4>Email</h4>
					<div className="d-flex align-items-center"><i className="fa fa-envelope pr-2"></i><span>welshwebdev88@gmail.com</span></div>
				</div>

				<div className="github align-self-start align-self-md-center">
					<h4>Github</h4>
					<a href="https://github.com/beast88" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
				</div>
			</div>
		</div>
	)
}

export default Contact