# head

对页面的描述，不会在页面上展示。

## 浏览器标签页

* 标题 `<title>`
* 图标 `<link rel="icon" href="favicon.ico">`，可以提供多个图标并指定 `sizes` 属性，这样浏览器会根据设备展示不同的图标。

## meta

### 字符编码

`<meta charset="utf-8">`

### 编译指示指令 `http-equiv`

所有允许的值都是特定 `HTTP` 头部的名称。与 `content` 属性配合使用

* `content-security-policy` 定义安全策略
* `content-type` 值必须是 `text/html; charset=utf-8`
* `x-ua-compatible`
* `refresh`

### 自定义属性

使用 `name` 和 `content` 属性定义页面，比如添加作者，关键字，页面描述。

```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

`description` 会显示在搜索引擎结果的描述中。

## CSS

* 内联样式

  ```html
  <style>
    p { color: red }
  </style>
  ```

* 外链样式文件

  ```html
  <link rel="stylesheet" href="my-css-file.css">
  ```

  可以添加 `media` 属性，语法同媒体查询。

## JavaScript

* 内联脚本
  
  ```html
  <script>
    console.log('hello world');
  </script>
  ```

* 外链脚本
  
  ```html
  <script src="my-js-file.js"></script>
  ```

`script` 可以出现在任何位置，不局限在 `head` 中，一般放在 `body` 底部。
