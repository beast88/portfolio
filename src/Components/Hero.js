import React from 'react'
import '../Styles/Hero.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'

import images from '../Assets/images'

const Hero = () => {
	return(
		<div className="hero-bg">
			<Container className="hero">
				<Row>

					<Col>
						<Jumbotron>
							<h1>Paul Rogers</h1>
							<p>Front End Web Developer</p>
						</Jumbotron>
					</Col>

					<Col>
						<Carousel>
							<Carousel.Item>
								<img
									className="d-block w-800"
									src={images.html}
									alt="HTML" 
								/>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className="d-block w-800"
									src={images.css}
									alt="CSS" 
								/>
							</Carousel.Item>
						</Carousel>
					</Col>

				</Row>
			</Container>
		</div>
	)
}

export default Hero