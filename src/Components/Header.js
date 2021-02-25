import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { HashLink } from 'react-router-hash-link'

import '../Styles/Header.css'

const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="">Welsh Web Dev</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
					<Nav>
						<Nav.Link as={HashLink} smooth to="/#top" className="ml-4">Home</Nav.Link>
						<Nav.Link as={HashLink} smooth to="/#portfolio" className="ml-4">Portfolio</Nav.Link>
						<Nav.Link as={HashLink} smooth to="/#contact" className="ml-4">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)

}

export default Header