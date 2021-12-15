import React from 'react';
import ReactDOM from 'react-dom';
import Login from './LoinPage/login';
import {Provider} from "react-redux"
import {storage} from "./Store/storage"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storage}>
    <Login/>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

