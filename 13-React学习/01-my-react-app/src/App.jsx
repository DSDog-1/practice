// import { useState } from 'react'
// import './index.css'

// const count = 100
// function getName() {
//   return 'this is message'
// }
// const list = [
//   { id: 1, name: '张三' },
//   { id: 2, name: '李四' },
//   { id: 3, name: '王五' },
// ]
// const isLoggedIn = false
// const articleType = 2
// {/* 传递自定义参数 */}
// const handleClick = (e, name) => {
//   console.log('点击了按钮', e, name)
// }
// {/* 复杂条件显示 */}
// function getArticleType() {
//   if (articleType === 1) {
//     return <div>技术文章</div>
//   } else if (articleType === 2) {
//     return <div>生活文章</div>
//   } else {
//     return <div>未知文章</div>
//   }
// }
// function App() {
//   // count 状态变量，发生改变时，组件会重新渲染
//   // setCount 状态变量的函数
//   const [count, setCount] = useState(0)
//   // 点击按钮时，状态变量的函数
//   const handleClick = () => {
//     setCount(count + 1)
//   }
// const [form, setForm] = useState({ name: 'Jack' })
// const changeForm = () => {
//   setForm({
//     ...form,
//     name: '李四'
//   })
// }
//   return (
//     <div>
//       <h1>Hello React</h1>
//       {/* 使用引号传递字符串 */}
//       {'this is message'}
//       {/* 识别js变量 */}
//       {count}
//       {/* 调用函数 */}
//       {getName()}
//       {/* 使用js对象 */}
//       <div style={{ color: 'red' }}>red</div>
//     <div>
//       {/* 渲染列表 */}
//       <ul>
//         { list.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//     <div>
//       {/* 渲染条件 */}
//       {/* 逻辑与 只需要控制一个元素的显示*/}
//       <p>是否登录：{isLoggedIn && '是'}</p>
//       {/* 三元运算 控制多个元素的显示 */}
//       <p>是否登录：{isLoggedIn ? '是' : '否'}</p>
//         {/* 复杂条件显示 */}
//         {getArticleType()}
//     </div>
//     <div>
//       <button onClick={(e) => handleClick(e, '张三')}>点击我</button>
//     </div>
//     <div>
//       {/* 使用组件 */}
//       {/* 自闭和 */}
//       <Button />
//       {/* 成对标签 */}
//       <Button></Button>
//     </div>
//     <div>
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={changeForm}>{form.name}</button>
//       <span className='foo'>span</span>
//     </div>
//     </div>
//   )
// } 
// // 定义组件
// // function Button() {
// //   return (
// //     <button>点击我！</button>
// //   )
// // }
// const Button = () => {
//   return (
//     <button>点击我！</button>
//   )
// }





// export default App



// import { useState, useRef } from 'react'

// function App() {
//   const [value, setValue] = useState('')  // 1.声明一个状态变量value
//   const inputRef = useRef(null)  // 声明一个ref变量inputRef
//   const showDown = () => {
//     console.log(inputRef.current.value)  // 获取输入框的值
//   } 
//   return (
//     <div>
//       <input    // 2.输入框的值绑定到状态变量value
//        type="text"  
//        value={value}
//        onChange={(e) => setValue(e.target.value)}
//        ref={inputRef} // 将ref变量绑定到输入框上
//        />
//       <button onClick={showDown}>获取</button>
//     </div>
//   )
// }

// export default App






// import { useState } from 'react'

// function Son({ onGetMsg }){   // 子组件接收父组件传递过来的函数onGetMsg
//   const sonMsg = 'son msg'  // 子组件的消息
//   return (
//     <div>
//       this is Son
//       <button onClick={() => onGetMsg(sonMsg)}>sendMsg</button>   {/* 使用函数 */}
//     </div>
//   )
// }

// function App() {
//   const [msg, setMsg] = useState('')   // 父组件的状态变量msg
//   const getMsg = (msg) => {   // 定义一个函数，用于接收子组件传递过来的消息msg
//     console.log(msg)
//     setMsg(msg)   // 将子组件的消息赋值给状态变量msg
//   }
//   return (
//     <div>
//       this is App,{msg}     {/* 父组件内显示msg*/}
//       <Son onGetMsg={getMsg} />   {/* 给子组件传递函数getMsg */}
//     </div>
//   )
// }

// export default App



// import { useState, createContext, useContext } from 'react'



// const MsgContext = createContext()  // 创建一个上下文对象MsgContext

// function A() { 
//   return (
//     <div>
//       this is A component
//       <B />
//     </div>
//   )
// }

// function B() {   
//   const msg = useContext(MsgContext)  // 从上下文对象MsgContext中获取消息msg
//   return (
//     <div>
//       this is B component,{msg} {/* 渲染消息msg */}
//     </div>
//   )
// }

// function App() {
//   const msg = 'this is App msg'
//   return (
//     <div>
//       <MsgContext.Provider value={msg}> 
//         {/* 提供上下文对象MsgContext value为要传递的消息msg */}
//         this is App
//         <A />
//       </MsgContext.Provider>
//     </div>
//   )
// }

// export default App




import { useEffect, useState } from 'react'
function useToggle(){   //  定义一个hooks函数useToggle
  // 可复用的逻辑代码
  const [value, setValue] = useState(true)
  const toggle = () => {
    setValue(!value)
  }
    // 哪些状态和回调函数需要在其他组件中使用
    return {
      value,
      toggle
    }
  }
function App() {
  const { value, toggle } = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App


// import { useState } from 'react'

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App