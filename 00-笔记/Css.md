# CSS（Cascading Style Sheets）

- 样式美化
- 布局与定位
- 动画交互

## 样式初始化

~~~css
    /* 简单重置 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* 清除列表项默认样式 */
    ul,ol {
      list-style: none;
    }
    /* 清除链接默认样式 */
    a {
      text-decoration: none;
    }
    /* 清除input默认样式 */
    input {
      outline: none;
    }
~~~


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

#### 后代选择器 空格

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

#### 子代选择器 >

~~~css
div > span {
    color: green;
}
~~~

> 选择某个元素的**直接子元素（仅限一层）**
>
> 父级 **>** 某层子元素

#### 邻接兄弟选择器 +

~~~css
    h2 + p {
      color: red;
    }
~~~

> 选择紧跟在兄弟后面的**第一个**同级元素
>
> 兄弟1 **+** 兄弟2

#### 通用兄弟选择器 ~

~~~css
    h3 ~ p {
      color: pink;
    }
~~~

> 选择紧跟在兄弟后面的**所有**同级元素
>
> 兄弟1 **~** 兄弟2

### 分组选择器（并集选择器），

~~~css
    .contene img,
    .contene video {
      width: 100%;
    }
~~~

> 不同选择器组合在一起，用**逗号**分隔
>
> 多个元素具备相同样式

### 伪类选择器 ：

#### 状态伪类

~~~css
    /* 链接伪类 */
	/* 未访问链接 */
    a:link {
      color: #000;
      text-decoration: none;
    }
    /* 已访问链接 */
    a:visited {
      color: orange;
      text-decoration: none;
    }
    /* 鼠标悬停链接 */
    a:hover {
      color: red;
      text-decoration: underline;
    }
    /* 鼠标点击链接 */
    a:active {
      color: green;
      text-decoration: none;
      font-size: 20px;
    }
~~~

~~~css
    /* 用户行为伪类 */
	/* 鼠标悬停 */
    .box:hover {
      background-color: red;
      color: #fff;
    }
    /* 搜索框获得焦点 */
    .search:focus {
      background-color: red;
      width: 200px;
    }
~~~

#### 结构伪类

~~~css
     /* 选择第一个小li */
    .ul1 li:first-child {
      color: red;
    }
    /* 选择最后一个小li */
    .ul1 li:last-child {
      color: blue;
    }
    /* 选择第5个li */
    .ul1 li:nth-child(5) {
      color: green;
    }

    /* 选择奇数个li */
    .ul2 li:nth-child(odd) {
      color: blue;
    }
    /* 选择偶数个li */
    .ul2 li:nth-child(even) {
      color: red;
    }
    /* 公式n=0开始 */
	/* 3的倍数3n 第2个及其以后的元素n+2 前面三个元素-n+3 */
    .ul2 li:nth-child(3n) {
      color: pink;
    }
~~~

#### 表单伪类

~~~css
    /*表单禁用状态*/
    button:disabled {
      /* 透明度 */
      opacity: .4;
    }
    /* 表单选中状态 */
    input:checked+label {
    color: #ff6900;
    }
~~~

### 伪元素选择器 ：：

~~~cs
    /* 选择首行 */
    p::first-line {
      color: red;
    }
    /* 选择首字母 */
    p::first-letter {
      color: blue;
      font-size: 30px;
    }
    /* 选择文本域占位符 */
    textarea::placeholder {
      color: red;
      font-size: 15px;
    }
~~~

~~~css
    /* before */
    div::before {
      content: '我是';/* 不可省略，可用""''替代 */
      color: red;
    }
    /* after */
    .box::after {
      content: '老师';
      color: pink;
    }
~~~

### 属性选择器 [ ]

~~~css
    /* 选择包含属性class */
    a[class] {
      color: red;
    }
    /* 选择属性完全匹配的值font */
    a[class="font"] {
      color: blue;
    }
    /* 选择属性以指定值开头font- */
    a[class^="font-"] {
      color: green;
    }
    /* 选择属性以指定值结尾14 */
    a[class$="14"] {
      color: pink;
    }
    /* 选择属性包含指定值ed */
    a[class*="ed"] {
      color: orange;
    }
~~~

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

#### 溢出显示省略号

~~~css
  	/* 单行文本显示省略号 */    
	overflow: hidden;/* 隐藏超出部分 */
     text-overflow: ellipsis;/* 超出部分省略号 */
     white-space: nowrap;/* 不换行 */
	/* 多行文本显示省略号 */
    .box {
      width: 200px;
      height: 50px;/* 高度修改为文字显示区域 */
      overflow: hidden;/* 隐藏超出部分 */
      text-overflow: ellipsis;/* 超出部分省略号 */
      display: -webkit-box;/* 弹性盒子模型 */
      -webkit-line-clamp: 2;/* 显示两行 */
      -webkit-box-orient: vertical;/* 文本垂直显示 */
    }
~~~

### 字体图标

- 导航菜单图标
- 按钮操作图标
- 结合动画效果

> 优势：
>
> 矢量无损放大缩小
>
> 可通过css直接改属性
>
> 一个字体文件可包含多个图标，比图片高效，减少http请求
>
> 兼容好

~~~css
  <link rel="stylesheet" href="./iconfont/iconfont.css">
  <style>
    .icon-good {
      font-size: 40px;
      color: #ff5000;
    }
  </style>
</head>
<body>
  <span class="iconfont icon-good"></span>
~~~

#### 精灵图

> 多个小图标合并到一张大图，再由**background-position**属性显示特定部分
>
> 在线测量坐标工具：https://www.tugaigai.com/online_ps/

~~~css
    .box {
      width: 28px;
      height: 26px;
      /* 精灵图的核心是作为背景 */
      background: url(./img/wz.webp) no-repeat;
    }
    .box1 {
      background-position: 0 -169px;
    }
    .box2 {
      background-position: -90px -170px;
      /* 背景跟着盒子走 */
      margin-left: 10px;
    }
~~~

## 4.三大特性

**继承性：**继承父级属性，但优先自己的样式

**层叠性：**后面覆盖前面，要看选择器权重来确定优先级

**优先级：**由选择器权重决定，高覆盖低的

> 原则：
>
> 1.优先级相等时遵循层叠性
>
> 2.其余判断选择器权重
>
> 3.权重4位一组（0，0，0，0），是分开的层级，不能进位，可累加
>
> 4.权重优先级：！important>内联样式>id选择器>类/属性/伪类>类型（标签）/伪元素>通配符/继承

## 5.盒子模型

### 组成

#### （1）盒子内容

~~~css
    .box1 {
      box-sizing: content-box;/* 默认，width=内容宽度 */
    }
    .box2 {
      box-sizing: border-box;/* width=内容宽度+padding+border */
    }
~~~

#### （2）内边距 padding

~~~css
    .box1 {
      padding: 10px 20px;/* 内边距顺时针上 右 下 左未赋值时与对边相等 */
    }
    .box2 {
      padding-top: 10px;   
      padding-right: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
    }
~~~

#### （3）边框 border

~~~css
    .box {
      border-top: 10px solid #000;/* 实线 */
      border-bottom: 10px dashed red;/* 虚线 */
      border-left: 10px dotted green;/* 点线 */
      border-right: 10px double blue;/* 双线 */
    }
~~~

~~~css
    .radius1 {
     border-radius: 0 10px 20px;/* 圆角边框顺时针上 右 下 左未赋值时与对角相等 */
    }
    .radius2 {
      width: 200px;
      height: 200px;
      border-radius: 100px;/* 圆形圆角为方形宽度一半或50% */
    }
    .radius3 {
      width: 200px;
      height: 40px;
      border-radius: 20px;/* 胶囊按钮圆角为较小值的一半 */
    }
~~~

> 层叠性：后面覆盖前面

#### （4）外边距 margin

~~~css
    .box1 {
      margin: 10px 20px;/* 外边距顺时针上 右 下 左未赋值时与对边相等 */
    }
    .box2 {
      margin-top: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
    }
~~~

~~~css
    span {
      width: 100px;
      height: 100px;/* 行内元素宽高度无效 */
      margin: 100px 50px;/* 行内盒子上下外边距无效 */
	}
~~~

~~~css
    .box1 {
      margin: 0 auto;/* 水平居中1 */

      margin: auto;/* 水平居中2 */

      margin-left: auto;
      margin-right: auto;/* 水平居中3 */
   
    div {
      text-align: center;
    }
    /* 行内盒子水平居中 */
<div><span>行内盒子</span></div>
~~~

> 行内元素左右外边距生效，**上下外边距无效**
>
> 行内元素设置**宽度和高度也无效**
>
> 区块元素可以利用margin实现**水平居中**（有宽度+左右外边距为auto）
>
> **区块兄弟**元素上下外边距会出现**合并**情况（以最大单个外边距为准）
>
> **区块父子级**元素上下外边距会出现**塌陷**情况（给子级设置上下外边距会让父盒子塌陷移动）
>
> **`解决方案:`**
>
> **`1.给父级添加上边框`**
>
> **`2.给父添加上内边距`**
>
> **`3.给父级添加overflow：hidden；属性`**

~~~css
    /* 区块兄弟合并情况 */
	.box1 {
    margin-bottom: 100px;/* 外边距合并为100px */
    }
    .box2 {
    margin-top: 50px;
    }

	/* 区块父子级塌陷情况 */
    .father {
      border-top: 1px solid red;/* 1. 父盒子有上边框 */
      padding-top: 0.1px;/* 2. 父盒子有上内边距 */
      overflow: hidden;/* 3.给父盒子添加属性 */
    }
    .son {
      margin-top: 20px;
    }
~~~

### 背景

#### 图片

~~~css
    .box {
      /* 背景图片 文字压住背景 */
      background-image: url(./img/w2.webp);
      /* 背景平铺 */
      background-repeat: repeat;/* 默认平铺 */
      background-repeat: no-repeat;/* 不平铺 */
      background-repeat: repeat-x;/* 横向平铺 */
      background-repeat: repeat-y;/* 纵向平铺 */
      /* 背景位置 */
      background-position: 100px 100px;/* x y 也可以是百分比、方位名词，只写一个值默认y为center */
      /* 背景尺寸 */
      background-size: 200px 200px;/* 宽度 高度 也可以是百分比 */
      background-size: cover;/* 覆盖 */
      background-size: contain;/* 包含 */
      /* 背景固定 */
      background-attachment: scroll;/* 默认随盒子滚动 */
      background-attachment: fixed;/* 相对于浏览器视口固定 */
   }
~~~

> 复合写法：background：颜色 图片 重复 固定 **位置/尺寸** ；`顺序无关`

#### 渐变

~~~css
  	/* 盒子渐变 */
	.box {
    background: linear-gradient(to right, red, blue);/* to 方位名词 */
    background: linear-gradient(90deg, red, blue);/* deg角度 */
    background: linear-gradient(to right, red 20%, blue 100%);/* 色标的位置不必须写 */
  }
	/* 文本渐变 */
 	.text {
    font-size: 20px;
    font-weight: 700;
    background-image: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;/* 谷歌浏览器老版本的兼容性 */
    background-clip: text;/* 文字背景裁剪 */
    -webkit-text-fill-color: transparent;/* 文本填充色为透明 */
  }
~~~

### 动效

#### 阴影

~~~css
    .box:hover {
     box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
     /* 水平偏移量 垂直偏移量 模糊半径 扩散半径 内阴影inset 阴影颜色 */
     }
~~~

> **前两个偏移量必写**，其余可以采取默认值

#### 过渡

~~~css
      transition: all 0.5s;
~~~

> 语法：**transition：过渡属性 过渡时间s；**
>
> 都要变化过渡属性写**all**
>
> 过渡写在盒子身上

## 6.布局 

### dislpay

#### display：block 区块元素

> **独占一行，可以设置宽高**，默认撑满父容器宽度

~~~css
    .subbar ul a {
      /* 把链接转换为块级元素 修改a的范围 */
      display: block;
      height: 42px;
      line-height: 42px;
      color: #fff;
      padding-left: 20px;
    }
~~~

#### display：inline  行内元素

> 不独占一行，不能设置宽高，默认宽度由内容决定

#### display：inline-block  行内块元素

> 表单元素默认
>
> 不独占一行，**可以设置宽高**，默认宽度由内容决定（可覆盖）
>
> 清除元素间距将父元素字号改为0

~~~css
    .box {
      /* 清除列表项之间的间距 */
        font-size: 0;
    }
    .box li {
      /* 把列表转换为行内块元素 */
      display: inline-block;
      font-size: 14px;
    }
~~~

### float 浮动

float：let； 左浮动

float：right； 右浮动

float：none； 不浮动

> 让元素脱离文档流，影响周围元素的布局

#### 清除浮动（闭合浮动）：

1.额外标签法

~~~css
    .clear {
      clear: both;
    }
  </style>
</head>
<body>
  <div class="main">
    <div class="son1"></div>
    <div class="son2"></div>
    <!-- 子盒子后添加一个清除浮动的元素 -->
     <div class="clear"></div>
  </div>
~~~

2.单伪元素清除浮动

~~~css
     .main::after {/* 父盒子后添加一个伪元素 */
      content: "";
      display: block;
      clear: both;
     }
~~~

3.双伪元素清除浮动

~~~css
    .main::after,
    .main::before {
      content: "";
      display: table;
    }
    .main::after {
      clear: both;
    }
~~~

4.overflow清除浮动

~~~css
    .main {
      overflow: hidden;
~~~

### flexbox 弹性布局

> 单行
>
> 父盒子`容器`控制子盒子`项目`（样式写给父亲）
>
> 主轴默认水平方向，交叉轴（侧轴）默认垂直方向，可更改（决定子盒子如何排列）

#### 容器

~~~csss
    .box {
      /* 弹性布局容器 */
      display: flex;
      /* 间距gap：行间距 列间距 */
      gap：10px
~~~

> 若子元素有大小，则按照给定大小显示
>
> 若子元素无大小，则高度拉伸充满父容器，宽度由内容决定
>
> 若子元素总宽度超过容器宽度，默认会压缩子元素

#### 主轴对齐方式 justify-content

~~~css
      justify-content: flex-start;/* 默认左对齐 */
      justify-content: flex-end;/* 右对齐 */
      justify-content: center;/* 居中对齐 */
      justify-content: space-between;/* 两端对齐A-B-C */
      justify-content: space-around;/* 项目等外边距-A--B--C- */
      justify-content: space-evenly;/* 间距平均分配-A-B-C- */
~~~

####  **单行**交叉轴对齐方式 alige-items

~~~css
	  align-items: flex-start;/* 默认上对齐 */
      align-items: flex-end;/* 下对齐 */
      align-items: center;/* 居中对齐 */
      align-items: stretch;/* 拉伸对齐 子盒子不能有高度 */
~~~

#### 定义主轴方向  flex-direction

~~~css
      flex-direction: row;/* 默认水平 */
      flex-direction: row-reverse;/* 水平反向 */
      flex-direction: column;/* 垂直 */
      flex-direction: column-reverse;/* 垂直反向 */ 
~~~

#### 控制是否换行 flex-wrap

~~~css
      flex-wrap: nowrap;/* 默认不换行 */
      flex-wrap: wrap;/* 强制换行 */
      flex-wrap: wrap-reverse;/* 强制换行并反向排列 */
~~~

#### **多行**交叉轴对齐方式 alige-content

> 必须设置父盒子高度

~~~css
      align-content: start;/* 靠上对齐 */
      align-content: end;/* 靠下对齐 */
      align-content: center;/* 居中对齐 */
      align-content: space-between;/* 两端对齐 */
      align-content: space-around;/* 外边距相等 */
      align-content: space-evenly;/* 间距平分 */
~~~

#### 子盒子属性

~~~css
	/* 写给子盒子优先执行flex属性 */
	flex: 1;
	/* 把父盒子的`剩余空间`平均分为几等份,一个子盒子占1份,来填满父盒子 */
	flex: 0 0 16.6666666%;/* 淘宝多行伸缩尺寸 */
	
	flex: 1;
	min-width: 16.66666666666666%;
	max-width: 16.66666666666666%;/* 京东多行伸缩尺寸 */

	vertical-align:middle;/* 垂直居中 */
~~~

> flex-grow 放大比例
>
> flex-shrink 缩小比例
>
> flex-basis 初始大小
>
> flex：1 -> 1 1 0%
>
> flex：2 -> 2 1 0%

### position 定位布局

> 固定导航栏`固定定位`
>
> 吸顶效果`粘性定位`
>
> 弹出菜单/下拉框 `绝对定位`
>
> 悬浮效果 `绝对定位`
>
> z-index**层叠性**，越大越在上，默认为0

#### 默认定位 static

#### 相对定位 relative

> 距离自身原来位置
>
> 不脱离正常流，只保留元素原位置
>
> 优先级，同时设置时仅top和left生效

~~~css
      position: relative;
      top: 100px;
      left: 100px;
~~~

#### 绝对定位 absolute

> 脱离正常流，不占据空间
>
> 相对于最近的已定位relative的祖先元素，若无则以视口来一定位
>
> 优先级

~~~css
      position: absolute;
      top: 150px;
      left: 150px;
~~~

~~~css
  top: 50%;
  margin-top: -30px;
  /* 垂直居中 高度一半 */
~~~

#### 固定定位 fixed

> 脱离正常流
>
> 相对于视口定位
>
> 优先级

~~~css
      position: fixed;
      left: 50%;
      margin-left: -300px;/* 居中 左移50%，抵消50%的宽度 */
      bottom: 30px;
      /* margin: 0 auto;对定位的盒子无效 */
~~~

#### 粘性定位 sticky

> 元素滚动到指定位置前为相对定位，之后转为固定定位
>
> **父容器**的overflow为**visible**
>
> 需**指定方位之一**才生效

~~~cs
      position: sticky;
      top: 0;/* 距离父盒子为0时，固定在顶部 */
~~~

### grid 网格布局

> 多行多列
>
> 先创建网格后放入元素

#### 网格轨道

~~~css
      display: grid;
      grid-template-columns: 100px 100px 100px;/* 创建3列轨道 */
      grid-template-rows: 100px 100px 100px;/* 创建3行轨道 */
      justify-content: space-between;/* 列轨道两端对齐 */   
      align-content: space-between;/* 行轨道两端对齐 */
~~~

~~~css
      grid-template-columns: 1fr 1fr 1fr;/* 3列各占一份 */
      grid-template-rows: 1fr 1fr 1fr;/* 3行各占一份 */
      grid-template-columns: repeat(11, 1fr);/* repeat(次数，轨道尺寸) */
      gap: 10px 20px;/* 网格行、列间距 */
~~~

#### 响应式

~~~css
	  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      /* repeat(自动填充轨道，minmax(最小轨道尺寸，最大轨道尺寸)) */
	 /* auto-fit 拉伸盒子占满所有 */
~~~

#### 跨越多个网格单元

~~~css
      /* 加到子元素身上 */
	  grid-column: 1 / 3;/* 从第1列线开始跨2列网格线 */
      grid-row: 1 / 3;/* 从第1行线开始跨2行网格线 */

      grid-column: 1 / span 2;/* 从第1列线开始跨2个单元格 */
      grid-row: 1 / span 2;/* 从第1行线开始跨2个单元格 */
~~~

#### 网格填充方式

~~~css
      grid-auto-flow: column;/* 竖向 */
      grid-auto-flow: row;/* 横向 */
~~~

#### 图片缩放

~~~css
      object-fit: fill;/* 默认值完全填充容器 */
      object-fit: contain;/* 响应式适应 留白 */
      object-fit: cover;/* 响应式缩放 不留白 */
      object-position: center;/* 以中心位置显示图片 top left左上角 */
~~~

#### 项目对齐方式

~~~css
	 /* 加到父容器 */
      justify-items: center;/* 水平居中对齐 */
      align-items: center;/* 垂直居中对齐 */
	  start/*左*/ end/*右*/ stretch/*默认拉伸*/
~~~

### 多列布局

> 长文章分栏
>
> 图片瀑布流

~~~css
      column-count: 4;/* 列数 */
      column-gap: 20px;/* 列间距 */
      column-rule: 1px solid #000;/* 列边框 */

      break-inside: avoid-column;/* 写在子盒子 不许被切割 */
      -webkit-column-break-inside: avoid;/* 谷歌兼容 */
~~~

## 7.弹性盒子实战

1.引入网页图标favicon

2.引入字体图标

3.引入css文件：初始化、公共样式、页面样式

4.公共样式中 确定版心（页面宽度）

5.快捷导航

6.header部分

> logo：h1提高权重，包含首页链接，背景图片添加title
>
> ~~~html
>     <div class="logo">
>       <h1>
>         <a href="小兔鲜首页.html" title="小兔鲜儿">小兔鲜儿</a>
>       </h1>
>     </div>
> ~~~
>
> ~~~css
> .header .logo {
>   width: 200px;
>   height: 88px;
>   background-color: #fff;
> }
> .header .logo h1 {
>   width: 100%;
>   height: 100%;
> }
> .header .logo a {
>   display: block;
>   width: 100%;
>   height: 100%;
>   background: url(../images/logo.png) no-repeat;
>   text-indent: -9999px;/* 隐藏文字 */
>   overflow: hidden;
> }
> ~~~

7.footer部分

> 口号模块、服务模块、版权模块

8.页面主体部分

## 8.鼠标样式

~~~css
    <li style="cursor: pointer;">指针</li>
    <li style="cursor: text;">文本</li>
    <li style="cursor: wait;">等待</li>
    <li style="cursor: help;">帮助</li>
    <li style="cursor: not-allowed;">不允许操作</li>
    <li style="cursor: grab;">抓取</li>
    <li style="cursor: grabbing;">抓取中</li>
    <li style="cursor: zoom-in;">放大</li>
    <li style="cursor: zoom-out;">缩小</li>
    <li style="cursor: move;">移动</li>
    <li style="cursor: crosshair;">十字</li>
    <li style="cursor: default;">默认</li>
    <li style="cursor: progress;">进度</li>
    <li style="cursor: cell;">单元格</li>
~~~

## 9.变换

> transfrom且不破坏原有文档流布局 

### 2D平移 translate

- 元素居中
- 悬停元素微调

~~~css
      transform: translate(100px, 100px);/* x y 位移 根据自己原来的坐标进行位移 */
      transform: translateX(50%);/* x轴位移 自身盒子宽度的50% */
      transform: translateY(50%);/* y轴位移 实现元素居中 */
~~~

### 2D旋转 rotate

- 悬停旋转
- 加载旋转

> 不可给行内元素添加

~~~css
    img{
      transform-origin: left top;/* 旋转中心在左上角 */
    }
    img:hover{
      transform: rotate(360deg);/* 旋转360度 正顺时针 负逆时针 */
      transition: all 1s;/* 过渡在hover不回去 */
    }
~~~

### 2D缩放 scale

- 悬停放大

~~~css
      transform: scale(1.5);/* 整体缩放1.5倍 */
      transform: scale(1.2, 1.2);/* 水平方向放1.2倍 垂直方向放1.2倍 */
~~~

### 2D倾斜 skew

~~~css
      transform: skew(16deg, 16deg);
	 transform: skewX(-16deg);/* 水平方向斜切20度 正向左 负向右 */
      transform: skewY(16deg);/* 垂直方向斜切20度 正向下 负向上 */
	
	 transform-origin: left top;/* 旋转中心在左上角 */
~~~

### 过渡 transition

> 速度曲线参数：
>
> ease 默认值自然过渡，慢快慢
>
> linear 匀速运动
>
> ease-in 慢快
>
> ease-out 快慢
>
> ease-in-out 对称性动画，慢快慢
>
> cubic-bezier（x1，y1，x2，y2） 贝塞尔曲线

~~~css
	/* 过渡属性 持续时间 速度曲线 延迟时间 */
	transition: all 1s linear 1s;
~~~

### 复合写法

~~~css
	transform: A() B() C();
	/* 从右到左执行 */
~~~

### 3D旋转 rotate

~~~CSS
      transform: rotateX(180deg);
      transform: rotateY(180deg);
      transform: rotateZ(180deg);
~~~

### 透视 perspective

> 透视越**小**效果越**强**
>
> 父元素添加属性，子元素继承
>
> 子元素添加到transform属性的第一个函数

~~~CSS
     /* 父元素 */
	 perspective: 500px;
     /* 子元素 */
     transform: perspective(500px) rotateZ(30deg);
~~~

### 3D位移 translate3d

~~~css
      transform-style: preserve-3d;/* 父元素添加3D空间 */
      transform: translate3d(0, 0, 60px);/* 子元素 */
~~~

## 10.动画









## 书写顺序

6-布局 5-盒模型 3-视觉 8.9-交互 其他
