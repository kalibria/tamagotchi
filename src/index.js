import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {store} from "./store";

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App state={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);
