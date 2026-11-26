// 组合reducer + 导出store
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store
