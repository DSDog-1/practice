import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billSlice = createSlice({
  name: 'bill',
  // 初始状态
  initialState: {
    billList: []
  },
  reducers: {
    // 同步修改设置账单列表
    setBillList(state, action) {
      state.billList = action.payload
    }
  }
})
// 解构出action
const { setBillList } = billSlice.actions
// 编写异步action
const getBillList = () => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await axios.get('http://localhost:3000/ka')
    // 触发同步reducer
    dispatch(setBillList(res.data))
  }
}
export { getBillList }

// 导出reducer
export default billSlice.reducer
