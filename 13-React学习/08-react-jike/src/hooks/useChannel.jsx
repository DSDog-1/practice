// 封装获取频道列表的逻辑
import { getChannelListAPI } from '@/apis/channel'
import { useState, useEffect } from 'react'

function useChannel() {
  // 1.获取频道列表所有的逻辑
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelListAPI()
      setChannelList(res.data.data.channels)
    }
    getChannelList()
  }, [])
  // 2.把组件中要用到的数据return出去
  return {
    channelList
  }
}
export { useChannel }
