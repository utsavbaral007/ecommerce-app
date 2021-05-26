import React from 'react'
import './collectioncard.scss'

const CollectionCard = ({ imageUrl, name, price }) => {
	return (
		<div className="collection-card">
			<div
				className="collection-card-background"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				<div className="add-to-cart">
					<button onClick={() => console.log('Utsav')}>Add To Cart</button>
				</div>
			</div>
			<div className="item-information">
				<p>{name}</p>
				<p>${price}</p>
			</div>
		</div>
	)
}

export default CollectionCard
