import React from 'react'
import './ItemCard.scss'
import { withRouter } from 'react-router-dom'

const ItemCard = ({ title, imageUrl, size, match, history, linkUrl }) => {
	return (
		<>
			<div
				className={`${size} item-card`}
				onClick={() => history.push(`${match.url}${linkUrl}`)}
			>
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

export default withRouter(ItemCard)
