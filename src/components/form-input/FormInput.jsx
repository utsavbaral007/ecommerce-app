import React from 'react'
import './forminput.scss'

const FormInput = ({ handleChange, ...otherProps }) => {
	return (
		<div className="form-input-group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
		</div>
	)
}

export default FormInput
