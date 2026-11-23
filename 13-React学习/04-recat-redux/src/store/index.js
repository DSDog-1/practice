import { configureStore } from '@reduxjs/toolkit'
// 引入counter模块的reducer函数
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    // 其他模块的reducer函数
  },
})

export default store // 导出store对象