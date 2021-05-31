import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDAEMdfxywoKIRmqTkkmb1JwKbtEONac90',
  authDomain: 'chat-beta-1-6cc47.firebaseapp.com',
  projectId: 'chat-beta-1-6cc47',
  storageBucket: 'chat-beta-1-6cc47.appspot.com',
  messagingSenderId: '42320861485',
  appId: '1:42320861485:web:cb397bbaefc0311dc55ba4',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
