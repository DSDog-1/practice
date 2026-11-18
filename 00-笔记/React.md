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



## 4.useState

React Hook函数，向组件添加了一个**状态变量**，**本质：数据驱动视图**

### 使用

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

### 规则

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

## 6.JS库

### classnames优化类名控制

通过条件动态控制class类名的显示

~~~jsx
import classNames from 'classnames'
className={classNames('nav-item', {
   active: type === item.type,
})}>
~~~

