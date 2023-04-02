import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirebaseContext } from './context/Firebase'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <FirebaseContext>
    <App />
    </FirebaseContext>
  </React.StrictMode>,
)
