importScripts('https://www.gstatic.com/firebasejs/4.8.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.0/firebase-messaging.js')

const config = {
  messagingSenderId: process.env.SENDER_ID
}

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(config)
}

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
