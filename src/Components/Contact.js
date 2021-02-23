import React, { useState } from 'react'

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

			<div className="form-container">
				<form className="contact-form">
					<div className="form-control">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							value={name}
						/>
					</div>

					<div className="form-control">
						<label for="email">Email Address</label>
						<input
							type="text"
							name="email"
							value={email}
						/>
					</div>

					<div className="form-control">
						<label for="message">Enter your message</label>
						<textarea
							name="message"
							value={message}
						/>
					</div>

					<div className="form-control">
						<button>Submit</button>
					</div>

				</form>
			</div>
		</div>
	)
}

export default Contact