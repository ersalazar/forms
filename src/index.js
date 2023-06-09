import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UsersScreen from './screens/UsersScreen.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserScreen from './screens/UserScreen.tsx';
import NewUser from './screens/NewUser.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersScreen/>}/>
        <Route path='/user/:id' element={<UserScreen/>}/>
        <Route path='/user' element={<NewUser/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
