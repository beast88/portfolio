import React from 'react'
import Hero from './Hero'
import LatestProjects from './LatestProjects'
import Contact from './Contact'

const Home = () => {
	return(
		<div>
			<Hero />
    	<div className="main-bg">
    		<LatestProjects />
    		<Contact />
    	</div>
    </div>
	)
}

export default Home