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