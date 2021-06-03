import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyA3CR7v_gS5ccovS2_3Sk0ly6_18D8Iuts',
	authDomain: 'ecommfrontend.firebaseapp.com',
	projectId: 'ecommfrontend',
	storageBucket: 'ecommfrontend.appspot.com',
	messagingSenderId: '271019315387',
	appId: '1:271019315387:web:6adf792c737869c786999e',
})

export const auth = app.auth()
export const database = app.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
	return firebase.auth().signInWithPopup(provider)
}

export default firebase
