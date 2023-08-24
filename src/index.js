import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PagesContextProvider } from './context/PagesContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PagesContextProvider>
    <App />
    </PagesContextProvider>
  </React.StrictMode>
);

