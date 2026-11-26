// axios封装处理
import axios from 'axios'

const request = axios.create({
  // 1.根域名配置
  baseURL: 'https://geek.itheima.net/v1_0',
  // 2.超时时间
  timeout: 5000
})

// 3. 请求拦截器/响应拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default request
