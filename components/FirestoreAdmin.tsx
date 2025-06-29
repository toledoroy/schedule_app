// import firebase from "firebase/app";
// import "firebase/firestore";
// import { applicationDefault } from "firebase-admin/app";
import { App, getApps, initializeApp } from "firebase-admin/app";
import firebaseConfig from "./FirebaseConfig";
import admin from "firebase-admin";
import { getDoc, getFirestore } from 'firebase/firestore'
import { collection, doc, setDoc } from "firebase/firestore"; 


const getDB = async () => {

    // const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase/firestore');

    // const admin = require("firebase-admin");

    // const createFirebaseAdminApp = (config = {}) => {
        const alreadyCreatedApps = getApps();
        // console.warn("alreadyCreatedApps.length", alreadyCreatedApps.length);
        if(alreadyCreatedApps.length === 0){
            console.warn("~~Init App~~");
            await initializeApp(firebaseConfig)
        }
        
        
        // const app: App = alreadyCreatedApps.length === 0
        //     ? initializeApp(firebaseConfig, "appName")
        //     : alreadyCreatedApps[0];
    // };

    // if(!getApp()){
    //     try {
    //         const app = admin.initializeApp(firebaseConfig, 'appName');    
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    // const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    // const app = createFirebaseAdminApp(firebaseConfig);
            
    // const db = admin.firestore(admin.apps[0] as App); //That DB
    const db = getFirestore();  //The other DB
    // const db = admin.firestore();
    console.log("[TEST] db is ", typeof db);

    // const eventsRef = db.collection('events');
    // const eventsRef = await db.collection('events').get();
    // const eventsRef = await collection(db, 'events');
    // console.log("eventsRef", eventsRef);
    const collectionref = await doc(db, 'events', 'i3a5va0XdQOYOvTwGEbL');
    console.log("[TEST] collectionref", await getDoc(collectionref));
    
    
    // const eventsRef = await collection(db, 'events');

    // Query documents
    // const snapshot = eventsRef.where('field', '==', 'test').get().then((doc: any) => console.log("[TEST] dooc", doc));
    
    return db;
}


/* ServerSide Auth */
// const initFirebaseAdminApp = () => {
//     const admin = require("firebase-admin");
    
//     try {
//         return admin.getApp();
//     } catch (err) {
        
//         // const app = admin.initializeApp({
//         //   projectId: "abc",
//         //   storageBucket: "def",
//         // });

//         return admin.initializeApp(firebaseConfig);
//         // return initializeApp({credential: applicationDefault()});

//     }
// };

export { getDB };