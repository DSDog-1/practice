import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// 引入store对象
import store from './store'
// 引入Provider组件
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
