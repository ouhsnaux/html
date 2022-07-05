# 图片

一图胜千言。使用 `<img>` 标签在页面中添加图片。

例子：`<img src="dinosaur.png" alt="dinosaur">`

## 普通属性

* `src` 指定图片 `URL`
* `alt` 图片说明，图片加载失败后会显示
* `width` 宽度
* `height` 高度
* `loading` 值为 `lazy` 时异步加载

## 添加标题

为图片添加标题需要使用 `<figure>` 标签和 `<figcaption>` 标签。

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
        it has a large head with long sharp teeth"
    width="400"
    height="341"
  >
  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

除了单张图片，`figure` 元素内部也可以是多个图片，代码片段，`audio`，`video`，`table` 等等。

## 热区

给图片添加热区，点击不同热区，执行不同的行为。

* `<img>` 添加 `usemap` 属性，指向 `<map>` 的 `name` 属性
* `<map>` 声明 `name` 属性，内部包裹 `<area>` 元素
  * `<area>`
    * `shape` 形状
      * `circle`，`coords` 声明圆心及半径
      * `rect`，`coords` 声明左上和右下的坐标
      * `polygon`，`coords` 声明每一个顶点的坐标
    * `href`，链接地址
    * `alt`

例子：

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
<map name="example-map-1">
  <area shape="circle" coords="200,250,25" href="page-2.html" alt="circle example">
  <area shape="rect" coords="10,5,20,15" href="page-3.html" alt="rectangle example">
</map>
```

## 响应式

* `sizes` 属性语法与媒体查询相同，根据屏幕宽度控制图片显示宽度。
* `srcset` 提供多个可选值，相应宽度下显示对应的图片。
每个可选值包括一个图片链接和一个宽度，宽度以 `w` 结尾，对应 `px`， 或 `x`结尾，对应屏幕的dpr。
根据 `sizes` 计算出的宽度，选择大于等于该值的最小尺寸图片。

```html
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 480px, 800px"
     src="elva-fairy-800w.jpg"
     alt="Elva dressed as a fairy"
>
```

## `<img> vs background vs icon`

如果图片中包含重要信息，使用 `<img>` 元素。
如果你的图片仅仅起修饰作用，请使用 `css` 种的背景图。
小图标使用字体 `icon`
