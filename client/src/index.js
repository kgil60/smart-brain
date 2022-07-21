import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();