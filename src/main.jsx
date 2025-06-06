// ============================
// FILE: main.jsx
// Equivalent to Laravel's bootstrap/index.php or public/index.php
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);