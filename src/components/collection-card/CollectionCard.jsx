import React from 'react'
import './collectioncard.scss'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cartAction'

const CollectionCard = ({ item, addToCart }) => {
	return (
		<div className="collection-card">
			<div
				className="collection-card-background"
				style={{ backgroundImage: `url(${item.imageUrl})` }}
			>
				<div className="add-to-cart">
					<button onClick={() => addToCart(item)}>Add To Cart</button>
				</div>
			</div>
			<div className="item-information">
				<p>{item.name}</p>
				<p>${item.price}</p>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (items) => dispatch(addToCart(items)),
	}
}

export default connect(null, mapDispatchToProps)(CollectionCard)
