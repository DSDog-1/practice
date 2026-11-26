// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import request from '@/utils/request'
import { setToken as _setToken, getToken } from '@/utils/token'


const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || ''
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 保存到本地存储
      _setToken(action.payload)
    }
  }
})

// 异步修改方法
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1.发送异步请求
    const res = await request.post('/authorizations', loginForm)
    // 2.提交同步action进行状态token存入
    dispatch(setToken(res.data.token))
  }
}

// 解构
const { setToken } = userStore.actions
const userReducer = userStore.reducer
export { setToken, fetchLogin }
export default userReducer


