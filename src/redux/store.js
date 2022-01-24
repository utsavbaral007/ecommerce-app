import { createStore, applyMiddleware } from 'redux'
import RootReducer from './RootReducer'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleWare = composeWithDevTools(applyMiddleware(ReduxThunk))
const store = createStore(RootReducer, middleWare)

export default store
