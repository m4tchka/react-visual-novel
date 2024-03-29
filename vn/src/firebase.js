import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    /* getDocs ,
    onSnapshot  , 
    addDoc, 
    query, 
    where,
    orderBy */
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

//init firebase app
initializeApp(firebaseConfig);

//init services
export const db = getFirestore();
export const auth = getAuth();
// export const user = auth.currentUser; NOTE: Doesn't work - must use whole auth obj otherwise doesn't "wait" for auth to be verified with firebase
export const gProvider = new GoogleAuthProvider();
export const eProvider = new EmailAuthProvider();
//collection ref
export const colRef = collection(db, "testSaves");

// get collection data
/* getDocs(colRef).then((snapshot) => {
    let saves = [];
    snapshot.docs.forEach((doc) => {
        saves.push({ ...doc.data(), id: doc.id });
    });
    console.log("getdocs(fb): ", saves);
});
 */
// realtime collection data
/* onSnapshot(colRef, (snapshot) => {
    let saves = [];
    snapshot.docs.forEach((doc) => {
        saves.push({ ...doc.data(), id: doc.id });
    });
    console.log("onSnapshot(fb): ", saves);

}); */
// queries
/* const q = query(colRef,orderBy("createdAt","desc")) */

//realtime collection data
// onSnapshot(colRef, (snapshot) => {
//     let saves = [];
//     snapshot.docs.forEach((doc) => {
//         saves.push({ ...doc.data(), id: doc.id });
//     });
//     console.log("firebase testSaves: ", saves);
// });

/* const saveFileAdderFunction = (savefileObj) => {
    addDoc(colRef,savefileObj)
} */
