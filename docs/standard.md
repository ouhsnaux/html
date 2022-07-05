# 规范

## 模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=*0">
  <title>HTML 模板</title>
</head>
<body>
  
</body>
</html>
```

### 代码格式

* 使用 `2` 个空格缩进
* 标签，属性及大部分属性值小写，属性值加双引号
* 非自闭合元素要写上起止标签，空元素结尾不加 `/`
* 文件名小写，`-` 连接。

## 优化

### 文件

* 文件放在同一域名下，优先使用相对路径，可以减少域名定位时间。
* 减少文件大小
  * 删除空白符和注释
  * 变量替换为短字符串
  * `gzip` 压缩
* 文件合并，减少请求数。`HTTP` 同时进行的请求数量有限，`HTTP` 连接耗时。比如合成雪碧图。
* `CDN`
* `HTTP` 缓存。
* 使用 `preload` 和 `prefetch` 预加载资源

### 图片

* 包含重要信息使用 `<img>`，修饰作用使用背景图
* 图片指定宽高，减少重排和重绘
* 添加懒加载 `loading="lazy"`

### 表格

`table-layout: fixed`，减少重排和重绘。

### script

当遇到 `<script>` 时，浏览器会下载并解析执行 `js` 文件，这会阻塞对 `HTML` 文档的解析和渲染。
此时我们的页面上呈现的就是 `script` 标签之前的内容。
如果我们在 `head` 中引入 `script`，那么在 `script` 执行完成前，我们的整个页面都是空白的。
如果我们把 `script` 放到 `body` 底部，在执行 `script` 之前，我们的 `HTML` 已经呈现到用户面前。

通过 `async` 或 `defer` 属性，可以异步加载外链 `script` 文件。
浏览器会新开线程下载文件。不会阻塞 `HTML` 的解析和渲染。
`defer` 是等到 `HTML` 解析完成后，`DOMContentLoaded` 事件前执行。
`async` 是下载完成后立即执行。
`async` 比 `defer` 优先级更高。
