import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IoMdCart } from 'react-icons/all'
import { auth } from '../../firebase'
import Logo from '../../assets/MyLogo.png'
import './navbar.scss'

const Navbar = ({ history, currentUser }) => {
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
						<div className="options" onClick={() => auth.signOut()}>
							Sign out
						</div>
					) : (
						<Link className="options" to="/login">
							sign in
						</Link>
					)}
					<Link className="options" to="/mycart">
						<IoMdCart /> <span>10</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Navbar)
