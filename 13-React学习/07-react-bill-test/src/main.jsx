import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from '@/router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import store from '@/store/index.js'
import { Provider } from 'react-redux'



//// 引入主题
import './theme.css'

import sum from '@/test.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
