import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2iftqb743qbcmrjj.us.auth0.com"
      clientId="URPM5PqYJUEzq6NqccFp0Ik7BuQLr8sh"
      redirect_uri={window.location.origin}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Auth0Provider>
  </React.StrictMode>
)
