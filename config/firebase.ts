// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyArwt3Ta_eJ6ZJXxKzvL5SuBxEp7uKxt_Y",
	authDomain: "chat-app2-608fc.firebaseapp.com",
	projectId: "chat-app2-608fc",
	storageBucket: "chat-app2-608fc.appspot.com",
	messagingSenderId: "381622825787",
	appId: "1:381622825787:web:742543d72123d914923d1e",
	measurementId: "G-WRCS37M5ST"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
