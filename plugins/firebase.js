import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORE_BUKET,
    messagingSenderId: process.env.SENDER_ID
  })
}

const settings = { timestampsInSnapshots: true }
const firestore = firebase.firestore()
firestore.settings(settings)

export default firebase
