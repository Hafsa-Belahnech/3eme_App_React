import React from 'react';
import ReactDOM from 'react-dom/client'; // On utilise le client pour React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Précise bien l'extension .jsx ici

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


