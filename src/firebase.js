// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFDAuVRiRdClJ_Kc6YmPBw30F-XE0LxaY",
    authDomain: "netflex-react-clone.firebaseapp.com",
    projectId: "netflex-react-clone",
    storageBucket: "netflex-react-clone.appspot.com",
    messagingSenderId: "936732391216",
    appId: "1:936732391216:web:7e8d19471d102e14e0baf5",
    measurementId: "G-HB4Q0W26BC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

