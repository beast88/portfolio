import React from 'react'
import projects from '../Assets/projects'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import '../Styles/Latest.css'

const LatestProjects = () => {
	const latest = projects.slice(0, 4)

	return(
		<div className="section-container" id="portfolio">
			<div className="dots-container">
				<div id="dot-1" className="browser-dot"></div>
				<div id="dot-2" className="browser-dot"></div>
				<div id="dot-3" className="browser-dot"></div>
			</div>

			<h2>Latest Projects</h2>

			<div className="card-container d-flex flex-wrap justify-content-around p-3">
				{
					latest.map(project => {
						return <Card className="project-card m-2" key={project.id}>
							<Card.Img varient="top" src={project.image} style={{ height: '12rem' }} />
							<Card.Body>
								<Card.Title className="project-title" >{project.name}</Card.Title>
								<div className="d-flex justify-content-around w-100" >
									<a href={project.github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
									<a href={project.live} target="_blank" rel="noopener noreferrer"><button>Live Project</button></a>
								</div>
							</Card.Body>
						</Card>
					})
				}
			</div>

			<Link className="m-auto"><button className="mb-3">See More Projects</button></Link>

		</div>
	)
}

export default LatestProjects