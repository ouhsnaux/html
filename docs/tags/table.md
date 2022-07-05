# 表格

结构化展示数据。

例子：

```html
<table>
  <colgroup>
    <col style="width: 40px">
    <col style="width: 200px">
    <col style="width: 200px">
  </colgroup>
  <caption>成绩单</caption>
  <thead>
    <tr><th>排名</th><th>姓名</th><th>分数</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>张三</td><td>100</td></tr>
    <tr><td>2</td><td>李四</td><td>95</td></tr>
    <tr><td>3</td><td>王五</td><td>80</td></tr>
  </tbody>
</table>
```

## 标签

* `<table>` 根元素
* `<colgroup>` 列的样式配置容器
  * `<col>` 配置整列样式
    * `span` 对应多少列
* `<caption>` 标题
* `<thead>`
* `<tbody>`
* `<tfoot>`
  * `<tr>` 包裹一行
    * `<td>` 单元格
    * `<th>` 有标题性质的单元格
      * `colspan` 此单元格占据多少列
      * `rowspan` 此单元格占据多少行

## 表格表头与单元格对应

配置表头或单元格都可以实现

### 配置表头

配置 `<th>` 元素 `scope` 属性

* `col` 对应列
* `colgroup` 对应多列
* `row` 对应行
* `rowgroup` 对应多行

### 配置单元格

配置 `<td>` 元素的 `headers` 属性，指向对应 `<th>` 的 `id`
