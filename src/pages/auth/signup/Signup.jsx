import React, { useState } from 'react'
import FormInput from '../../../components/form-input/FormInput'
import CustomButton from '../../../components/custom-button/CustomButton'
import { auth, database } from '../../../firebase'
import { message, Spin } from 'antd'
import './signup.scss'

const Signup = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setDisplayName(name === 'displayName' ? value : displayName)
		setEmail(name === 'email' ? value : email)
		setPassword(name === 'password' ? value : password)
		setConfirmPassword(name === 'confirm-password' ? value : confirmPassword)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			return message.error('Password do not match')
		}
		setLoading(true)
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				database
					.collection('users')
					.doc(user.user.uid)
					.set({
						displayName: displayName,
						email: user.user.email,
						createdAt: new Date(),
					})
					.then(async () => {
						await auth.signOut()
						message.success('Registered Successfully!')
						setLoading(false)
					})
					.catch((e) => {
						message.error(e.message)
						setLoading(false)
					})
			})
			.catch((e) => {
				message.error(e.message)
				setLoading(false)
			})
	}

	return (
		<div className="signup-container">
			<h2 className="heading">Join Us</h2>
			<p className="subtext">Sign up with your email and password</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					handleChange={handleChange}
					placeholder="Full Name"
					required
				/>
				<FormInput
					type="text"
					name="email"
					value={email}
					handleChange={handleChange}
					placeholder="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					placeholder="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirm-password"
					value={confirmPassword}
					handleChange={handleChange}
					placeholder="Confirm Password"
					required
				/>

				<CustomButton type="submit">
					{loading ? <Spin /> : 'Sign Up'}
				</CustomButton>
			</form>
		</div>
	)
}

export default Signup
