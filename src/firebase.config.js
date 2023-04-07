import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBttQBQSjw13A1gDAD78yflTN89UGbYHac',
  authDomain: 'hh-medline.firebaseapp.com',
  projectId: 'hh-medline',
  storageBucket: 'hh-medline.appspot.com',
  messagingSenderId: '217715538728',
  appId: '1:217715538728:web:0ff1fc77583b4540006e1d',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
