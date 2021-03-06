import React, { useEffect } from 'react'
import projects from '../Assets/projects'
import ScrollToTop from '../Helpers/ScrollToTop'
import Cards from './Cards'

const Portfolio = () => {
	return(
		<div className="main-bg mt-5">
			<ScrollToTop />
			
			<div className="section-container">
				<div className="dots-container">
					<div id="dot-1" className="browser-dot"></div>
					<div id="dot-2" className="browser-dot"></div>
					<div id="dot-3" className="browser-dot"></div>
				</div>

				<h2>More Projects</h2>

				<Cards projects={projects} />

			</div>
		</div>
	)
}

export default Portfolio