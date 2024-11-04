// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import TravelApp from './TravelApp'; // Ensure this path is correct
import './index.css'; // Optional: Import any global CSS if you have

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TravelApp />
  </React.StrictMode>
);
