# AJAX

使用axios库，XMLHttpRequest对象与服务器进行数据通信

## 1.使用

引入axios.js，使用axios函数（传入配置对象用.then回调函数接收结果）

~~~JS
    axios({
      url:'https://ajax-api.itheima.net/api/province'	
    }).then(res=>{
      document.querySelector('#app').innerHTML = res.data.data.join('<br>')
    })
~~~

### URL组成

统一资源定位器、定位地址、URL地址、网址，用于访问服务器上的资源

- 协议 https / http ：规定浏览器和服务器传输数据的格式 

- 域名：规定访问哪一台资源电脑

- 资源路径：访问资源在电脑中的具体位置

~~~js
url:'https://ajax-api.itheima.net/api/province'	
//   协议        域名（必写）		资源路径
~~~

### URL查询参数

浏览器提供给服务器的**额外信息**，让服务器返回浏览器想要的数据

~~~js
// http：//xxxx.com/xxx/xxx ? 参数名1 = 值1 & 参数名2 = 值2
~~~

~~~js
      url:'https://ajax-api.itheima.net/api/city',
      params:{
        pname:'河北省'		// 参数名：值
      }
~~~

### 请求方法

对服务器资源要执行的操作

- POST 提交数据
- GET 获取数据（可省略）

~~~js
        method:'POST',    // 请求方法
        data:{    // 提交数据 对象自动转成json字符串
          username:'admin',
          password:'123456'
        }
~~~

### 错误处理

~~~js
      .catch(err=>{   // 放在then方法后面
        console.log(err)
        console.log(err.response.data.message)  // 捕获错误信息中的message字段
        alert(err.response.data.message)
      })
~~~

### HTTP协议

规定浏览器发送及服务器返回内容的**格式**

#### 请求报文

按照格式**发送给服务器的内容**（Network - Fetch/XHR - 名称 -请求标头 - Headers）

- **请求行：请求方法，URL**，协议
- **请求头**：键值对格式的额外信息
- 空行：分隔请求头，空行之后的是发给服务器的资源
- **请求体：发送的资源**

#### 响应报文

按照格式**返回给浏览器的内容**（Network - Fetch/XHR - 名称 -响应标头 - Response）

- **响应行（状态行）**：协议、**HTTP响应状态码**、状态信息
- **响应头**：键值对格式的附加信息
- 空行：分隔响应头，空行之后的是服务器返回的资源
- **响应体：返回的资源**

> HTTP响应状态码：表明请求是否成功完成
>
> - 1xx 信息
> - 2xx 成功
> - 3xx 重定向消息
> - 4xx 客户端错误
> - 5xx 服务端错误

### 接口文档

描述**接口**的文章（后端）

>  接口：使用AJAX和服务器通讯时，使用的**URL，请求方法，以及参数**

### form-serialize插件

~~~js
// 先引入JS文件
serialize(表单,{ hash:true,empty:true})	
// 表单name名会作为对象的属性名（直接写接口文档中的参数名）
// hash 设置获取对象数据结构————true：JS对象（推荐）一般请求体里提交给服务器   false：查询字符串
// empty 设置是否获取空值————true：获取空值（推荐）   false：不获取
~~~

### 图片上传

~~~js
  document.querySelector('.upload').addEventListener('change', function(e) {
    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('img', file)
    axios({
      url: 'https://ajax-api.itheima.net/api/uploadimg',
      method: 'POST',
      data: fd
    }).then(res => {
      console.log(res)
      const imgUrl = res.data.data.url
      document.querySelector('.preview').src = imgUrl
    })
  })
~~~

## 2.增删改查

### 渲染数据

~~~js
// 获取      
axios({...}).then(res => {
    const bookList = res.data.data
// 渲染
    const htmlStr = bookList.map((item, index) => {
	     return `<tr data-id="${item.id}">
         <td>${index + 1}</td>
         <td>${item.bookname}</td>
         <td>${item.author}</td>
         <td>${item.publisher}</td>
         <td>
           <button class="row-edit-btn">编辑</button>
           <button id="deleteBtn">删除</button>
         </td>
      </tr>
          `
      }).join('')
      document.querySelector('#bookList').innerHTML = htmlStr
      })
~~~

### 新增数据

~~~js
// 创建弹窗对象
const addModal = document.querySelector('.add-modal')
// 自己实现 serialize：把表单里有 name 的控件收集成对象
    function serialize(form, options = {}) {
      const formData = new FormData(form)
      const obj = {}
      for (const [key, value] of formData) {
        if (!options.empty && !value) continue
        obj[key] = value
      }
      return obj
    }
    document.querySelector('#addBtn').addEventListener('click', () => {
// 收集表单数据提交到服务器保存
      const addForm = document.querySelector('.add-form')
      const bookObj = serialize(addForm, { hash: true, empty: true })
      axios({...}).then(res => {
// 渲染
        getBookList()
        addForm.reset()
        addModal.hide()
      })
    })
~~~

### 删除数据

~~~js
// 删除：事件委托到 tbody，点"删除"按钮才触发
    document.querySelector('#bookList').addEventListener('click', e => {
      if (e.target.id === 'deleteBtn') {
        // 获取图书id（自定义属性id）
        const theId = e.target.closest('tr').dataset.id
        // 调用删除接口 
        axios({...}).then(() => {
         // 刷新图书列表
          getBookList()
        })
      }
    })
~~~

### 编辑数据

~~~js
// 编辑弹窗
const editDom = document.querySelector('.edit-modal')
    const editForm = editDom.querySelector('.edit-form')
    document.querySelector('#bookList').addEventListener('click', e => {
      if (!e.target.classList.contains('row-edit-btn')) return
      // 获取编辑的图书的数据送入编辑表单
      const theId = Number(e.target.closest('tr').dataset.id)
	  axios({...}).then(res => {
             const bookObj = result.data.data
             // 遍历数据对象，使用属性去获取对应的标签快速赋值
        	const keys = Object.keys(bookObj)
        	keys.forEach(key => {
                doucment.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })
    })
	editModal.show()
}
})
~~~

## 3.XMLHttpRequest

AJAX原理：axios内部采用XHR对象与服务器交互，缩小代码体积

### 使用

~~~js
    const xhr = new XMLHttpRequest()  // 创建XHR实例对象
    xhr.open('GET', 'https://hmajax.itheima.net/api/province')  // 配置请求方法和地址
    xhr.addEventListener('loadend', () => {  // 监听请求完成事件
      console.log(xhr.response)
    })
    xhr.send()  // 发送请求
~~~

### 查询参数

~~~js
    xhr.open('GET', 'https://hmajax.itheima.net/api/city?panme=辽宁省')
	// 查询字符串API
	const qStr = new URLSearchParams(qObj).toString()
    xhr.open('GET', 'https://hmajax.itheima.net/api/city?${qstr}')    
~~~

### 请求体参数 

~~~js
    // 设置请求头
    xhr1.setRequestHeader('Content-Type', 'application/json')
    // 准备数据
    const userObj= {
      username:'admin',
      password:'123456'
    }
    // 发送请求
    xhr1.send(JSON.stringify(userObj))
~~~

## 4.Promise

表示（管理）一个**异步操作的最终完成结果及其结果值**

- 逻辑更清晰
- 了解axios函数的内部运作机制
- 解决回调函数地狱问题

~~~js
    const p = new Promise((resolve, reject) => {  // 创建Promise实例 pending待定状态，立即执行代码
      // 异步操作（状态敲定后无法转换）
      resolve('成功')		// fulfilled已兑现状态
	  reject(new Error('失败'))	// rejected已拒绝状态
    })
    p.then(res => { // 接收成功
      console.log(res)
    })
    p.catch(err => { // 接收错误
      console.log(err)
    })
~~~

#### 链式调用

~~~JS
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('北京市')
      }, 2000)
    })
    const p2 = p.then(res => {  // 新的Promise实例
      console.log(res)  // 北京市
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res + '天气晴朗')
        }, 2000)
      })
    })
    p2.then(res => {
      console.log(res)  // 北京市天气晴朗
    })
~~~

#### Promise.all 静态方法

~~~js
    const p = Promise.all([bjPromise,shPromise,gzPromise,szPromise])	// 数组
    p.then(res => {
      // 结果是一个数组,数组中每个元素都是一个Promise对象成功的结果且顺序和Promise.all中参数的顺序一致
      console.log(res)
    }).catch(err => {
      console.dir(err)
    })
~~~



合并多个Promise对象，.then（回调函数）等待所有**同时成功完成（或某一个失败）**，做后续逻辑

## 5.封装axios（Promise+XHR）

~~~js
    function myAxios(config) {    // 设置接收对象
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        if (config.params) {  // 有参数转换为查询字符串
          config.url = config.url + '?' + new URLSearchParams(config.params).toString()
        }
        xhr.open(config.method || 'GET', config.url)  // 默认GET
        xhr.addEventListener('loadend', () => {
          if (xhr.status >= 200 && xhr.status < 300) {    // 成功状态码
            resolve(JSON.parse(xhr.response))
          } else {
            reject(new Error(xhr.response))
          }
        })
        if (config.data) {  // 有数据时，设置请求头
          xhr.setRequestHeader('Content-Type', 'application/json')
          xhr.send(JSON.stringify(config.data))
        } else {
          xhr.send()
        }
      })
    }
~~~

## 6.同步和异步

### 同步代码

逐行执行，需**原地等待结果**后才向下执行

### 异步代码

调用后**耗时**，不阻塞代码继续运行，将来完成后触发一个**回调函数**接收结果

#### 宏任务

由**浏览器**环境执行的异步代码

- JS脚本执行事件（script）
- setTimeout / setInterval
- 用户交互事件
- AJAX请求完成事件

#### 微任务

由**JS引擎**环境执行的异步代码

- Promise对象.then()的回调

### 回调函数地狱

回调函数中多次**嵌套回调函数**，可读性差，异常无法捕获，耦合性严重

#### Promise链式调用方法

~~~js
	axios({}).then(res => {
    	return axios({})
     }).then(res => {
    	return axios({})
	}).then(res => {
    	console.log(res)
	})
~~~

#### async函数和await函数

~~~js
    async function getData() {  // 定义async函数
      try { // try包裹可能产生异常的代码,某一行代码可能产生异常,剩余代码不会执行
        // await等待Promise对象成功的结果
        const pObj = await axios({url: 'https://hmajax.itheima.net/api/province' })
        const cObj = await axios({url: 'https://hmajax.itheima.net/api/city', params: {pname: pObj.data.list[0].name}})
        const aObj = await axios({url: 'https://hmajax.itheima.net/api/area', params: {pname: pObj.data.list[0].name, cname: cObj.data.list[0].name}})
        console.log(aObj.data.list)
      } catch (error) { // 捕获异常
        console.dir(error)
      }
    }
~~~

### 事件循环

事件循环的**模型**负责执行代码、收集和处理事件以及执行队列中的子任务，为了不阻塞JS引擎

> 同步代码交给**调用栈**
>
> 异步代码交给**宿主环境（浏览器）**倒计时完成将回调函数送入宏任务队列排队
>
> 调用栈空闲时检查**任务队列**，优先执行微任务中的回调函数，随后执行宏任务
>
> - Promise对象是同步代码，回调是异步微任务

## 7.项目

### axios基地址公共配置

提取公共前缀地址，配置后axios请求时会baseURL + url

~~~JS
axios.defaults.baseURL = 'http://geek,itheima,net'
axios({ url:'/v1_0/authorizations' })
~~~

### 验证码登录

短信验证码接口：为此手机号生成验证码记录生成时间并存在服务器

验证码登录接口：对比判断验证码是否正确，是否在有效期内并返回结果

### token

访问权限的令牌，本质上是一串字符串，正确登录后由后端签发并返回，**判断是否有登录状态控制访问权限**

> **前端**只能判断**有无**token，**后端**能判断**有效性**

~~~js
const token = localStorage.getItem('token')
if(!token){		// 判断有无token
    location.herf = '../login/index.html'	// 未有效登录转到登录界面
}
~~~

### 身份验证

#### axios请求拦截器

发起请求之前触发的配置函数，对**请求参数**进行额外公共配置

~~~JS
    axios.interceptors.request.use(function(config) {
      // 请求头中添加token字段
      const token = localStorage.getItem('token')
      token && (config.headers.Authorization = `Bearer ${token}`)
      // 发送请求前做些什么
      return config 
    }, function(error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })
~~~

#### axios响应拦截器

响应回到then / catch 之前触发的拦截函数，对**响应结果统一处理**

~~~js
    axios.interceptors.response.use(function(response) {
      // 对响应数据做点什么，2xx触发成功回调
      const res = response.data   // 响应结果优化，直接返回响应结果对象
      return res
    }, function(error) {
      // 对响应错误做点什么
      if (error?.response?.status === 401) {   // 401状态码,说明token过期了,需要重新登录
        localStorage.removeItem('token')  // 清除token
        location.href = '/login.html'  // 重新跳转到登录页
      }
      return Promise.reject(error)
    })
~~~

