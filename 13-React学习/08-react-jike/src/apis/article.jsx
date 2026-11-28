import request from '@/utils/request'

// 1.提交文章表单
export function createArticleAPI(data){
  return request({
    url: 'mp/articles?draft=false',
    method: 'POST',
    data
  })
}
// 2.获取文章列表
export function getArticleListAPI(params){
  // 调用请求模块 发送请求
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}