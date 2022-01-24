import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './authpage.scss'
import Signin from './Signin/Signin'
import Signup from './signup/Signup'

const Authpages = ({ currentUser, history }) => {
	useEffect(() => {
		if (currentUser) {
			history.push('/')
		}
	}, [currentUser, history])
	return (
		<div className="auth-container">
			<Signin />
			<Signup />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
	}
}

export default connect(mapStateToProps)(withRouter(Authpages))
