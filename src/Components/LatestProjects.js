import React from 'react'
import projects from '../Assets/projects'
import Cards from './Cards'
import { Link } from 'react-router-dom'

import '../Styles/Latest.css'

const LatestProjects = () => {
	const latest = projects.slice(0, 4)

	return(
		<div className="section-container" id="projects">
			<div className="dots-container">
				<div id="dot-1" className="browser-dot"></div>
				<div id="dot-2" className="browser-dot"></div>
				<div id="dot-3" className="browser-dot"></div>
			</div>

			<h2>Latest Projects</h2>

			<Cards projects={latest} />

			<div className="project-button-container mb-3">
				<Link to="/portfolio"><button>See More Projects</button></Link>
			</div>

		</div>
	)
}

export default LatestProjects