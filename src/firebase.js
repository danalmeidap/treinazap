import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAD8DeHhuVUXFqpDvVvys_SH_iydl58s_A",
    authDomain: "treinazap-1f05b.firebaseapp.com",
    projectId: "treinazap-1f05b",
    storageBucket: "treinazap-1f05b.appspot.com",
    messagingSenderId: "362596249685",
    appId: "1:362596249685:web:57ae71d4532259ca9264dc"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
