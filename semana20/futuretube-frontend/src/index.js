import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBNwlNSysndxhXhvdiIhGbJ0kgjY-_r5Ww",
  authDomain: "futuretube.firebaseapp.com",
  databaseURL: "https://futuretube.firebaseio.com",
  projectId: "futuretube",
  storageBucket: "futuretube.appspot.com",
  messagingSenderId: "402878645637",
  appId: "1:402878645637:web:ae733a1d461e6801a070ec",
  measurementId: "G-BZH1J05RTW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const storage = firebase.storage();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

