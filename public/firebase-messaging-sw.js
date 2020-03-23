importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAVla6gGtt-hrPLJ_G_DaPz7R0uY9Daozw",
    authDomain: "push-notification-63673.firebaseapp.com",
    databaseURL: "https://push-notification-63673.firebaseio.com",
    projectId: "push-notification-63673",
    storageBucket: "push-notification-63673.appspot.com",
    messagingSenderId: "245605283647",
    appId: "1:245605283647:web:1fe25bc7ee6d3b5f24458a",
    measurementId: "G-C7KY1986S6"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Handling background message ', payload);
  
    return self.registration.showNotification(payload.data.title, {
      body: payload.data.body,
      icon: payload.data.icon,
      tag: payload.data.tag,
      data: payload.data.link
    });
  });
  
  self.addEventListener('notificationclick', function(event) {
    console.log("abebt");
    event.notification.close();
    event.waitUntil(self.clients.openWindow(event.notification.data));
  })