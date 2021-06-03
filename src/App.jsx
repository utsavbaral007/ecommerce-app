import React, { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'
import Navbar from './components/navbar/Navbar'
import Authpages from './pages/auth/Authpages'
import { auth } from './firebase'

function App() {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				user.getIdTokenResult().then((currentUser) => {
					setCurrentUser(currentUser)
				})
			} else {
				setCurrentUser(null)
			}
		})
		return unSubscribe
	}, [])

	console.log(currentUser)

	return (
		<div className="App">
			<Navbar currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/login" component={Authpages} />,
			</Switch>
		</div>
	)
}

export default App
