import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// 引入action对象
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
function App() {
  const {count} = useSelector(state => state.counter)
  const {channelList} = useSelector(state => state.channel)
  const dispatch = useDispatch()
  // 使用useEffect钩子，组件挂载时发送异步请求获取频道列表
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add To 20</button>
      <ul>
        {channelList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
