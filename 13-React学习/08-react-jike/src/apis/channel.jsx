import request from '@/utils/request'

// 1.获取频道列表
export function getChannelListAPI() {
  return request({
    url: '/channels',
    method: 'GET'
  })
}
