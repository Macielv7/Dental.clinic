import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Inicio from './pages/inicio';
import Login from './pages/login';
import Agendamento from './pages/agendamento';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/inicio' element={ < Inicio /> } />
        <Route path='/login' element={ < Login /> } />
        <Route path='/agendamento' element={ < Agendamento /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
