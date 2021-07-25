import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKWkrRBAiYrFTQdF4hEH4wL6SS-QjlZKw",
    authDomain: "inventic2306170621.firebaseapp.com",
    projectId: "inventic2306170621",
    storageBucket: "inventic2306170621.appspot.com",
    messagingSenderId: "523938439036",
    appId: "1:523938439036:web:a37e66c5226ad4c32e8ef9"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

