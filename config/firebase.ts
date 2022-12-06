// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiZUYnnRHk79muH09Ch52mt76IE-VHXYo",
	authDomain: "app-chat-4a45c.firebaseapp.com",
	projectId: "app-chat-4a45c",
	storageBucket: "app-chat-4a45c.appspot.com",
	messagingSenderId: "753245125148",
	appId: "1:753245125148:web:0c9c673e4f379450607dd9"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
