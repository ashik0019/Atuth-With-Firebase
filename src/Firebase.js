import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrcoWUs4CEMbCOLw0U8Z8UHrsdPf65u4U",
    authDomain: "authentication-0019.firebaseapp.com",
    databaseURL: "https://authentication-0019.firebaseio.com",
    projectId: "authentication-0019",
    storageBucket: "",
    messagingSenderId: "245895510218",
    appId: "1:245895510218:web:1fd13442eb328568"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();