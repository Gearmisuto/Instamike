// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtoi_lPuHQkVBsn51IUiQzlQrPD6kME4g",
  authDomain: "instamike.firebaseapp.com",
  projectId: "instamike",
  storageBucket: "instamike.appspot.com",
  messagingSenderId: "95531433739",
  appId: "1:95531433739:web:35d999fd0cbcf7b8216c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore();
const storage = getStorage();

export {app,db,storage};