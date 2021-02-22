import React from 'react'
import projects from '../Assets/projects'
import Card from 'react-bootstrap/Card'

import '../Styles/Latest.css'

const LatestProjects = () => {
	const latest = projects.slice(0, 4)

	return(
		<div className="latest-container">
			<div className="dots-container">
				<div id="dot-1" className="browser-dot"></div>
				<div id="dot-2" className="browser-dot"></div>
				<div id="dot-3" className="browser-dot"></div>
			</div>

			<h2>Latest Projects</h2>

			<div className="card-container">
				{
					latest.map(project => {
						return <Card key={project.id} style={{ width: '18rem' }}>
							<Card.Img varient="top" src={project.image} />
							<Card.Body>
								<Card.Title>{project.name}</Card.Title>
								<a href={project.github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
								<a href={project.live} target="_blank" rel="noopener noreferrer"><button>Live Project</button></a>
							</Card.Body>
						</Card>
					})
				}
			</div>

		</div>
	)
}

export default LatestProjects