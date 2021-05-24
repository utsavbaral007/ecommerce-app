import React from 'react'
import './homepage.scss'
import Directory from '../../components/directory/Directory'

export const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="content">
				<Directory />
			</div>
		</div>
	)
}
