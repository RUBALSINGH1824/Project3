import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDo9uxI4UPbYQOcdWgA2D_I71IfTPxR6LI",
  authDomain: "chat-web-app-29931.firebaseapp.com",
  databaseURL: "https://chat-web-app-29931-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-29931",
  storageBucket: "chat-web-app-29931.appspot.com",
  messagingSenderId: "484788758181",
  appId: "1:484788758181:web:661665a816441a5f42cf4c"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
