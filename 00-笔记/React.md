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

