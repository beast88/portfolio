import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'

import './Styles/App.css'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
