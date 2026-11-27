// axios封装处理
import axios from 'axios'
import { getToken } from './token'

const request = axios.create({
  // 1.根域名配置
  baseURL: 'https://geek.itheima.net/v1_0',
  // 2.超时时间
  timeout: 5000
})

// 3. 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 获取token
    const token = getToken()
    if (token) {
      // 添加到请求头(固定写法)
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 4. 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 401状态码表示token过期，需要重新登录
    if (error.response.status === 401) {
      // 清除token
      removeToken()
      // 跳转到登录页
      navigate('/login')
      // 强制刷新当前页面
      window.location.reload()
    }
    // 其他错误码，直接抛出错误
    return Promise.reject(error)
  }
)
export default request
