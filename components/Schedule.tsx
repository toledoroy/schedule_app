// import db from "./Firestore";

// import firebase from "firebase/app";
// import "firebase/firestore";

// import { initializeApp } from "firebase/app";

// // const admin = require("firebase-admin");
// // const db = admin.firestore();
// // const eventsDB = db.collection("events");


// // import { collection, doc, setDoc } from "firebase/firestore"; 
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase/firestore');

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     // storageBucket: process.env.,
//     // messagingSenderId: process.env.,
//     // appId: process.env.
    
//     // messagingSenderId: "391620415322",
//     // appId: "1:391620415322:web:6848292646d9e91e6e6d63",
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = firestore();
// const db = getFirestore();
// const db = getDatabase();
// const db = firebase.firestore();

// var ref = firebase.database().ref("dinosaurs");

// Query documents
// const queryRes = eventsDB.where('field', '==', 'test').get();

// import {collection, getDoc} from "firebase/firestore";

// const {Firestore} = require('@google-cloud/firestore');
// Create a new client
// const firestore = new Firestore();

// console.warn("queryRes",queryRes);
/**
 * 
 */
const Schedule = ({  }: any) => { 


    // const sendData = async () => {
    //     try {
    //         db
    //             .collection('events')
    //             .doc('my_document') // leave as .doc() for a random unique doc name to be assigned
               
    //             .then(alert('Data was successfully sent to cloud firestore!'))
    //     } catch (error) {
    //         console.log(error)
    //         alert(error)
    //     }
    // }

    
// const reference = collection(db, "events");

// const eventsDB = db.collection('events');



    const days: string[] = [
        'monday',
        'tuesday',
        'wednsday',
        'thursday',
        'friday',
        // 'saturday',
    ];
    const timeslots: any[] = [
        {time: '8:30', text:'MORNING'},
        {time: '10:00'},
        {time: '11:45'},
        {text:'AFTERNOON'},
        {time: '16:00'},
        {text: 'EVENING'},
    ];
    const data: any = {
        monday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Vinyasa',
                teacher:'Danielle',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa',
                teacher:'Dalit',
            },
            {
                time:'11:45-13:15',
                title:'Pilates Mobility Flow',
                teacher:'Vanessa',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],   
        tuesday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Led Class',
                teacher:'Rachel',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa',
                teacher:'Dalit',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Kundalini Yoga',
                teacher:'Raj',
            },
            {
                time:'19:00-21:00',
                title:'INNERDANCE',
                teacher:'Kate',
            },
        ],
        wednsday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Vinyasa',
                teacher:'Danielle',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa Level 2',
                teacher:'Nami',
            },
            {
                time:'11:45-13:15',
                title:'Embodies Flow',
                teacher:'Laura',
            },
            {
                time:'13:30-15:30',
                title:'Befriending the Nervous System',
                teacher:'Kate',
            },
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],
        thursday:[
            {
                time:'8:30-09:45',
                title:'Ashtanga Let Class',
                teacher:'Rachel',
            },
            {
                time:'10:00-11:30',
                title:'Modern Vinyasa',
                teacher:'Eidan',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],
        friday:[
            {
                time:'8:30-09:45',
                title:'Ashtanga Led Class',
                teacher:'Eidan',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa Level 1',
                teacher:'Nami',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Rogen',
            },
        ],
    };
    
    const styles = {
        table:{ },
        th:{},
        tr:{},
        td:{},
    
    };
    return (
        <table className="schedule_table" style={styles.table}>
            <tr>
                <th>&nbsp;</th>
                {days.map(element => <th style={styles.th}>{element}</th>)}
            </tr>

            {/* <tr><td style={styles.td}>[SLOTS]</td></tr> */}

            {timeslots.map((slot, slotIndex) => <tr style={styles.tr}>
                <td>
                    <div>{slot?.time}</div>
                    <div>{slot?.text}</div>
                </td>
                {days.map(day => <td>
                    {/* {day}, {slotIndex} */}
                    {data?.[day]?.[slotIndex]?.time && 
                        <div className="time">{data?.[day]?.[slotIndex]?.time || ''}</div>
                    }
                    {data?.[day]?.[slotIndex]?.title && 
                        <div className="title">{data?.[day]?.[slotIndex]?.title || ''}</div>
                    }
                    {data?.[day]?.[slotIndex]?.teacher && 
                        <div className="teacher"> {data?.[day]?.[slotIndex]?.teacher ? `with ${data[day][slotIndex].teacher}`: ''}</div>
                    }
                </td>)}
            </tr>)}
            
        </table>
    );
}


export default Schedule;
