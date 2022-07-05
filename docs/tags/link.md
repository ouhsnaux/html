# 链接

点击跳转到其它网站，互联网的根基。

例子：`<a href="https://www.baidu.com">百度</a>`

## URI vs URL

* `URI Uniform Resource Identifier` 统一资源**标识符**，独一无二的一种标识
* `URL Uniform Resource Locator` 统一资源**定位符**，资源在网络上的位置
* `URN Uniform Resource Name` 统一资源**名称**，比如 `ISBN`

`URL = protocol + domain + path`，`URL` 是 `URI` 和 `URN` 的并集，我们见到的绝大部分 `URI` 都是 `URL`。

## 相对路径

* `/` 根目录
* `./` 当前目录
* `../` 上一级

## 属性

* `href` 指定链接URL，可以包含hash，跳转后页面会滚动到对应的锚点
* `target` 打开新页面的方式，默认在当前页面跳转
  * `_blank` 打开新的标签页并跳转
  * `_self` 在当前页跳转
  * `_parent` 如果当前页面被iframe嵌套，在父级页面跳转
  * `_top` 如果当前页面被iframe嵌套，
* `download` 交互方式改为下载文件，并以该属性的值为文件名
* `rel` 指定值为 `noreferrer noopener`，新页面与本页面隔绝
