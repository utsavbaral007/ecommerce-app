import React from 'react'
import './custombutton.scss'

const CustomButton = ({ children, isGoogleLogin, ...otherProps }) => {
	return (
		<button
			className={`${isGoogleLogin ? 'google-login-btn' : ''} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default CustomButton
