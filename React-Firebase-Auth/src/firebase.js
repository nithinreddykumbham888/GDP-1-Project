import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB73fjF8BJNYK1ShpcBco6rS4qhjJHDEKw",
  authDomain: "research-content-management.firebaseapp.com",
  databaseURL: "https://research-content-management-default-rtdb.firebaseio.com",
  projectId: "research-content-management",
  storageBucket: "research-content-management.appspot.com",
  messagingSenderId: "131468755929",
  appId: "1:131468755929:web:51aeba694f121891244fc8",
  measurementId: "G-PC9VQ6VC6H"
})

export const auth = app.auth()
export default app
