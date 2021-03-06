import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = (props) => {
	return(
		<div className="card-container d-flex flex-wrap justify-content-around p-3">
			{
				props.projects.map(project => {
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

			<div className="filling-empty-space m-2"></div>
			<div className="filling-empty-space m-2"></div>
			<div className="filling-empty-space m-2"></div>

		</div>
	)
}

export default Cards