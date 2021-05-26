import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</div>
	)
}

export default App
