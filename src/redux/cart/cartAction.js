import { cartTypes } from './cartTypes'

export const addToCart = (items) => {
	return {
		type: cartTypes.SET_CART_ITEMS,
		payload: items,
	}
}

export const toggleCart = () => {
	return {
		type: cartTypes.TOGGLE_CART_DROPDOWN,
	}
}
