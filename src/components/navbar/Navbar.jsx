import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IoMdCart } from 'react-icons/all'
import { auth } from '../../firebase'
import { connect } from 'react-redux'
import { message } from 'antd'
import CheckoutCard from '../checkout-card/Checkout-card'
import { toggleCart } from '../../redux/cart/cartAction'
import Logo from '../../assets/MyLogo.png'
import './navbar.scss'

const Navbar = ({ history, currentUser, cartItems, toggleCartMenu }) => {
	return (
		<div className="navbar-container">
			<div className="navbar-content">
				<div onClick={() => history.push('/')} className="logo">
					<img src={Logo} alt="Mylogo" />
				</div>
				<div className="navlinks">
					<Link className="options" to="/shop">
						shop
					</Link>
					<Link className="options" to="/contact">
						contact
					</Link>
					{currentUser ? (
						<div
							className="options"
							onClick={() =>
								auth
									.signOut()
									.then(() => message.success('Logged out successfully'))
									.catch((e) => message.error(e.message))
							}
						>
							Sign out
						</div>
					) : (
						<Link className="options" to="/login">
							sign in
						</Link>
					)}
					<div className="options">
						<IoMdCart onClick={toggleCartMenu} />
						<span>{cartItems.length}</span>
						<CheckoutCard />
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
		cartItems: state.cart.cartItems,
		cartDropdown: state.cart.hidden,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartMenu: () => dispatch(toggleCart()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
