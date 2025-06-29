import firebase from "firebase/app";
import "firebase/firestore";

import { initializeApp, getApps, getApp } from "firebase/app";
// import firebaseConfig from "./FirebaseConfig";
import initFirebaseApp from "../utils/initFirebase";



// import { collection, doc, setDoc } from "firebase/firestore"; 
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase/firestore');


// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const app = initFirebaseApp();

// Initialize Firebase
// const app = //initializeApp(firebaseConfig);
// firebase.apps.length  ? firebase.app() : 
// firebase.initializeApp({});

// const db = firestore();
const db = getFirestore();
// const db = getDatabase();
// const db = firebase.firestore();
// const db = firebase.getFirestore();
// const db = getFirestore(app);

const {Firestore} = require('@google-cloud/firestore');

// Create a new client
// const db = new Firestore(app);



// const eventsDB = db.collection("events");


const eventsRef = db.collection('events');
// const eventsRef = await collection(db, 'events');
            
// Query documents
// const snapshot = eventsRef.where('field', '==', 'test').get().then((doc: any) => console.log("[TEST] dooc", doc));

export {db, app};