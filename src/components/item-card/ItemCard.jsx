import React from 'react'
import './ItemCard.scss'

export const ItemCard = ({ title, imageUrl, size }) => {
	return (
		<>
			<div className={`${size} item-card`}>
				<div
					className="background-image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
				<div className="item-card-content">
					<h1 className="item-content-title">{title}</h1>
					<p className="item-content-subtitle">Shop Now</p>
				</div>
			</div>
		</>
	)
}
