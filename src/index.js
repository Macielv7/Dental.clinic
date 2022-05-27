import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import home from './pages/home';
import Agendamento from './pages/agendamento';
import Ligin from './pages/ligin';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<home />} />
        <Route path='/agendamento' element={ < Agendamento /> } />
        <Route path='/ligin' element={ < Ligin /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
