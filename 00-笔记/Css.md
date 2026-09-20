# CSS（Cascading Style Sheets）

- 样式美化
- 布局与定位
- 动画交互

## 1.位置分类

内联样式表（行内 ）`控制当前标签`

~~~html
<p style="color: pink;">粉色</p>
~~~

内部样式表`控制当前页面`

~~~html
<style>
    div{
      color: blue;
   	   }
~~~

外部样式表`控制整个网站`

~~~html
<link rel="stylesheet" href="./02my.css">
~~~

## 2.选择器+属性

> 属性名**：**属性值**；**

### 基础选择器

#### 类型选择器div{...}

~~~html
<style>
div {
      color: pink;
      font-size: 20px;
    }
~~~

> 层叠性：**后面覆盖**前面
>
> **选择器（div）和大括号**中间保留1个空格
>
> **属性名和属性值**中间保留1个空格
>
> 每个属性**单独一行**
>
> ctrl+/为**注释**，**内容左右两侧**保留1个空格，例/* 注释 */

#### 类选择器.nav{...}

~~~html
<style>
    .pink {
      color: pink;
    }
  </style>
</head>
<body>
  <div class="pink">郭奉孝</div>
  <div>贾文和</div>
~~~

>类选择器优先级**高于类型选择器**
>
>**.类名**(.pink)可自定义，不可是中文、纯数字，多个英文单词用 - 链接，命名要有意义****
>
>**<标签 class=“类名1 类名2”>**，class属性可以有多类名中间**用空格隔开**
>
>可使用**多次**
>
>最重要、使用最多次

#### id选择器#header{...}

~~~html
  <style>
    #purple {
      color: purple;
    }
  </style>
</head>
<body>
  <div>郭奉孝</div>
  <div id="purple">贾文和</div>
~~~

>id选择器优先级**高于类选择器**
>
>**#id名**，同一页面不可重复
>
>**<标签 id=“id名”>**
>
>唯一，只能用**一次**

#### 通配符选择器*{...}

~~~html
* {
	margin: 0;
	padding: 0;
}
~~~

>**统一**不同浏览器的**默认样式**
>
>修改html中**所有**的标签
