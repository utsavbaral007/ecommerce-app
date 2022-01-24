import React, { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import { HomePage } from './pages/homepage/HomePage'
import { message, Spin } from 'antd'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/UserActions'
import Shop from './pages/shop/Shop'
import Navbar from './components/navbar/Navbar'
import Authpages from './pages/auth/Authpages'
import { auth, database } from './firebase'

function App({ setCurrentUser }) {
	const [authLoading, setAuthLoading] = useState(true)
	const history = useHistory()

	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				database
					.collection('users')
					.doc(user.uid)
					.get()
					.then((doc) => {
						if (doc.exists) {
							setCurrentUser({ id: doc.id, ...doc.data() })
							setAuthLoading(false)
						} else {
							history.push('/login')
							setAuthLoading(false)
						}
					})
					.catch((e) => {
						message.error(e.message)
						setAuthLoading(false)
					})
			} else {
				setCurrentUser(null)
				setAuthLoading(false)
			}
		})
		return unSubscribe
	}, [])

	return authLoading ? (
		<div className="spinner">
			<Spin />
		</div>
	) : (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/login" component={Authpages} />
			</Switch>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => {
			return dispatch(setCurrentUser(user))
		},
	}
}

export default connect(null, mapDispatchToProps)(App)
