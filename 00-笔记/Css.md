# CSS（Cascading Style Sheets）

- 样式美化

- 布局与定位

- 动画交互

  > **继承性：**继承父级属性，但优先自己的样式

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

## 2.选择器

> 属性名**：**属性值**；**

### 基础选择器

#### 类型选择器 div{...}

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

#### 类选择器 .nav{...}

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

#### id选择器 #header{...}

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

#### 通配符选择器 *{...}

~~~css
* {
    margin: 0;
    padding: 0;
}
~~~

>**统一**不同浏览器的**默认样式**
>
>修改html中**所有**的标签

### 关系选择器

#### 后代选择器

~~~css
ul li a {
      color: red;
      font-size: 20px;/* fz20 */
    }
~~~

> 选择某个元素的后代元素（不限层级）
>
> 父级+**空格**+子元素
>
> 最常用

#### 子代选择器

~~~css
div > span {
    color: green;
}
~~~

> 选择某个元素的**直接子元素（仅限一层）**
>
> 父级 **>** 某层子元素

#### 邻接兄弟选择器

~~~css
    h2 + p {
      color: red;
    }
~~~

> 选择紧跟在兄弟后面的**第一个**同级元素
>
> 兄弟1 **+** 兄弟2

#### 通用兄弟选择器

~~~css
    h3 ~ p {
      color: pink;
    }
~~~

> 选择紧跟在兄弟后面的**所有**同级元素
>
> 兄弟1 **~** 兄弟2

## 3.文本样式

### 字体样式

#### 颜色 color

~~~css
    .pink {
      color: pink;
    }
    .color16 {
      color: #5e85b8;
    }
    .rgb {
      color: rgb(255, 105, 180);
    }
    /* 半透明，0是完全透明，1是完全不透明 */
    .rgba {
      color: rgba(255, 105, 105, 0.5);
      background-color: green;
    }
~~~

> 关键字、十六进制、rgb格式、rga格式

#### 字体族 font-family

~~~css
    .font {
      font-family: "宋体","微软雅黑";
    }
~~~

> 给定一个**先后顺序**用**逗号**隔开，浏览器会选择列表上第一个该计算机有安装的字体

#### 大小 font-size

~~~css
    .font12 {
      font-size: 12px;/* fz12 */
    }
~~~

> 建议给**body**标签统一指定大小 

#### 倾斜 font-style

~~~css
	.italic {
      font-style: italic;/* 斜体 */
    }
    .normal {
      font-style: normal;/* 让em或i取消斜体 */
    }
~~~

#### 加粗 font-weight

~~~css
    .nobold1 {
      font-weight: normal;/* 让h不加粗 */
    }
    .nobold2 {
      font-weight: 400;/* 让h不加粗 */
    }
    .bold1 {
      font-weight: bold;/* 加粗 */
    }
    .bold2 {
      font-weight: 700;/* 加粗 */
    }
~~~

#### font简写

~~~css
  body {
    font: 14px "宋体";
    font: italic 700 14px/30px "宋体";
  }
~~~

> font : font-style  font-weight  **font-size**/line-height  **font-family**
>
> 给整个页面设置相关字体样式
>
> **font-size**和**font-family**必须写
>
> 其他可省略，默认显示

#### 取消文本装饰、下划线、上划线、删除线 text-decoration

~~~css
    a {
      text-decoration: none;/* 链接td取消下划线 */
    }
    .underline {
      text-decoration: underline;/* 下划线 */
    }
    .overline {
      text-decoration: overline;/* 上划线 */
    }
    .line-through {
      text-decoration: line-through;/* 删除划线 */
    }
~~~

### 文本布局

#### 文本对齐 text-align

~~~css
	p {
        text-align: left;/* 左对齐 */
        text-align: right;/* 右对齐 */
        text-align: center;/* 水平居中对齐 */
        text-align: justify;/* 两端对齐 */
    }
~~~

> **块级**盒子**水平**对齐
>
> 文章文字两端对齐

#### 首行缩进 text-indent

~~~css
    p {
      text-indent: 2em;/* ti首行缩进2个字符 */
    }
~~~

> **段落**首行缩进
>
> logo隐藏文字效果
>
> 相对单位：em（1em等于当前文字大小，若没有则为父元素文字大小）

#### 文本字符间距 letter-spacing

~~~css
.box {
    letter-spacing: 5px;/* 字间距 */
}
~~~

#### 行高 line-height

~~~css
.p {
    line-height: 30px;/* 行高 */
    line-height: 1.5;/* 行高 */
}
    .box {
      height: 50px;
      line-height: 50px;/* 行高=盒子高度即为单行文本垂直居中 */
    }
~~~

> 设置多行文本的上下间距
>
> 让**单行**文本**垂直居中**
>
> 数字px/不带单位（当前字体大小的倍数）
