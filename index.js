// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase } = require('firebase-admin/database'); 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18amfJR7Yi2cbbtBiV5_7rfOo0QMyr_E",
  authDomain: "cisc474-exercise-5-dcfaa.firebaseapp.com",
  databaseURL: "https://cisc474-exercise-5-dcfaa-default-rtdb.firebaseio.com",
  projectId: "cisc474-exercise-5-dcfaa",
  storageBucket: "cisc474-exercise-5-dcfaa.appspot.com",
  messagingSenderId: "860643726523",
  appId: "1:860643726523:web:c4339131b0d106742e859e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

// Get a database reference to our blog
//const db = getDatabase();
/*const ref = db.ref('server/saving-data/');
const usersRef = ref.child('users');
usersRef.set({
    alanisawesome: {
       date_of_birth: 'June 23, 1912',
       full_name: 'Alan Turing'
    }, 
    gracehop: {
       date_of_birth: 'December 9, 1906',
       full_name: 'Grace Hopper'
    }
});*/

//var admin = require("firebase-admin");

var serviceAccount = require("./cisc474-exercise-5-dcfaa-firebase-adminsdk-1f7jy-ebcff8835c.json");

/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cisc474-exercise-5-dcfaa-default-rtdb.firebaseio.com"
});*/

const http = require('http')
const port = 8080
// Create a server object:
const server = http.createServer(function (req, res) { 
    // Write a response to the client
    res.write('Hello World');
    // End the response
    res.end(); 
})
// Set up our server so it will listen on the port
server.listen(port, function (error) {
    // Checking any error occur while listening on port
if (error) {
       console.log('Something went wrong', error);
    }
    // Else sent message of listening
else {
       console.log('Server is listening on port' + port);
    }
})
