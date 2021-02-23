import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

import '../Styles/Contact.css'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	return(
		<div className="section-container">
			<div className="dots-container">
				<div id="dot-1" className="browser-dot"></div>
				<div id="dot-2" className="browser-dot"></div>
				<div id="dot-3" className="browser-dot"></div>
			</div>

			<h2>Contact</h2>

			<Form className="w-50 p-4 m-auto">
				<h4>Send a message</h4>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control 
						type="text" 
						placeholder="Enter Here"
						name="name"
						value={name} 
					/>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="example@email.com"
						name="email"
						value={email} 
					/>
				</Form.Group>

				<Form.Group controlId="message">
					<Form.Label>Message</Form.Label>
					<Form.Control 
						as="textarea" 
						placeholder="Enter your message..."
						name="message"
						value={email} 
					/>
				</Form.Group>

				<button>Submit</button>
			</Form>

			<div className="more-contact w-50 m-auto">
				<h4>Email</h4>
				<p>welshwebdev88@gmail.com</p>
			</div>
		</div>
	)
}

export default Contact