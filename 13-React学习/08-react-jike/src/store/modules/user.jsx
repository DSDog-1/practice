// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import request from '@/utils/request'
import { setToken as _setToken, getToken, removeToken } from '@/utils/token'
import { loginAPI, getUserInfoAPI } from '@/apis/user'


const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 保存到本地存储
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      // 清除token
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

// 异步修改方法
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1.发送异步请求
    const res = await loginAPI(loginForm)
    // 2.提交同步action进行状态token存入
    dispatch(setToken(res.data.token))
  }
}
// 获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 1.发送异步请求
    const res = await getUserInfoAPI()
    // 2.提交同步action进行状态userInfo存入
    dispatch(setUserInfo(res.data))
  }
}



// 解构
const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer
export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }
export default userReducer


