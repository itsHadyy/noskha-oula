import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TestProvider } from './context/TestContext'
import { CartProvider } from './context/CartContext'
import App from './App'
import './styles/variables.css'
import './styles/reset.css'
import './styles/global.css'
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <TestProvider>
          <App />
        </TestProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
