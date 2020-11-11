// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyA6BlQyU38IZj3MNizq4KeKttMvqnNuftU",
  authDomain: "grocerylist-41c62.firebaseapp.com",
  databaseURL: "https://grocerylist-41c62.firebaseio.com",
  projectId: "grocerylist-41c62",
  storageBucket: "grocerylist-41c62.appspot.com",
  messagingSenderId: "899318465752",
  appId: "1:899318465752:web:bd2ef218b10ac6c33b03ad",
  measurementId: "G-52120D3SXT"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database

$("#save").click(function(){

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);
  
    firebase.firestore().collection("mylist").add({
      item: value
    });
  });
});
