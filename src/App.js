import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header'
import Hero from './Components/Hero'
import LatestProjects from './Components/LatestProjects'
import Contact from './Components/Contact'

import './Styles/App.css'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
            <Header />
        	<Hero />
        	<div className="main-bg">
        		<LatestProjects />
        		<Contact />
        	</div>
        </BrowserRouter>
    </div>
  );
}

export default App;
