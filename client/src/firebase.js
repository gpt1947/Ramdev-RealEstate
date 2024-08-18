

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import functions from 'firebase-functions';
// import corsLib from 'cors';

// const cors = corsLib({ origin: true });

// export const yourFunctionName = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         // Your function code here
//         res.send("CORS enabled");
//     });
// });


const firebaseConfig = {
  apiKey: "AIzaSyCYn_tdcqO6pD1ixfZ-Mh6_mAiFmyzTVfI",
  authDomain: "mern-estate-6f1d9.firebaseapp.com",
  projectId: "mern-estate-6f1d9",
  storageBucket: "mern-estate-6f1d9.appspot.com",
  messagingSenderId: "649396931091",
  appId: "1:649396931091:web:5c3b3590dd6046c8450de6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);