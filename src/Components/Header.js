import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../Styles/Header.css'

const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="">Welsh Web Dev</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
					<Nav>
						<Nav.Link className="ml-4" href="">Home</Nav.Link>
						<Nav.Link className="ml-4" href="">Portfolio</Nav.Link>
						<Nav.Link className="ml-4" href="">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)

}

export default Header