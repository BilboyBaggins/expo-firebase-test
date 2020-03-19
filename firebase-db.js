// // import * as React from 'react';
// // import * as firebase from 'firebase';
// const firebase = require('firebase')

// const firebaseConfig = {
//     apiKey: "AIzaSyD3H91WRuGf6E8fQhROiU_7BhewEAywMqg",
//     authDomain: "goals-app-87d0f.firebaseapp.com",
//     databaseURL: "https://goals-app-87d0f.firebaseio.com",
//     projectId: "goals-app-87d0f",
//     storageBucket: "goals-app-87d0f.appspot.com",
//     messagingSenderId: "1087892367962",
//     appId: "1:1087892367962:web:8fd84cda76c42669708663",
//     measurementId: "G-VD68L1C1RZ"
// };
  
// firebase.initializeApp(firebaseConfig);

// function write(userId, score) {
//     firebase.database().ref('users/' + userId).set({
//       highscore: score
//     });
// }

// try {
//     write('Bilbo', 5)
//     console.log('success')
// } catch (error) {
//     console.log(error)
// }