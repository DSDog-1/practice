import { createSlice } from '@reduxjs/toolkit'

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload
    }
  }
})
// 异步请求
const { setChannelList } = channelStore.actions
const fetchChannelList = ()=> {
  return async(dispatch) =>{
    const res = await axios.get('http://geek.itheima.net/v1_0/channel')
    dispatch(setChannelList(res.data.data.channels))
  }
}
export { fetchChannelList }
export default channelStore.reducer