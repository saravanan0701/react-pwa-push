import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyAVla6gGtt-hrPLJ_G_DaPz7R0uY9Daozw",
    authDomain: "push-notification-63673.firebaseapp.com",
    databaseURL: "https://push-notification-63673.firebaseio.com",
    projectId: "push-notification-63673",
    storageBucket: "push-notification-63673.appspot.com",
    messagingSenderId: "245605283647",
    appId: "1:245605283647:web:1fe25bc7ee6d3b5f24458a",
    measurementId: "G-C7KY1986S6"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  "BFsrrgvLUNwgN16cubu1Nde0l-Um6T4IoR82vhV-Euj6izIJ6LadY9dVv3Bdw9jXtkmolYVcwjyC_joQKmJy-TY"
);



export { messaging };