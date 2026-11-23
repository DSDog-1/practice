import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // 初始状态
  initialState: {
    count: 0,
  },
  // 修改状态的方法 同步操作 支持直接修改
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addToNum(state, action) {
      state.count = action.payload
    }
  },
})

// 解构出actionCreater函数
const { increment, decrement, addToNum } = counterStore.actions
// 获取reducer函数
const reducer = counterStore.reducer
// 按需导出actionCreater函数
export { increment, decrement, addToNum }
// 默认导出reducer函数
export default reducer