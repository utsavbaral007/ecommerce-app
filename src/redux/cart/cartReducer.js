import { cartTypes } from './cartTypes'
import { addItemsToCart } from './cartUtils'

const initialState = {
	hidden: true,
	cartItems: [],
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartTypes.SET_CART_ITEMS:
			return {
				...state,
				cartItems: addItemsToCart(state.cartItems, action.payload),
			}
		case cartTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden,
			}
		default:
			return {
				...state,
				cartItems: [],
			}
	}
}
export default cartReducer
