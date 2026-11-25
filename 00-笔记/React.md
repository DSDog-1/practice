# React

用于构建Web和原生交互界面的库

App -> index.jsx -> public/index.html(root)

## 1.JSX

JS的语法扩展，需要通过解析工具解析，JS代码中编写HTML模版结构

大括号{}可实现表达式

~~~jsx
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 调用函数 */}
      {getName()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>red</div>
~~~

### 渲染列表

~~~jsx
      <ul>
        { list.map(item => (
          <li key={item.id}>{item.name}</li>	{ /* 加上唯一的key，提升更新技能 */ }
        ))}
      </ul>
~~~

### 条件渲染

~~~jsx
      {/* 逻辑与 只需要控制一个元素的显示*/}
      <p>是否登录：{isLoggedIn && '是'}</p>
      {/* 三元运算 控制多个元素的显示 */}
      <p>是否登录：{isLoggedIn ? '是' : '否'}</p>
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
~~~

## 2.事件绑定

on + 事件名称 = {事件处理程序}

~~~jsx
      {/* 基础绑定 */}
	  <button onClick={handleClick}>点击我</button>
	  {/* 传递事件对象e、自定义参数 */}
	  const handleClick = (name, e) => {
	    console.log('点击了按钮', name, e)
	  }
      <button onClick={(e) => handleClick('张三', e)}>点击我</button>
~~~

## 3.组件

可互相嵌套，复用多次

### 使用

一个组件就是首字母大写的函数，渲染只需要当成标签写

~~~jsx
// 定义组件方法1
function Button() {
  return (
    <button>点击我</button>
  )
}
// 定义组件方法2
const Button = () => {
  return (
    <button>点击我！</button>
  )
}
    <div>
      {/* 使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
~~~

### 样式

~~~jsx
	  // 行内样式
      <div style={{ color: 'red' }}>red</div>
	  // 优化
	  const style = {
          color: 'red'
      }
      <div style={style}>red</div>
	  // css类名控制 多单词用驼峰
	  import './index.css'
	  <span className='foo'>span</span>
~~~

### 组件通信

组件之间的数据传递

#### 父子通信

父传子：父组件的数据传给子组件使用

**props**可传递**任意**的数据：数字、字符串、布尔值、数组、对象、函数、JSX，**只读**不可修改

~~~jsx
function Son(props){    // props是一个对象，包含了父组件传递过来的所有数据
  return (
    <div> {props.name} </div>	{/* 从props中获取name属性 */}
	<h1>{props.children}</h1>  {/* 从props中获取children属性 */}
  )
}
function App() {
  const name = '张三'
  return (
    <div>
      <Son name={name} />     {/* 传递数据 */}
          <Son><div>child</div> </Son>		 {/* 传递子组件 */}
    </div>
  )
}
~~~

子传父：在子组件中调用父组件中的函数并传递参数

~~~jsx
function Son({ onGetMsg }){   // 子组件接收父组件传递过来的函数onGetMsg
  const sonMsg = 'son msg'  // 子组件的消息
  return (
    <div>
      this is Son
      <button onClick={() => onGetMsg(sonMsg)}>sendMsg</button>   {/* 使用函数 */}
    </div>
  )
}
function App() {
  const [msg, setMsg] = useState('')   // 父组件的状态变量msg
  const getMsg = (msg) => {   // 定义一个函数，用于接收子组件传递过来的消息msg
    console.log(msg)
    setMsg(msg)   // 将子组件的消息赋值给状态变量msg
  }
  return (
    <div>
      this is App,{msg}     {/* 父组件内显示msg*/}
      <Son onGetMsg={getMsg} />   {/* 给子组件传递函数getMsg */}
    </div>
  )
}
~~~

#### 兄弟通信

借助**状态提升**通过父组件进行兄弟组件之间的数据传递

~~~jsx
import { useState } from 'react'

function A({ onGetAName }) {   // 接收父组件传过来的函数
  const name = 'this is A name'
  return (
    <div>
      this is A component
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  )
}

function B({ name }) {   // 组件B接收name属性
  return (
    <div>
      this is B component,{name}   {/* 显示name属性 */}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')   // 父组件的状态变量name
  const gatAName = (name) => {  // 定义一个函数，用于获取A组件的name
    console.log(name)
    setName(name)   // 将A组件的name赋值给状态变量name
  }
  return (
    <div>
      this is App
      <A onGetAName={gatAName} />   {/* 传递函数 */}
      <B name={name} />   {/* 传递状态变量name */}
    </div>
  )
}

export default App

~~~

#### 跨层通信

Context机制：顶层主件通过**Ctx.Provider**提供数据，底层组件通过**useContext钩子函数**获取消费数据

~~~jsx
const MsgContext = createContext()  // 创建一个上下文对象MsgContext

function B() {   
  const msg = useContext(MsgContext)  // 从上下文对象MsgContext中获取消息msg
  return (
    <div>
      this is B component,{msg} {/* 渲染消息msg */}
    </div>
  )
}
function App() {
  const msg = 'this is App msg'
  return (
    <div>
      <MsgContext.Provider value={msg}> 
        {/* 提供上下文对象MsgContext value为要传递的消息msg */}
        this is App
        <A />
      </MsgContext.Provider>
    </div>
  )
}
~~~

## 4.Hook函数

- 只能在组件中或其他自定义Hook函数中使用
- 只能在组件顶层调用，不能嵌套在if、for、其他函数中

### useState

React Hook函数，向组件添加了一个**状态变量**，**本质：数据驱动视图**

#### 使用

~~~jsx
  import { useState } from 'react'
  // count 状态变量，发生改变时，组件会重新渲染
  // setCount 状态变量的函数
  const [count, setCount] = useState(0)		// 返回数组
  // 点击按钮时，状态变量的函数
  const handleClick = () => {
    setCount(count + 1)
  }
        <button onClick={handleClick}>{count}</button>
~~~

#### 规则

状态不可变，**替换它**而不是修改它，不能引发视图更新

~~~jsx
count ++ // 不可行
~~~

改变对象：给set方法传一个**全新的对象**进行修改

~~~jsx
const [form, setForm] = useState({ name: 'Jack' })
const changeForm = () => {
  setForm({
    ...form,
    name: '李四'
  })
}
~~~

#### 受控表单绑定

~~~jsx
function App() {
  const [value, setValue] = useState('')  // 1.声明一个状态变量value
  return (
    <div>
      <input    // 2.输入框的值绑定到状态变量value
       type="text"  
       value={value}
       onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
~~~

### useEffect

#### 使用 

创建不是由事件引起而是**由渲染本身引起的操作**（AJAX请求，更改DOM）

~~~JSX
useEffect(() => { },[])
//  参数一：副作用函数，放要执行的操作
//	参数二：可选参，放依赖项数组，空数组副作用函数，组件初始渲染后执行一次
//				没有依赖项，组件初始渲染+组件更新时执行
//				添加特定依赖项，组件初始渲染+特定依赖项变化时执行
function App() {
  // 1.没有依赖项
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('没有依赖项的useEffect');
  })
  2.空依赖项数组
  useEffect(() => {
    console.log('空依赖项数组的useEffect');
  }, [])
  3.有依赖项的数组
  useEffect(() => {
    console.log('有依赖项的数组的useEffect');
  }, [count])
  return (
    <div>
      this is App
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  )
}
~~~

#### 清除副作用

~~~jsx
useEffect(() => {
    // 实现副作用操作逻辑
    return () => {
        // 清除副作用逻辑
    }
},[])
function Son () {
  // 渲染时开启一个定时器
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Son render')
    }, 1000)
    // 卸载时清除定时器
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      this is Son
    </div>
  )
}
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载</button>
    </div>
  )
}
~~~

### useRef

获取DOM

~~~jsx
  const inputRef = useRef(null)  // 声明一个ref变量inputRef
    const showDown = () => {
    console.log(inputRef.current.value)  // 获取输入框的值
  } 
      <input ref={inputRef} />	// 将ref变量绑定到输入框上
      <button onClick={showDown}>获取</button>
~~~

### 自定义Hook函数

以use大头的函数，实现逻辑的封装和复用

~~~jsx
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
~~~

## 5.评论案例

### 渲染评论列表

- 使用**useState维护**评论列表
- 使用**map方法**对列表数据进行遍历渲染

~~~jsx
  const [commentList, setCommentList] = useState(defaultList)
          {commentList.map(item => (
          <div key={item.rpid} className="reply-item">
          </div>
          ))}
~~~

### 删除评论

- 删自己的评论，拿到id做**filter过滤**
- 条件渲染

~~~JSX
  // 删除评论
  const handleDel = (id) => {
    setCommentList(commentList.filter(item => item.rpid !== id))
  }                 
{/*  只有自己的评论才显示删除 */}
{ user.uid === item.user.uid && 
<span className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</span>}
~~~

### 渲染导航Tab和高亮实现

- 点击谁就把type记录下来，然后和**遍历的type做匹配**，匹配到就设置负责高亮的类名

~~~jsx
  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    setType(type)
  }
{/* 高亮类名： active */}
{tabs.map(item => 
  <span 
     key={item.type} 
     { /* 匹配 */ }
     onClick={() => handleTabChange(item.type)} className={`nav-item ${type === item.type ? 'active' : ''}`}>
     {item.text}
  </span>)}
~~~

### 评论列表排序功能

- 把评论列表状态数据进行不同的排序处理

~~~js
  // 评论列表状态，默认按喜欢数量降序
  const [commentList, setCommentList] = useState(_.orderBy(defaultList, 'like', 'desc'))
    // 最热 => 喜欢数量降序；最新 => 创建时间降序
  const sortedList = _.orderBy(commentList, type === 'hot' ? 'like' : 'ctime', 'desc')
~~~

### 发表评论

- 获取评论内容
- 点击按钮发布

~~~jsx
  const [content, setContent] = useState('')
            {/* 评论框 */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

  const handlePublish = () => {
    setCommentList([
                    {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
~~~

- id处理 **uuid插件**
- 时间处理  **dayjs库**

~~~jsx
import { v4 as uuidv4 } from 'uuid'
    rpid: uuidv4(),  // 随机id
import dayjs from 'dayjs'
    ctime: dayjs(new Date()).format('MM-DD HH:mm'),   // 格式化 月-日 时:分
~~~

- 清空内容，**value设置为空串**
- 重新聚焦，拿到dom元素**调用foucs方法**

~~~jsx
    setContent('')
    inputRef.current.focus()
~~~

### 优化

- 使用接口请求的方式获取列表渲染：使用**json-server工具模拟接口服务**，用过**axios发送接口请求**，使用**useEffect调用接口获取数据**

~~~jsx
    "server": "json-server db.json --port 3004"  // 引入接口数据

  const [commentList, setCommentList] = useState([])
  // 评论列表数据获取
  useEffect(() => {
    async function getCommentList() {
      // 发送请求获取评论列表
      const res = await axios.get('http://localhost:3004/List')
        setCommentList(res.data)
    }
    getCommentList()
  }, [])
~~~

- 使用自定义Hook函数封装数据请求的逻辑

~~~jsx
// 封装
function useGetList(){
  // 获取接口数据

  return {
    commentList,
    setCommentList,
  }
}
  const { commentList, setCommentList } = useGetList()
~~~

- 把评论中的每一项抽象成一个独立的组件实现渲染：**智能组件**负责数据的获取，**UI组件**负责数据的渲染

~~~jsx
// 封装评论项组件
function Item({item, onDel}){
         return(
          )}
    {/* 评论项 */}
    {commentList.map(item => <Item key={item.rpid} item={item} onDel={handleDel}/>)}
~~~

## 6.JS库

### classnames优化类名控制

通过条件动态控制class类名的显示

~~~jsx
import classNames from 'classnames'
className={classNames('nav-item', {
   active: type === item.type,
})}>
~~~

## 7.Redux

**集中状态管理工具**，可独立于框架运行

### 独立运行

- state：一个对象，存放着管理数据的状态
- action：一个对象，用来描述怎么改数据
- reducer：一个函数，根据action的描述生成一个新的state

~~~jsx
  <script src="https://unpkg.com/redux@4.1.2/dist/redux.min.js"></script>
  <script>
    // 1.定义reducer函数,state是当前状态
    function reducer(state = { count: 0 }, action) {
      // 处理action,数据不可变,基于原始状态生成一个新的状态
      if (action.type === 'increment') {
        return { count: state.count + 1 };
      }
      if (action.type === 'decrement') {
        return { count: state.count - 1 };
      }
      return state;
    }
    // 2.使用函数生成store实例
    const store = Redux.createStore(reducer);
    // 3.订阅store实例,监听状态变化
    store.subscribe(() => {
      // 状态变化时,更新视图
      console.log('状态变化', store.getState());
      document.getElementById('count').textContent = store.getState().count;
    });
    // 4.通过dispatch方法触发action,更新状态
    const inBtn  = document.getElementById('increment');
    inBtn.addEventListener('click', () => {
      // 点击+号按钮,触发increment action
      store.dispatch({ type: 'increment' });
    });

    const deBtn  = document.getElementById('decrement');
    deBtn.addEventListener('click', () => {
      // 点击-号按钮,触发decrement action
      store.dispatch({ type: 'decrement' });
    });
  </script>
~~~

### 依赖react

npm i @reduxjs/toolkit  react-redux

![image-20261123172352288](D:\desktop\代码\00-笔记\React\image-20261123172352288.png)

~~~jsx
// counterStore.js
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
~~~

~~~jsx
// channelStore.js
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
~~~

~~~jsx
// index.js
import { configureStore } from '@reduxjs/toolkit'
// 引入counter模块的reducer函数
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    // 其他模块的reducer函数
  },
})

export default store // 导出store对象
~~~

~~~jsx
// main.jsx
// 引入store对象
import store from './store'
// 引入Provider组件
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
~~~

~~~jsx
// App.jsx
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

~~~

## 8.外卖案例

### 分类和商品列表渲染

- 启动项目
- 使用 RTX编写store

~~~jsx
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload
    }
  }
})
// 异步请求
const { setFoodList } = foodsStore.actions
const fetchFoodList = ()=> {
  return async(dispatch) =>{
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}
export { fetchFoodList }
export default foodsStore.reducer
~~~

~~~jsx
import { configureStore } from '@reduxjs/toolkit'
import foodsReducer from './modules/takeway'

const store = configureStore({
  reducer: {
    foods: foodsReducer,
  }
})
export default store
~~~

~~~jsx
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import store from './store'
import { Provider } from 'react-redux'


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
~~~

~~~jsx
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFoodList } from './store/modules/takeaway'

const App = () => {
const dispatch = useDispatch()
// 触发异步请求
  useEffect(() => {
    dispatch(fetchFoodList())
  }, [dispatch])
~~~

- 组件触发action并渲染

~~~jsx
// 从store中获取商品列表
  const { foodList } = useSelector(state => state.foods)
              <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodList.map(item => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
~~~

### 点击分类激活交互实现

- 使用RTK编写管理activeindex
- 组件中点击时触发action更改activeindex
- 动态控制激活类名显示

~~~jsx
const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 菜单激活下标值
    activeIndex: 0,
  },
  reducers: {
    // 菜单激活下标值
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    }
  }
})
~~~

~~~jsx
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../../store/modules/takeaway'

const Menu = () => {
  const dispatch = useDispatch()
  // 从 store 取分类列表和当前激活的下标
  const { foodList, activeIndex } = useSelector(state => state.foods)
  const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(setActiveIndex(index))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              { active: activeIndex === index }
            )}
          >
            {item.name}
          </div>
~~~

### 商品列表切换显示

- 条件渲染

~~~jsx
  const { foodList, activeIndex } = useSelector(state => state.foods)
  return (  activeIndex === index && <FoodsCategory
~~~

### 添加购物车

- 使用RTX管理新状态cartList
- 组件点击时收集数据提交action添加购物车

~~~jsx
const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    // 购物车商品列表
    cartList: [],
  },
  reducers: {
    // 购物车商品列表
    setCartList(state, action) {
      // 是否存在该商品
      const item = state.cartList.find(item => item.id === action.payload.id)
      if(item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
~~~

~~~jsx
            <span className="plus" onClick={() => dispatch(setCartList({
              id,
~~~

### 统计区域功能

- 基于store中的cartList的length渲染数量
- 基于store中的cartList累加
- cartList的length不为0则高亮

~~~jsx
const Cart = () => {
  const { cartList } = useSelector(state => state.foods)
  // 计算购物车价格
  const totalPrice = cartList.reduce((pre, cur) => pre + cur.price * cur.count, 0)
~~~

### 购物车列表

- 使用cartList遍历渲染列表

~~~jsx
 {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', { 'visible': cartList.length > 0 })}>
        </div>
        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
~~~

- RTK中增加增减reducer，组件中提交active

~~~jsx
    // count增
    increCount (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if(item) {
        item.count++
      }
    },
    // count减
    decreCount (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if(item) {
        item.count--
      }
~~~

- RTK中增加清除购物车reducer，组件中提交active

~~~jsx
    // 清空商品
    clearCartList(state) {
      state.cartList = []
    }
~~~

### 购物车显示和隐藏

- 使用useState声明控制显隐状态
- 点击统计区域设置为true，蒙层false

~~~jsx
  // 控制购物车打开关闭
  const [visible, setVisible] = useState(false)
~~~

##   9.ReactRouter

前端路由：一个路径path对应一个组件component

~~~jsx
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// 创建路由
const router = createBrowserRouter([
    {
        path:'/login',
        element:<div>登录页</div>
    },
    {
        path:'/acticle',
        element:<div>文章页</div>
    }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
~~~

### 抽象路由模块

![image-20261124220616790](D:\desktop\代码\00-笔记\React\image-20261124220616790.png)

~~~jsx
const Article = () => {
  return (
    <div>
      <h1>Article</h1>
    </div>
  )
}
export default Article

import Login from '../page/Login'
import Article from '../page/Article'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/article',
    element: <Article />,
  },
])
export default router
// 导入路由
import router from './router'
~~~

### 路由导航

多个路由需要进行**路由跳转**，并在跳转的同时有可能需要**传递参数进行通信**

#### 声明式导航

~~~jsx
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Link to="/article">文章页</Link>
~~~

#### 编程式导航

~~~jsx
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/article')}>跳转到文章</button>
~~~

### 导航传参

#### searchParams传参

~~~jsx
      <button onClick={()=>navigate('/article?id=123&name=张三')}>传参</button>

import { useSearchParams } from "react-router-dom"
const Article = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const name = params.get('name')
  return (
    <div>
      <h1>Article</h1>
      <p>id:{id}</p>
      <p>name:{name}</p>
    </div>
  )
~~~

#### params传参

~~~jsx
      <button onClick={()=>navigate('/article/123/张三')}>传参</button>

 {
    path: '/article/:id/:name',
    element: <Article />,
  },
      
import { useParams } from "react-router-dom"
const Article = () => {
  const params = useParams()
   const id = params.id
   const name = params.name
  return (
    <div>
      <h1>Article</h1>
      <p>id:{id}</p>
      <p>name:{name}</p>
    </div>
  )
}
~~~

### 嵌套路由配置

#### 基础配置

~~~jsx
    path: '/Layout',
    element: <Layout />,
    children: [
      {
        path: 'board',
        element: <Board />,
      },
      {
        path: 'about',
        element: <About />,
      }
    ]

import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <h1>一级路由Layout</h1>
        <Link to="/Layout/board">Board</Link>
        <Link to="/Layout/about">About</Link>
      {/* 配置二级路由出口 */}
      <Outlet />
    </div>
  )
~~~

#### 默认二级路由设置

访问一级路由时，默认的二级路由也可以渲染

~~~jsx
      // 默认二级路由
      {
        index: true,
        element: <Board />,
      },
<Link to="/Layout">Board</Link>
~~~

### 404路由配置

当url路径找不到对应的path时，使用404渲染

~~~jsx
  // 兜底末尾组件
  {
    path: '*',
    element: <NotFound />,
  }
~~~

### 路由模式

#### history模式

> url/login
>
> **需要**后端支持
>
> const router = createBrowserRouter([

#### hash模式

> url/#/login
>
> **无需**后端支持
>
> const router = createHashRouter([

## 10.记账本案例

### 配置别名路径@

- 路径解析配置

~~~jsx
// vite.config.js

import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

~~~

- 路径联想配置

~~~jsx
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
~~~

###  数据Mock

前端在没有实际后端接口的支持下先进行接口数据的模拟

- 前端直接写假数据
- 自研Mock平台
- json-server等工具（✅）

~~~jsx
    "server": "json-server --watch ./server/data.json"
~~~

### 整体路由设计

~~~jsx
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/month',
        element: <Month />,
      },

      {
        path: '/year',
        element: <Year />,
      },
    ],
  },
  {
    path: '/new',
    element: <New />,
  },
])
export default router
~~~

### antD-mobile主题定制

~~~jsx
const Layout = () => {
  return (
    <div>
      <Outlet />
      layout
      <Button color="primary">测试全局</Button>
      <div className="my-button">
        <Button color="primary">测试局部</Button>
      </div>
      </div>
  )
}
~~~

#### 全局生效

~~~css
:root:root{
  --adm-color-primary: #007bff;
}
~~~

#### 局部生效

~~~css
.my-button{ /* 类名 */
  --adm-color-primary: #a06200;
}
~~~

### Redux管理账目列表

~~~jsx
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
~~~

~~~jsx
import { configureStore } from '@reduxjs/toolkit'
import billReducer from './modules/billStore'

const store = configureStore({
  reducer: {
    bill: billReducer
  }
})
export default store
~~~

~~~jsx
import { getBillList } from '@/store/modules/billStore.js'
import { useDispatch } from 'react-redux'

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])
~~~

### TabBar功能

TabBar**标签栏组件**进行布局以及路由切换（看文档-找相似Demo-复制代码跑通-定制化修改）

环境：npm i -D sass

![image-20261125003536174](D:\desktop\代码\00-笔记\React\image-20261125003536174.png)

~~~jsx
  const navigate = useNavigate()
  const switchRoute = (path) => {
    navigate(path)
  }
  return (
      <div className="footer">
        <TabBar onChange={switchRoute}>
~~~

### 统计区域

- 点击切换选择框

~~~jsx
import { useState } from 'react'
import classNames from 'classnames'
const Month = () => {
  // 控制弹窗打开和关闭
  const [dataVisible, setDataVisible] = useState(false)
  // 确认选择时间
  const onConfirm = () => {
    setDataVisible(false)
  }
  return (
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDataVisible(!dataVisible)}>
            <span className="text">
              2023 | 3月账单
            </span>
            {/* 时间切换箭头:根据弹窗打开状态控制类名是否存在 */}
            <span className={classNames('arrow',dataVisible && 'expand')}></span>
          </div>

          {/* 时间选择器 */}
          <DatePicker
            visible={dataVisible}
            onCancel={() => setDataVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDataVisible(false)}
~~~

- 点击确定切换时间显示

~~~jsx
  // 选择的时间
  const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()))
  // 确认选择时间
  const onConfirm = (date) => {
    setDataVisible(false)
    setCurrentDate(dayjs(date))
  }
              <span className="text">
              {currentDate.format('YYYY')} | {currentDate.format('M')}月账单
            </span>
~~~

- 账单数据按月分组

~~~jsx
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import _ from 'lodash'

const Month = () => {
  // 按月做数据分组
  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    // return计算的结果
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
~~~

- 计算统计数据

~~~jsx
  // 计算当前月的总金额
  const monthResult = useMemo(() => {
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((pre, cur) => pre + cur.money, 0)
    const income = currentMonthList.filter(item => item.type === 'income').reduce((pre, cur) => pre + cur.money, 0)
    return {
      pay,
      income,
      total: income + pay
     }
  }, [currentMonthList])
  // 确认回调
  const onConfirm = (date) => {
    setDataVisible(false)
    setCurrentDate(dayjs(date))
    const formatDate = dayjs(date).format('YYYY-MM')
    console.log(formatDate);
    setMonthList(monthGroup[formatDate] || [])
  }
~~~

- 初始化时渲染统计数据

~~~jsx
// 初始化当前月的账单列表
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    // 边界值处理
    if (monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])
~~~

- 单日统计列表

~~~jsx
  // 日账单区域
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [currentMonthList])
  
	   {/* 日账单区域 */}
        {
          dayGroup.keys.map((key) => {
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
          })
        }
~~~

### 列表区域

- 单日账单列表展示

~~~JSX
export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
  billListData[key].forEach(bill => {
    bill.list.forEach(item => {
      prev[item.type] = item.name
    })
  })
  return prev
}, {})

                <div className="billType">{billTypeToName[item.useFor]}</div>
~~~

- 点击切换列表显示

~~~jsx
  // 控制展开收起
  const [isShow, setIsShow] = useState(false)
	{/* 展开收起图标 */}
          <span className={classNames('arrow', isShow && 'expand')} onClick={() => setIsShow(!isShow)}></span>
        </div>

      <div className="billList" style={{ display: isShow ? 'block' : 'none' }}>
~~~

- 账单类型图标组件封装

~~~jsx
const Icon = ({type}) => {
  return (
    <img
      src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${type}.svg`}
      alt={`icon-${type}`}
	
	const Icon = billTypeToIcon[item.useFor]
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              {Icon ? <Icon /> : null}
~~~

### 新增账单

- 不同类型的账单列表渲染
- 支出与收入两种状态切换

~~~jsx
  // 记账类型
  const [billType, setBillType] = useState('pay') 
  
		 <Button
            shape="rounded"
            className={classNames(billType === 'pay' ? 'selected' : '')}
            onClick={() => setBillType('pay')}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === 'income' ? 'selected' : '')}
            shape="rounded"
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
~~~

- 点击保存实现记账功能

~~~jsx
const New = () => {
  const navigate = useNavigate()
  // 记账类型
  const [billType, setBillType] = useState('pay') 
  // 金额
  const [money, setMoney] = useState('0.00')
  // 金额改变时触发
  const moneyChange =(value)=> {
    setMoney(value)
  }
  // 收集账单类型
  const [useFor, setUseFor] = useState('')
  const dispatch = useDispatch()
  // 保存账单
  const saveBill = () => {
    // 收集表单数据
    const data = {
      type: billType,
      money: billType === 'pay' ? -money : money,
      date: new Date(),
      useFor: useFor,
    }
    console.log(data);
    // 触发异步action
    dispatch(addBillList(data))
~~~

~~~jsx
    // 同步修改添加账单
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  }
})
const addBillList = (data) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await axios.post('http://localhost:3000/ka', data)
    // 触发同步reducer
    dispatch(addBill(res.data))
  }
~~~

