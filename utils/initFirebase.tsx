import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "../components/FirebaseConfig";

const initFirebaseApp = () => {
  try {
    return getApp();
  } catch (err) {
      return initializeApp(firebaseConfig);
    // return initializeApp({credential: applicationDefault()});
  }
}


export default initFirebaseApp
// export default initFirebaseAdminApp
