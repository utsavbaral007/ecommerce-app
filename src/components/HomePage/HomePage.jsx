import React from 'react'
import './homepage.scss'

export const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="homepage-content">
				<div className="item-card">
					<div className="item-card-content">
						<h1 className="item-content-title">Hats</h1>
						<p className="item-content-subtitle">Shop Now</p>
					</div>
				</div>
				<div className="item-card">
					<div className="item-card-content">
						<h1 className="item-content-title">Jackets</h1>
						<p className="item-content-subtitle">Shop Now</p>
					</div>
				</div>
				<div className="item-card">
					<div className="item-card-content">
						<h1 className="item-content-title">Sneakers</h1>
						<p className="item-content-subtitle">Shop Now</p>
					</div>
				</div>
				<div className="item-card">
					<div className="item-card-content">
						<h1 className="item-content-title">Womens</h1>
						<p className="item-content-subtitle">Shop Now</p>
					</div>
				</div>
				<div className="item-card">
					<div className="item-card-content">
						<h1 className="item-content-title">Mens</h1>
						<p className="item-content-subtitle">Shop Now</p>
					</div>
				</div>
			</div>
		</div>
	)
}
