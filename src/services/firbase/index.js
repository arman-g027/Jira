import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQL0EbCLpgAtlzCfPo8e2GLQjlhUc5_gk",
  authDomain: "jira-6f585.firebaseapp.com",
  databaseURL: "https://jira-6f585-default-rtdb.firebaseio.com",
  projectId: "jira-6f585",
  storageBucket: "jira-6f585.appspot.com",
  messagingSenderId: "64143839722",
  appId: "1:64143839722:web:dedc89ed2b1b69917aa293",
  measurementId: "G-3VC3NCLGSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {
  db,
  auth
}
