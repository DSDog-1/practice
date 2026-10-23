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

全局变量和局部变量（函数内）

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

**一组数据**存储在**单个变量名**下的**数据类型**

> 可存储任意类型的数据
>
> 有序，索引（下标）从左至右**从零开始**

~~~js
    // 1. 声明数组let arr = []
	//	let arr = new Array（）
    let arr = ['张三','李四','王五','赵六','钱七']
    let arr = new Array(1,2,3,4)
    // 2. 查询数组元素（数组名[索引]）
    console.log(arr[0])
	// 3. 输出数组长度（数组名.length）
    console.log(arr.length)
    // 4.改
    let arr = []
    arr[0] = 1
    arr[1] = 2
    arr[1] = 200
    // 5.增 
    // 添加元素到数组的末尾,并返回新的长度
    arr.push(300,400)
    // 添加元素到数组的开头,并返回新的长度
    arr.unshift(100,200)
    // 6.删
    // 删除数组的最后一个元素
    arr.pop()
    // 删除数组的第一个元素
    arr.shift()
    // 删指定位置的元素(起始位置,删除元素个数 不写默认删除后续所有元素)
    arr.splice(2,1)
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
>
> **除了 ' ' 外**的其他字符串都为 true
>
> **除了 0 外**的其他数值都为 true
>
> **undefined   null    NaN** 为**假**

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
	// null当0，undefined当NaN,汉字字符串无法加减得NaN
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

### while循环

不明确循环次数

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

### for循环

明确循环次数

~~~js
for （变量起始值；终止条件；变量变化值） {  // 先起始，再判断终止，再执行循环体，再变化
    循环体
}
     // 遍历数组
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < arr.length; i++) {
      document.write(arr[i])
    }
~~~

## 7.排序

### 冒泡排序 

按次序比较，大的往走移，比较完毕从头循环

~~~js
    let arr = [5,4,9,6,1,2,8,7]
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
~~~

## 8.函数

代码**复用**，执行特定任务的**代码块**

函数名相同时**后面的覆盖前面的**

全局/局部作用域：可用性的代码范围 提高了程序逻辑的局部性，增强可靠性，减少名字冲突

特殊情况：函数内部变量**未声明直接赋值**可看成全局变量（强烈不推荐）

### 使用

~~~js
    // 声明 命名规范：动词约定
    function 函数名() {
      函数体
    }
    // 调用
    函数名()
~~~

### 传参

~~~js
    // 传参
    function getSum(num1 = 0, num2 = 0) { // 形参 局部变量，无需声明，默认值为undefined，也可赋值=0
      let sum = num1 + num2
      document.write(sum)
    }
    // 调用
    getSum(10, 20) // 调用的括号内是实参 
	// 实参与形参数量不同时，多实参不参与运算，少实参为默认值 

	let a = +prompt()
    let b = +prompt()
    getSum(a,b) // 实参也可以是变量
~~~

### 返回值

return立即结束当前函数，后面的代码被跳过

数据不可换行写，不写数据默认undefined

返回多个用数组 return [max, min]

~~~js
    function fn() {
      return 100 // fn() = 100
    }
    let re = fn()
    document.write(re)
~~~

### 匿名函数

没有名字的函数，无法直接使用

- 函数表达式

~~~js
    let fn = function (x, y) {
      document.write(x + y)
    }
    fn(1, 2) // 调用只能跟在函数表达式后（先声明）
~~~

- 立即执行函数：避免全局变量之间的污染

~~~js
    (function(形参，形参){
        代码
    })(实参，实参)； // 多个函数间必加分号
    
   (function(){}()); // 第二种写法
~~~

### 逻辑中断

~~~js
    document.write(11 && 22) // 逻辑与都为真，返回最后一个值
    document.write(false && 22) // 逻辑与左边为假就中断
    document.write(11 || 22) // 逻辑或都为假，返回最后一个值
    document.write(true || 22) // 逻辑或左边为真就中断
~~~

