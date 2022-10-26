import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//<editor-fold desc="Firebase 관련 import>
import {FBInit} from './Modules/Firebase/FBInit.js'
import {getDatabase, ref, onValue, set} from "firebase/database";
//</editor-fold desc>

const root = ReactDOM.createRoot(document.getElementById('root'));
const init = FBInit()

const database = getDatabase();

const hotelRef = ref(database, `/`)
onValue(hotelRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
})


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
