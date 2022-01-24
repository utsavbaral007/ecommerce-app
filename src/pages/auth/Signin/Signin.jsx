import React, { useState } from 'react'
import FormInput from '../../../components/form-input/FormInput'
import CustomButton from '../../../components/custom-button/CustomButton'
import { signInWithGoogle, signInWithEmailAndPassword } from '../../../firebase'
import './signin.scss'

const Signin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(email, password)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setEmail(name === 'email' ? value : email)
		setPassword(name === 'password' ? value : password)
	}

	return (
		<div className="login-container">
			<h2 className="heading">I already have an account</h2>
			<p className="subtext">Sign in with your email and password</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="email"
					value={email}
					label="email"
					handleChange={handleChange}
					placeholder="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					label="password"
					handleChange={handleChange}
					placeholder="Password"
					required
				/>
				<div className="auth-buttons">
					<CustomButton type="submit">Login</CustomButton>
					<CustomButton isGoogleLogin={true} onClick={signInWithGoogle}>
						Sign in with google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export default Signin
