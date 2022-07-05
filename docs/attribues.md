# 属性

## 通用

* `id` 作为元素的唯一标志，主要用于方便后续查找该元素
* `class` 类，主要用于应用样式
* `title` 鼠标悬浮时显示的内容
* `name` 也是元素的标志，但是主要用在表单中
  * 作为表单提交的key
  * 将单选按钮分组

## 比较

### `name vs id`

`name` 主要用在表单中，有两个作用

* 作为表单提交的key
* 将单选按钮分组

其他时候使用 `id`

### `readonly vs disabled`

`readonly` 主要用于表单输入组件只读。
`disabled` 表示禁用，用途更广，在表单输入组件使用该属性时，效果与 `readonly` 相同。

## dataset

`data-*` 属性，使得 `HTML` 元素具有绑定数据的能力。

### html 中使用

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
  ...
</article>
```

### css 中使用

```css
article::before {
  content: attr(data-parent);
}

article[data-columns='3'] {
  width: 400px;
}
```

### js 中使用

```js
const article = document.querySelector('#electric-cars');

article.dataset.columns // 3
article.dataset.indexNumber // 12314
article.dataset.parent // cars
```
