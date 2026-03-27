import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // O './styles/index.css' según tu estructura

// NOTA: Aquí hemos quitado <BrowserRouter> porque ya está dentro de App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)