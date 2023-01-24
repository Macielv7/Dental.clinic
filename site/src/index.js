import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import Adm from './pages/adm';
import Home from './pages/home';
import Login from './pages/login';
import Agendamento from './pages/agendamento';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        
    <Route path='/' element={ < App /> } />
        <Route path='/adm' element={ < Adm /> } />
        <Route path='/home' element={ < Home /> } />
        <Route path='/login' element={ < Login /> } />
        <Route path='/agendamento' element={ < Agendamento /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
