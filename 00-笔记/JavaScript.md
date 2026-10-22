# JS（JavaScript）

运行在**客户端**（浏览器）的**编程语言**，实现人机交互效果。

**ECMAScript+Web APIs**（DOM+BOM）

- 网页特效
- 表单验证
- 数据交互
- 服务端编程

## 1.书写位置

### 内部

~~~javascript
<body>
  <!-- 内部JS -->
  <script>
    // 页面弹出提示框
    alert('hello world')
  </script>
</body>
~~~

### 外部

~~~js
<body>
  <script src="./js/my.js">
  //中间禁止写内容    
  </script>
</body>
~~~

### 内联

代码写在标签内部

## 2.输入输出

~~~js
    // 文档输出内容
    document.write('hello world')
    document.write('<h1>hello world</h1>')
    // 页面弹出提示框
    alert('hello world')
    // 控制台输出内容
    console.log('hello world')
    // 对话框输入
    prompt('请输入您的姓名：')
~~~

## 3.变量

内存中存储**数据**的**容器**

### 初始化

> 变量名只能由**_**、**字母**、**数字**、**$**组成，数字不能开头，不能用关键字
>
> 严格区分大小写

~~~js
	// 1.声明变量 不可重复声明
    let name
    // 2.赋值（变量名 = 字面量）
    name = '张三'
    // 3.输出
    console.log(name)
    
    // 4.声明变量并赋值（let 变量名 = 字面量）
    let age = 18
    // 5.更新变量值（右给左）
    age = 20
    // 6.声明多个变量（不提倡）
    let a = 10,b = 20,c = 30
    console.log(a,b,c)
~~~

### 数组 Array

**一组数据**存储在**单个变量名**下的方式

> 可存储任意类型的数据
>
> 有序，索引（下标）从左至右**从零开始**

~~~js
    // 1. 声明数组let arr = []
    let arr = ['张三','李四','王五','赵六','钱七']
    // 2. 使用数组元素（数组名[索引]）
    console.log(arr[0])
	// 3. 输出数组长度（数组名.length）
    console.log(arr.length)
~~~

### 常量

变量永远**不会改变**时，使用**const**声明变量

> 不许更改
>
> 声明时必须赋值（初始化）

~~~js
    // 1. 声明常量（const 常量名 = 字面量）
    const PI = 3.14
~~~

## 4.数据类型

### 基本数据类型

#### number 数字型

> 弱数据类型 
>
>  算术运算符：+加 -减 *乘 /除 %取余 **有优先级**
>
> NaN 计算错误、粘性

#### string 字符串型

> 单引**''**     双引**""**     反引**``**
>
> 单引内双引，双引内单引
>
> ~~~js
>     let str1 = ''// 空字符串
>     let age = 18
>     document.write('我今年' + age + '岁')// 输出字符串拼接后的结果
>     document.write(`我今年${age}岁`)// 模板字符串 反引号，支持换行
> ~~~

#### boolean 布尔型

> 只有**true**与**false**

#### undefined 未定义型

> 只声明变量未赋值输出undefined

#### null 空类型

> 赋值了但内容为空，尚未创建的**对象**

### 引用数据类型

- object 对象

### 检测数据类型

~~~js
    console.log(typeof a) 
    console.log(typeof (a))
~~~

### 类型转换

#### 隐式转换

系统自动转换

~~~js
    let a = 10
    let b = '10'
    console.log(a + b)// +号左右有一个是字符串，就把另一个数转换为字符串再拼接
    // 除加号以外的运算符会把数据转为数字类型
    console.log(+'123')// 把字符串转换为数字
~~~

#### 显示转换

~~~js
    let str = '123'
    console.log(Number(str))// 把(字符串）转换为数字
    let num = Number(prompt('请输入一个数字'))// 把(字符串）转换为数字
    console.log(parseInt('12.94px'))// 把数字开头的字符串转换为整数12
    console.log(parseFloat('12.94px'))// 把数字开头的字符串转换为浮点数12.94
~~~

## 5.运算符

### 赋值运算符 =

对**变量**进行赋值 容器 = 值

~~~js
    a += 10// a = a + 10 自加10
~~~

### 一元运算符 ++  --

**计数** 单独使用无区别，参与运算有区别

 ~~~js
     ++b// 前置自增1 先自增再赋值
     b++// 后置自增1 先赋值再自增（常用）
 ~~~

###  比较运算符 > <

结果为**布尔型** 字符串用ASCII码比较 不比较小数有精度问题

~~~js
    console.log(2 == '2')// 相等 隐式转换 把字符串转换为数字后进行比较值 true
    console.log(2 === '2')// 全等 判断类型和值是否相等 false（常用）
    console.log(2 !== '2')// 不全等 无隐式转换 true（常用）
    console.log(NaN !== NaN)// NaN 不等于任何值，包括它自己 true
~~~

### 逻辑运算符 && || !

~~~js
    console.log(true && false)// 与运算 一假则假 false（优先级高于||）
    console.log(true || false)// 或运算 一真则真 true
    console.log(!true)// 非运算 取反 false（一元运算符）
~~~

### 优先级

小括号 > 一元 > 算数 > 关系 > 相等 > 逻辑 > 赋值 > 逗号

## 6.语句

表达式：可以被**求值**的代码

语句：不一定有值

### if语句

~~~js
    if (条件1) {
      代码1
    } else if (条件2) {
      代码2
    } else {
      代码3
    }
    // 除了 0 外的其他数值都为 true
    // 除了 '' 外的其他字符串都为 true
~~~

### 三元运算符

~~~js
	//条件 ？ 满足条件的代码 ： 不满足条件的代码
    console.log( 3 > 5 ? alert('真的') : alert('假的'))
~~~

### switch语句

~~~js
switch （数据） {
        case 值1：
        	代码1
        	break // 退出循环
        case 值2：
        	代码2
        	break
        default:
            代码3 // 没有对应匹配的
        	break
}
~~~

### while循环语句

break：退出循环，回到底部

continue：跳出本次循环，回到顶部

~~~js
while （循环条件） {
    要重复执行的代码（循环体）
}
     //起始值
    let i = 1
    // 终止条件
    while (i <= 10) {
      document.write(`第${i}次循环<br>`)
    // 变化量
      i++
    }
~~~



