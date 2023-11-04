// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgk2Mqo5RkqK3TRZRSNPhvV_4KBtNFsI",
  authDomain: "maker-inventory-app-db.firebaseapp.com",
  databaseURL: "https://maker-inventory-app-db-default-rtdb.firebaseio.com",
  projectId: "maker-inventory-app-db",
  storageBucket: "maker-inventory-app-db.appspot.com",
  messagingSenderId: "585179137010",
  appId: "1:585179137010:web:b22ff2ab0f16ec72d5a16b",
  measurementId: "G-XSDSJJ1YFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
