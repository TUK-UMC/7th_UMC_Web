import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import App from './App'; 
import reportWebVitals from './reportWebVitals';  

const root = ReactDOM.createRoot(document.getElementById('root'));  // 루트 DOM을 가져와서 React 애플리케이션을 마운트
root.render(
  <React.StrictMode>
    <App />  {}
  </React.StrictMode>
);


reportWebVitals();
