import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
    { id:1, name:'Brush my Teeth', status:true},
    { id:2, name:'Wash my face', status:false},
    { id:3, name:'Wash clothes', status:false},
    { id:4, name:'Cooking', status:true}
];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
