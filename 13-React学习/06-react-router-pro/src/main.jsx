import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// 导入路由
import router from './router'
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
