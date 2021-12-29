import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Explore from './pages/Explore';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/explore' element={<Explore/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
