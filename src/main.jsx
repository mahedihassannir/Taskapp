import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import PrivateRoute from './Private/PrivateRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
      <PrivateRoute>
        <Home></Home>
      </PrivateRoute>
    </div>
  </React.StrictMode>,
)
