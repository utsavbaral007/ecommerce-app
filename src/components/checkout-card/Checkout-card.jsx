import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import './checkout-card.scss'

const CheckoutCard = ({ toggleCartDropdown, cartItems }) => {
	return !toggleCartDropdown ? (
		<div className="checkout-card">
			<div className="checkout-container">
				<div className="checkout-items">
					{cartItems.length ? (
						cartItems.map((item) => (
							<div key={item.id} className="cart-items">
								<div className="img-sm">
									<img src={item.imageUrl} alt="" />
								</div>
								<div className="item-description">
									<p>{item.name}</p>
									<p>
										<span>{item.quantity}</span> x <span>${item.price}</span>
									</p>
								</div>
							</div>
						))
					) : (
						<p style={{ textAlign: 'center' }}>No items in cart</p>
					)}
				</div>
				<CustomButton>Checkout</CustomButton>
			</div>
		</div>
	) : (
		<></>
	)
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
		toggleCartDropdown: state.cart.hidden,
	}
}

export default connect(mapStateToProps)(CheckoutCard)
