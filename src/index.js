import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
