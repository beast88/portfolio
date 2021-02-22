import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import LatestProjects from './Components/LatestProjects'

import './Styles/App.css'

function App() {
  return (
    <div className="App">
    	<Header />
    	<Hero />
    	<div className="main-bg">
    		<LatestProjects />
    	</div>
    </div>
  );
}

export default App;
