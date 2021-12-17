import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './container/usersList';
import { Provider } from "react-redux"
import { Storage } from "./redux/store/storage"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Storage}>
      <UserList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

