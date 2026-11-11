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

#### map方法

处理数据，字符串拼接，返回数据

~~~js
    arr.map(function (ele, index) {  // ele: 数组元素, index: 数组元素索引
      return ele + '颜色'
    })
~~~

#### join方法

把数组转换为字符串

~~~js
    const str = arr.join('')  // 小括号为空默认逗号分隔，''表示无分隔符
~~~

#### forEach方法

只遍历不返回值

~~~js
    arr.forEach(function(item, index) {
~~~

#### filter方法

筛选数组复合条件的元素，返回新数组

~~~JS
    const newArr = arr.filter(function(item, index) {
      return item > 5
    }) 
    const newArr = arr.filter(item => item > 5)		// 简写
~~~

#### reduce方法

返回累计处理的结果，常用于求和

对象数组起始值必须为0，属性累加

~~~js
	arr.reduce(function(pre, cur) {		// （上一次的值=第一个元素值/初始值，当前值=第二个元素值/第一个元素值）
      return pre + cur
    },10)	// 初始值
	const sum = arr.reduce((pre, cur) => pre + cur, 10)
~~~

#### find方法

返回第一个符合条件的数组元素

~~~js
    arr.find(item => item.id === 456)
~~~

#### every与some方法

测试数组元素，返回布尔值

~~~js
    const isAll = arr1.every(item => item > 0)  // 每一个是否都符合条件
    const isAny = arr1.some(item => item > 0)  // 有一个符合条件就符合条件
~~~

#### from方法

伪数组转化为真数组

~~~js
    const liss = Array.from(lis)
~~~

#### 展开运算符...

不会修改原数组

~~~js
	const arr1 = [1,2,3,4]
	console.log(...arr1)		// ...arr === 1,2,3,4
	const arr2 = [5,6]
    const arr = [...arr1,...arr2]		//合并数组 
~~~

### 常量

变量永远**不会改变**时，使用**const**声明变量（**数组、对象**不更改地址只追加、更改值，所以**可以使用**）

> 不许更改
>
> 声明时必须赋值（初始化）

~~~js
    // 1. 声明常量（const 常量名 = 字面量）
    const PI = 3.14
~~~

## 4.数据类型

### 基本数据类型（值 ->栈 ）

#### number 数字型

> 弱数据类型 
>
> 算术运算符：+加 -减 *乘 /除 %取余 **有优先级**
>
> NaN 计算错误、粘性
>
> ~~~js
>     console.log(num.toFixed(n)) // 四舍五入保留n位小数
> ~~~

#### string 字符串型

> 单引**''**     双引**""**     反引**``**
>
> 单引内双引，双引内单引
>
> ~~~js
>  let str1 = ''// 空字符串
>  let age = 18
>  document.write('我今年' + age + '岁')// 输出字符串拼接后的结果
>  document.write(`我今年${age}岁`)// 模板字符串 反引号，支持换行
> ~~~
>
> ~~~js
> 	const arr = str.split(',')		// 通过括号内的字符分隔，将字符串转换为数组
>     str.substring(0, 5) 	// 截取(开始的索引, 结束的索引（左闭右开，可省略，默认取到最后）)
>     str.startsWith('hello') // true 以hello开头
>     str.startsWith('l', 2) // true 第3个字符以l开头空格、标点也算
>     str.includes('hello') // true 包含hello 区分大小写
>     str.endsWith('world') // true 以world结尾
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

### 引用数据类型（地址 -> 堆）

两个对象用一个地址的话，修改其中一个对象的值，另一个因为共用地址所以值也会改变

包装类型：JS底层通过构造函数把简单数据类型包装成引用数据类型以使用方法

- object 对象
- Array
- Data

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

### 进阶

#### 函数提升

把**函数声明**提升到当前作用域的最前（函数表达式不适用）

#### 函数参数

> 动态参数**arguments**，只存在函数中的伪数组
>
> 剩余参数**...z**，只存在函数中的真数组
>
> ~~~js
>     function getSum2(a,b,...z)   	// 至少两个实参a，b
> ~~~

#### 箭头函数

替代匿名函数，语法更简洁，**无arguments但有剩余参数**，不会创建this，沿用自己作用域链的上一层

~~~js
    const fn = (形参) => {		// 只有一个形参时可省略小括号
      函数体					  // 只有一行函数体时可省略大括号且返回值（省略return）
    }
    const fn = 形参 => 函数体
    // 直接返回对象（小括号包起来）
    const fn1 = (uname) => ({name: uname, age: 18})
    console.log(fn1('张三'))
~~~

#### 构造函数

特殊的函数，用来初始化对象，**快速创建多个类似的对象**

> 命名以大写字母开头
>
> 只能由“new”操作符来执行（实例化）
>
> 无需写return，返回值即为新创建的对象

~~~js
    function Person(name, age) {
      this.name = name
      this.age = age
    }
    const p1 = new Person('张三', 18)
    // 实例化四步：
    // 1.创建新的空对象
    // 2.构造函数this指向新对象
    // 3.执行构造函数代码，修改this，添加新属性
    // 4.返回新对象
~~~

#### 递归函数

函数内部调用自身，类似循环，但容易发生“栈溢出”，必须加退出条件return

### 内置构造函数

#### 引用类型

~~~js
    console.log(Object.keys(g1)) // ['id', 'name', 'price']
    console.log(Object.values(g1)) // [123, '商品1', 1456]
    Object.assign(g2, g1)     // 拷贝g1的属性到g2
~~~

#### 包装类型

## 9.对象

数据类型，**无序**（无下标）的数据集合，详细描述某个事物

### 声明

属性n.+方法v.

~~~js
	let 对象名 = {
    属性名1：属性值1，// 多属性间用逗号隔开
    属性名2：属性值2，
    方法名：函数  // 匿名函数
}
let 对象名 = new Object（）
let obj = null // 空对象
~~~

### 使用

~~~js
    对象名.新属性名 = 新属性值  		// 增   obj.sex = '男'
	delete 对象名.属性名   		    // 删   delete obj.sex  （了解）
    对象名.属性名 = 新属性值 		     // 改   obj.name = '李四'
    console.log(对象名.属性名) 		// 查1  console.log(obj.name)
    console.log(对象名['属性名'])   	// 查2   console.log(obj['name'])
    对象名.方法名（）                 // 调用方法   obj.song()
~~~

### 遍历

~~~js
    for (let k in 对象名) {
      console.log(k)   // 属性名 字符串
      console.log(对象名[k])  // 查2
    }

    // 数组对象
    let students = [
      { uname: '张三', age: 18, sex: '男' },
      { uname: '李四', age: 18, sex: '男' },
      { uname: '王五', age: 18, sex: '男' }
    ]
    for (let i = 0; i < students.length; i++) {
      console.log(students[i].uname)
      for (let k in students[i]) {
        console.log(students[i][k])
      }
    }
~~~

### 内置对象

~~~js
    // 内置对象-Math
	console.log(Math.PI) // 圆周率
    console.log(Math.round(3.14)) // 四舍五入一个数值 3
    console.log(Math.round(-3.5)) // -3
    console.log(Math.round(-3.51)) // -4
    console.log(Math.floor(3.14)) // 向下取整 3
    console.log(Math.ceil(3.14)) // 向上取整 4
    console.log(Math.max(1,2,3,4,5)) // 找最大数 5
    console.log(Math.min(1,2,3,4,5)) // 找最小数 1
    console.log(Math.pow(2,3)) // 幂运算 二的三次方=8
    console.log(Math.abs(-10)) // 绝对值 10
    console.log(Math.random()) // 随机数 0-1之间的随机数[0,1)
    console.log(Math.floor(Math.random() * 100)) // 0-99的随机整数[0,100)
    console.log(Math.floor(Math.random() * (M - N + 1)) + N) // N - M之间的随机整数[N,M]
	// 随机抽取数组元素
    let arr = ['red','green','blue']
    let random = Math.floor(Math.random() * arr.length)
    console.log(arr[random])
~~~

### 实例成员&静态成员

构造函数创建的**实例对象的属性和方法**称为实例属性与实例方法（实例成员：相互独立，互不影响）

**构造函数的属性与方法**称为静态属性与静态方法（静态成员）

## 10.API（DOM+BOM）

使用JS操作html和浏览器

### DOM（文档对象模型）

> 操作网页内容，开发网页内容特效和实现用户交互
>
> **DOM树**：将html文档以树状结构直观表现，直观体现标签间的关系
>
> **DOM对象（重点）**：浏览器根据html标签生成的JS对象，**把网页内容当做对象来处理（核心）**
>
> ​				  document是最大的**对象**，所有内容都在里面

#### 获取DOM元素

~~~js
    // 1.获取匹配的第一个元素、一个对象，可直接修改
    const box2 = document.querySelector('css选择器')
    const box1 = document.querySelector('div')
    const box2 = document.querySelector('.box')
    // 2.获取匹配的所有元、一个对象集合伪数组（与元素个数无关），通过遍历for修改
    const boxes = document.querySelectorAll('div')
~~~

#### 操作元素内容

~~~js
    //对象.innerText  不解析标签
	console.log(box.innerText) // 获取
    box.innerText = '新内容' // 修改

    // 对象.innerHTML   解析标签
    console.log(box.innerHTML) // 获取
    box.innerHTML = '<H1>新内容</H1>' // 修改
~~~

#### 操作元素属性

~~~js
	// 对象.属性 = '值'
	// 对象.style.样式属性 = '值'
    box.style.height = '200px'
    box.style.backgroundColor = 'red'  //小驼峰命名
	// 对象.className = '类名'
    div.className = 'box'  				// 换类名 class = "box"
    // 对象.classList.add('类名')
    div.classList.add('active') 		// 追加类名 class = "box active"
    // 对象.classList.remove('类名')
    div.classList.remove('active') 		// 移除类名 class = "box"
    // 对象.classList.toggle('类名')
    div.classList.toggle('active')		 // 切换类名(有删无加) class = "box active"
    // 表单.属性
    console.log(uname.value); 			// 获取表单内容
    // 表单.属性 = '新值'
    uname.type = 'password' 			// 修改表单属性
	// 表单.属性（disabled/checked） = true
	ipt.checked = true					// 选中复选框（执行属性）
~~~

#### 自定义属性

~~~html
  <div data-id="1" data-name="张三">1</div>
~~~

~~~js
    console.log(one.dataset)// 对象：{id: '1', name: '张三'}
    console.log(one.dataset.id)// 1
~~~

### 定时器

#### 间歇函数

每隔一段时间自行执行一段代码

~~~js
	// setInterval(函数名（不加小括号）, 间隔时间ms)
    setInterval(function () {		// 开启定时器
      console.log(111)
    }, 1000)

    let n = setInterval(fn, 1000) 	// 获取定时器id
    clearInterval(n)       		    // 关闭定时器
~~~

#### 延时函数

只执行一次，将代码延迟执行

~~~js
	// setTimeout(回调函数，等待的毫秒数）
    let n = setTimeout(fn, 1000) 	// 获取定时器id
    clearTimeout(n)       		    // 清除定时器
~~~

### 事件监听

检测是否有事件发生，随后调用一个函数作出相应。

> 事件源：被触发的元素
>
> 事件类型：用什么方式触发
>
> 事件调用的函数：要做什么

~~~js
	元素对象.addEventListener('事件类型'，要执行的函数)
    btn.addEventListener('click', function () {
      console.log('点击了按钮')
    })
~~~

#### 事件类型

~~~js
    // 鼠标事件
	btn.addEventListener('click', function () { 		// 点击事件
    div.addEventListener('mouseenter', function () { 	//  鼠标经过
    div.addEventListener('mouseleave', function () { 	//  鼠标离开		无冒泡效果
    // 焦点事件
    input.addEventListener('focus', function () {   	// 获得焦点事件
    input.addEventListener('blur', function () {   		// 失去焦点事件
	// 键盘事件
    input.addEventListener('keydown', function () { 	// 键盘按下事件
    input.addEventListener('keyup', function () { 		// 键盘松开事件
	// 文本事件
    input.addEventListener('input', function () { 		// 键盘输入事件
    input.addEventListener('change', function () { 		// 键盘修改事件
    // 其他事件
    window.addEventListener('load', function () { 					// 页面加载事件1
    document.addEventListener('DOMContentLoaded', function () {		 // 页面加载事件2,无需完全加载
    window.addEventListener('scroll', function () {					// 页面滚动事件 scrollTop属性：被卷去的头部
    	document.documentElement.scrollTop     // scrollTop属性数字型不带单位：被卷去的头部
    window.addEventListener('resize', function () {		// 页面尺寸事件  
        // offsetWidth = 内容 + padding + border		clientWidth = 内容
        // offsetLeft 以带有定位的父级为准 获取可视宽高

        // M端事件：touchstart触摸/touchmove滑动/touchend移开
~~~

#### 事件对象

~~~js
    btn.addEventListener('click', function ( e ) { 		// e 事件对象
    // type 获取事件类型
    // clientX/clientY 获取光标相对于浏览器可见窗口左上角的位置
    // offsetX/offsetY 获取光标相对于事件目标元素左上角的位置
    // key 获取键盘按下的键
~~~

#### 环境对象（this）

> 函数内部特殊的变量**this**，代表当前函数运行所处的环境
>
> **谁调用，this就是谁**

#### 回调函数

> 函数A(fn)当做**参数**来传递给函数B(setInterval)的时候，**函数A为回调函数**
>
> 不是手动调用，而是函数B自动调用函数A

~~~js
setInterval(fn,1000)
~~~

#### 事件流

事件完整执行过程中的**流动路径**（捕获true -> 冒泡false）

> 事件冒泡：一个元素的事件被触发时，**同样的事件**将会在该元素的所有祖先元素中一次被触发。
>
> 事件委托：利用**事件冒泡**减少次数提高性能：给父元素注册事件

~~~js
	 事件对象.stopPropagation()		// 阻止流动传播
	 事件对象.preventDefault()		// 阻止默认行为（链接跳转）
      if (e.target.tagName === 'LI') {    // 真正的触发元素
      e.target.style.color = 'red'    // target 指向点击的元素
~~~

### 日期对象

~~~js
    const date = new Date()		// 实例化 new Data() 当前时间
    const date2 = new Date('2023-11-01')
    
    console.log(date2.getFullYear()) 	 	// 获取年份
    console.log(date2.getMonth() + 1)  		// 获取月份0~11
    console.log(date2.getDate())  			// 获取日期
    console.log(date2.getDay())  			// 获取星期几 0-6 0表示星期日
    console.log(date2.getHours())  			// 获取小时
    console.log(date2.getMinutes())  		// 获取分钟
    console.log(date2.getSeconds())  		// 获取秒

    const time = document.toLocaleString()  		// 2026-01-01 00:00:00
    const time1 = document.toLocaleDateString()  	// 2026-01-01
    const time2 = document.toLocaleTimeString()  	// 00:00:00
    
   	// 获取时间戳方法1 
    console.log(Date.now()) // 当前时间
    // 获取时间戳方法2
    const date = new Date()
    console.log(date.getTime())
    // 获取时间戳方法3
    console.log(+new Date())
~~~

### 节点操作

DOM节点：元素节点、属性节点、文本节点

#### 查找节点

~~~js
    console.log(son.parentNode) 		// 返回父节点
    console.log(ul.children) 			// 返回子节点，亲儿子伪数组
    console.log(ul.children[0]) 		// 返回子节点的第1个
    console.log(li2.previousElementSibling) // 上一个兄弟
    console.log(li2.nextElementSibling) // 下一个兄弟
~~~

#### 增加节点

~~~js
    const div = document.createElement('div')	 // 创建节点
    document.body.appendChild(div) 				// 追加到body节点后面 父元素.appendChild(子元素)
    ul.insertBefore(li,ul.children[0]) 			// 在子元素前添加节点 父元素.insertBefore(要插入的元素，放到哪个元素前)
    ul.children[0].cloneNode(true)    			// 深克隆节点（浅克隆不加true 只克隆标签）
~~~

#### 删除节点

~~~js
    ul.removeChild(liClone)    // 删除节点 父元素.removeChild(要删除的元素)
~~~

### BOM（浏览器对象模型）

window 全局对象

#### JS执行机制（单线程）

> 同步：只按**执行栈**执行不耗时的任务（有先后顺序）
>
> 异步：执行栈中任务全部执行完后再去**任务队列**执行**耗时**的任务（先后不确定）
>
> **事件循环**：同步 -> 异步 -> 同步 -> ......   

#### location对象

对象，拆分保存了URL地址的各个组成部分

~~~js
    location.href = 'https://www.baidu.com'		// 跳转链接
    location.search   		// 获取地址中?后面的内容（用户名、密码）
    location.hash  			// 获取地址中#后面的内容
    location.reload()  	 	// 刷新当前页面
    location.reload(true)   // 强制刷新当前页面
~~~

#### navigator对象

~~~js
    navigator.userAgent   //获取浏览器的用户代理
    navigator.language   //获取浏览器的语言

     // 跳转手机端
     !(function () {
      const userAgent = navigator.userAgent
      // 验证是否为安卓或ios
      const Android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
      const iOS = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
      if (Android || iOS) {
        location.href = 'https://www.baidu.com'
      }
     })();
~~~

#### history对象

~~~js
    history.back()   //返回上一页
    history.forward()   //返回下一页
    history.go(-1)   //返回上一页
    history.go(1)   //返回下一页
    history.go(0)   //刷新当前页面
~~~

### 本地存储

数据存储在用户浏览器中，**刷新不丢失**，容量大5M，Application查看

#### localStorage

> 永久存储，多窗口共享，键值对形式存储使用，只能存储**字符串**

~~~js
    localStorage.setItem('name', '张三')  // 存储/修改数据 localStorage.setItem('key', 'value')
	localStorage.getItem('name')  // 获取数据 localStorage.getItem('key')		
    localStorage.removeItem('name')  // 删除数据localStorage.removeItem('key')
~~~

#### sessionStorage

> 关闭浏览器窗口消失，同窗口共享，键值对形式存储使用，只能存储**字符串**，用法同上

#### JSON.stringify（复杂数据类型）

~~~js
    localStorage.setItem('obj', JSON.stringify(obj))  // 存储复杂数据 JSON字符串存储
    console.log(JSON.parse(localStorage.getItem('obj')))  // 获取复杂数据 JSON字符串转换为对象
~~~

### 正则表达式

**匹配字符串**中字符组合的**模式**、对象，匹配替换提取支持正则表达式的文本、**验证表单、过滤敏感词、截取特定部分**

#### 语法

~~~js
    const reg = /需要查找的关键字/ 		// 定义
    reg.test(被检查的字符串)		// 判断 返回布尔值
    reg.exec(被检查的字符串)		// 检索 返回数组，否则为null
~~~

#### 元字符（特殊字符）

~~~js
    // 1.边界符
    // ^...    以...开头
    // ...$    以...结尾
    // ^...$   精确匹配...字符串(一模一样)
~~~

~~~js
    // 2.量词
    // *    	>=0
    // +    	>=1
    // ?    	0个或1个
    // {n}  	n个
    // {n,} 	>=n个
    // {n,m} 	n到m个
~~~

~~~js
    // 3.字符类
    // . 			除换行符以外的任意字符
    // [ ] 			范围，出现任一字符即可
    // ^[]$  		精确匹配只能选一个，可加量词
    // [^ ]  		非范围字符,除范围内的其他字符
    // [a-z]  		小写字母
    // [a-zA-Z0-9_]  字母或数字或下划线
~~~

~~~js
    // 4.预定义类
    // \d 		数字
    // \D 		非数字
    // \w 		字母数字下划线
    // \W 		非字母数字下划线
    // \s 		空格
    // \S 		非空格
~~~

#### 修饰符

/  / 后面添加

~~~js
    // i 忽略大小写
    // g 全局匹配
~~~

## 11.作用域

规定变量能够被访问的**范围**

- 局部作用域

> 函数作用域：函数内部声明的变量，外部无法访问，执行完毕变量被请空
>
> 块作用域：{ }代码块内部声明的变量，外界无法访问（var除外）

- 全局作用域

> <script>标签内部、.js文件
>
> 尽可能减少声明全局变量防止污染

### 作用域链

> **底层的变量查找机制**，优先查找当前函数作用域，逐级查找父级作用域直到全局作用域
>
> 嵌套关系的作用域串联形成，子作用域可访问父作用域，反之不可

### 垃圾回收机制GC

#### 内存生命周期

> 分配：声明时系统自动分配
>
> 使用：使用变量函数时读写内存
>
> 回收：使用完毕由垃圾回收器自动回收（全局变量关闭页面时回收）
>
> 内存泄漏：分配的内存无法释放

#### 算法说明

栈由操作系统自动分配，堆（复杂数据类型）由程序员与垃圾回收机制回收

**引用计数法**：

**跟踪记录被引用**的次数，为0则释放

> 问题：嵌套引用（循环引用）：两对象相互引用无法回收

**标记清除法**：

> 从**根部出发定时扫描**内存中的对象，无法触及的对象被标记为不再使用，稍后进行回收

### 闭包

闭包 = **内层函数 + 外层函数的变量**

作用：封闭数据，提供参数，**外部inner也可以访问函数outer内部的变量**

应用：实现数据私有，但会内存泄漏（标记清除法）

~~~js
    function outer() {
      let a = 10
      function fn() {
        console.log(a)
      }
      return fn
    }
    const inner = outer()
    inner()
~~~

### 变量提升（var变量）

**var的声明**提升到**当前**作用域最前（不提升赋值）

## 12.解构赋值

### 数组解构

将数组的单元值**快速批量赋值**给一系列变量的简洁语法

~~~js
    const [a, b] = [1, 2]		// a = arr[0],b = arr[1]
    ;[a, b] = [b, a]    		// 数组开头加分号
	const [a,b] = 1				// 变量多于单元值 b = undefined
    const [a,b, ,d,...e] = [1,2,3,4,5,6]	// a = 1, b = 2, d = 4, e = [5,6]
    const [a,b,[c,d]] = [1,2,[3,4]]			// a = 1, b = 2, c = 3, d = 4
~~~

### 对象解构

将对象的属性和方法**快速批量赋值**给一系列变量的简洁语法

~~~js
    const {name, age} = { name: '张三', age: 18 }		// 变量名与属性名需一致
    const {name: uname, age } = { name: '张三', age: 18 }	// 改名 旧名：新名
	const {name, family : {mother , age}} = a	// 多级对象
~~~

## 13.面向对象oop

### 编程思想

面向过程：按照分析好的步骤解决问题

> 性能高，适合硬件联系紧密的东西

面向对象：以对象的功能划分问题，而不是步骤

> 封装性（构造函数 -> 浪费内存）、继承性、多态性
>
> 易维护、易复用、易扩展

### 原型对象  prototype

**构造函数的  prototype 属性**指向另一个**原型对象**，实例化不会多次创建原型上函数以**节约内存**，且**this指向实例化对象**

构造函数通过原型分配的函数是所有对象**共享**的，把不变的方法直接定义在prototype对象上，使所有对象的实例共享这些方法

~~~js
    Person.prototype.sayName = function() {
	// 构造函数名.prototype.方法名 = function() {} 
	p1.sayName()  
~~~

### constructor属性

**只要是原型对象prototype就有constructor属性**，指向该原型函数的构造函数，追加没影响，赋值直接覆盖

~~~js
    Person.prototype.constructor = Person
~~~

~~~js
    Person.prototype = {
      constructor: Person,  // 重写构造函数，需要手动添加
      sayName: function() {
        console.log(this.name)
      }
    }
~~~

### 对象原型    [[prototype]]

JS非标准属性，**只要是对象就有属性**__ _proto_ __指向原型对象prototype，只读不可赋值

~~~js
    p1.__proto__ = Person.prototype		// 实例对象.对象原型 = 函数名.原型对象
    p1.__proto__.constructor = Person
~~~

### 原型继承

~~~js
    function common() {		// 需要继承的公共属性封装成构造函数
      this.eyes = 2			// 结构相同对象不同
      this.legs = 2
    }
	Man.prototype = new common()    // 原型继承公共属性
    Man.prototype.constructor = Man   // 指回构造函数
~~~

### 原型链

基于原型对象的继承使得不同构造函数的原型对象关联在一起形成链状结构，为对象成员查找机制提供一条路线

**查找规则**：访问一个对象属性/方法时，先查找对象自身有无，没有就查原型，再查原型对象的原型一直找到null

~~~js
    p1.__proto__ = Person.prototype
    Person.prototype.__proto__ = Object.prototype
    Object.prototype.__proto__ = null
    console.log(Person instanceof Object) // A instanceof B   检查A是否属于B
~~~

## 14.深浅拷贝

### 浅拷贝（地址）

拷贝最外层，里层仍被修改 

~~~js
    // 1. 扩展运算符
    const obj2 = {...obj}
    // 2. Object.assign()
    const obj3 = {}
    Object.assign(obj3, obj)
~~~

### 深拷贝（对象）

新对象不会影响旧对象，用到函数递归，遇到数组与对象再次调入递归

~~~js
    // 1.函数递归
	const obj4 = {}
    function deepCopy(newObj, oldObj) {
      for (let key in oldObj) {
        if(oldObj[key] instanceof Array) {
          newObj[key] = []    // 先写数组
          deepCopy(newObj[key], oldObj[key])
        } else if (oldObj[key] instanceof Object) {
          newObj[key] = {}    // 后写对象
          deepCopy(newObj[key], oldObj[key])
        } else {
          newObj[key] = oldObj[key]
        }
      }
    }
    deepCopy(obj4, obj)
    // 2.lodash 引用js库
    <script src="lodash.min.js"></script>
    const obj5 = _.cloneDeep(obj)
    // 3. JSON.stringify()转换成简单数据类型字符串 + JSON.parse()
    const obj6 = JSON.parse(JSON.stringify(obj))
~~~

## 15.异常处理

**预估**代码执行过程中可能发生的错误，**最大程度避免错误发生**导致的程序无法运行

### throw异常

~~~js
      function fn(x,y) {
      if (!x || !y) {
        throw new Error('参数不能为空') // 抛中文异常信息，终止程序
      }
      return x + y
    }
~~~

### try/catch/finally异常

~~~js
    function fn() {
      try {
        // 可能会抛出异常的代码
        const p = document.querySelector('p')
        p.style.color = 'red'
      } catch (error) {
        // 拦截错误，不中断程序执行
        console.log(error.message)
        // 加一个return/throw，中断程序11
        return
      }
      finally {
        // 无论是否抛出异常，都会执行的代码，不管return/throw
        console.log('finally')
      }
      console.log('11') // 不会执行
    }
    fn()
~~~

### debugger

打断点，调试bug

## 16.处理this

### 普通函数this

谁调用就指向谁，无调用者就是window，严格模式无调用者是undefined

### 箭头函数this

函数内不存在，**沿用上一级**作用域中的this值

构造函数、DOM对象、基于原型法面向对象不推荐箭头函数

### 改变this

#### call（）

~~~js
    fn.call(obj,1,2) // this指向obj,后续参数作为函数参数
~~~

#### apply（）

~~~js
    fn.apply(obj,[1,2]) // this指向obj,后续参数作为数组传递
    // 使用场景：求数组的最大值、最小值、平均值等
    console.log(Math.max.apply(null,arr)) 
~~~

#### bind（）不会调用函数

~~~js
    fn.bind(obj) // this指向obj,返回值是一个this值改过的fn函数
~~~

## 17.性能优化

### 防抖

单位还见内频繁触发事件，**只执行最后一次**

- 搜索框搜索输入
- 手机号、邮箱验证输入检测

~~~js
	//1.lodash库 _.debounce(函数, 时间)   时间到了执行函数	
	box.addEventListener('mousemove', _.debounce(mouseMove, 1000))  
    // 2. 手写防抖函数
    // 声明定时器变量
    // 每次事件触发时，判断定时器是否存在
    // 如果存在，清除定时器
    // 如果不存在，设置定时器，存入定时器变量，延迟执行函数
    function debounce(fn, t) {
      let timer = null
      return function() {   // 事件发生就执行一次
        if(timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn()
        }, t)
      }
    }
    box.addEventListener('mousemove', debounce(mouseMove, 100))
~~~

### 节流

单位时间内频繁触发事件，**只执行首次**

- 鼠标移动
- 页面尺寸缩放
- 滚动条滚动

~~~js
    // 1.lodash库 _.throttle(函数, 时间)   时间间隔内只执行首次函数
    box.addEventListener('mousemove', _.throttle(mouseMove, 1000))
   // 2. 手写节流函数
    // 声明定时器变量
    // 每次事件触发时，判断定时器是否存在
    // 如果存在，不开启新定时器
    // 如果不存在，设置定时器，存入定时器变量，延迟执行函数
    function throttle(fn, t) {
      let timer = null
      return function() {
        if(!timer) {
        timer = setTimeout(() => {
          fn()
          timer = null // 重置定时器，等待下一次事件触发，还在运作不能使用clearTimeout
          }, t)
        }
      }
    }
    box.addEventListener('mousemove', throttle(mouseMove, 1000))
~~~
