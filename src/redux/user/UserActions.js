import { userActionTypes } from './UserActionTypes'

export const setCurrentUser = (user) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user,
})
