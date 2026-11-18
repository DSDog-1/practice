import { useState } from 'react'
import './index.css'

const count = 100
function getName() {
  return 'this is message'
}
const list = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
]
const isLoggedIn = false
const articleType = 2
{/* 传递自定义参数 */}
const handleClick = (e, name) => {
  console.log('点击了按钮', e, name)
}
{/* 复杂条件显示 */}
function getArticleType() {
  if (articleType === 1) {
    return <div>技术文章</div>
  } else if (articleType === 2) {
    return <div>生活文章</div>
  } else {
    return <div>未知文章</div>
  }
}
function App() {
  // count 状态变量，发生改变时，组件会重新渲染
  // setCount 状态变量的函数
  const [count, setCount] = useState(0)
  // 点击按钮时，状态变量的函数
  const handleClick = () => {
    setCount(count + 1)
  }
const [form, setForm] = useState({ name: 'Jack' })
const changeForm = () => {
  setForm({
    ...form,
    name: '李四'
  })
}
  return (
    <div>
      <h1>Hello React</h1>
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 调用函数 */}
      {getName()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>red</div>
    <div>
      {/* 渲染列表 */}
      <ul>
        { list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    <div>
      {/* 渲染条件 */}
      {/* 逻辑与 只需要控制一个元素的显示*/}
      <p>是否登录：{isLoggedIn && '是'}</p>
      {/* 三元运算 控制多个元素的显示 */}
      <p>是否登录：{isLoggedIn ? '是' : '否'}</p>
        {/* 复杂条件显示 */}
        {getArticleType()}
    </div>
    <div>
      <button onClick={(e) => handleClick(e, '张三')}>点击我</button>
    </div>
    <div>
      {/* 使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>{form.name}</button>
      <span className='foo'>span</span>
    </div>
    </div>
  )
} 
// 定义组件
// function Button() {
//   return (
//     <button>点击我！</button>
//   )
// }
const Button = () => {
  return (
    <button>点击我！</button>
  )
}





export default App
