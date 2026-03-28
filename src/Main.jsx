import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This points to your App.js or App.jsx
import './index.css';   // This pulls in your Neon Tailwind colors

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
