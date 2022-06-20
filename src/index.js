import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Home from './pages/home';
import Arquivada from './pages/arquivada';
import Adm from './pages/adm';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Agendamento from './pages/agendamento';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={ < Home /> } />
        <Route path='/arquivada' element={ < Arquivada /> } />
        <Route path='/adm' element={ < Adm /> } />
        <Route path='/inicio' element={ < Inicio /> } />
        <Route path='/login' element={ < Login /> } />
        <Route path='/agendamento' element={ < Agendamento /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
