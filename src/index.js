import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from "./store/Store"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
    <App />
    </Provider>
);


