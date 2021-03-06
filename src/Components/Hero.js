import React from 'react'
import '../Styles/Hero.css'
import Carousel from 'react-bootstrap/Carousel'

import images from '../Assets/images'

const Hero = () => {
	return(
		<div className="hero-bg" id="top">
			<div className="backdrop d-flex justify-content-center align-items-start">
				<div className="hero d-flex flex-column flex-md-row justify-content-around align-items-center">

					<div className="intro p-5 mb-4 mb-md-0">
						<h1>Paul Rogers</h1>
						<p>Front End Web Developer</p>
					</div>

					<Carousel className="justify-self-center">
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={images.html}
								alt="HTML" 
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className="d-block w-100"
								src={images.css}
								alt="CSS" 
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className="d-block w-100"
								src={images.js}
								alt="Javascript" 
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className="d-block w-100"
								src={images.react}
								alt="React" 
							/>
						</Carousel.Item>
					</Carousel>

				</div>
			</div>
		</div>
	)
}

export default Hero