import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { message } from 'antd'

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyA3CR7v_gS5ccovS2_3Sk0ly6_18D8Iuts',
		authDomain: 'ecommfrontend.firebaseapp.com',
		projectId: 'ecommfrontend',
		storageBucket: 'ecommfrontend.appspot.com',
		messagingSenderId: '271019315387',
		appId: '1:271019315387:web:6adf792c737869c786999e',
	})
}

export const auth = firebase.auth()
export const database = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((users) => {
			database
				.collection('users')
				.doc(users.user.uid)
				.get()
				.then((user) => {
					if (user.exists) {
						return message.success('Logged in successfully!')
					}
					database
						.collection('users')
						.doc(user.id)
						.set({
							displayName: users.user.displayName,
							email: users.user.email,
							createdAt: new Date(),
						})
						.then(message.success('Logged in successfully!'))
						.catch((e) => message.error(e.message))
				})
				.catch((e) => message.error(e.message))
		})
		.catch((e) => message.error(e.message))
}

export const signInWithEmailAndPassword = (email, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((users) => {
			database
				.collection('users')
				.doc(users.user.uid)
				.get()
				.then((user) => {
					if (user.exists) {
						return message.success('Logged in successfully!')
					}
				})
				.catch((e) => message.error(e.message))
		})
		.catch((e) => message.error(e.message))
}

export default firebase
