# 语法

## 页面结构

一个简单的 `HTML` 例子

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

* `<!DOCTYPE html>` 表明 `html` 版本是 `5`， 写死就好。
* `<html>` 根元素
  * `<head>` 网站的介绍，不会显示在页面上
    * `<meta charset="utf-8">` 表明文件编码
    * `<title>` 标签页内容
  * `<body>` 页面展示内容

## 元素

* 标签为尖括号及包裹的内容 `<tag>`
* 普通元素 `<tag>元素内容</tag>`，开始标签 + 内容 + 闭合标签
* 自闭合元素，比如 `<br>, <input>`
* 标签内还可以给元素添加属性 `<p class="editor-note">My Cat is very grumpy</p>`
* 元素可嵌套

  ```html
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
  ```

## 特殊字符

1. 空白符会发生合并
2. 部分字符无法在元素的内容中使用，需要借助字符引用解决。下面是常用的特殊字符。

| 特殊字符 | 字符引用 |
| :-- | :-- |
| < | `&lt;` |
| > | `&gt;` |
| " | `&quot;` |
| ' | `&apos;` |
| & | `&amp;` |
| 空格 | `&nbsp;` |

## 注释

`<!-- 注释内容，不会显示在页面上 -->`
