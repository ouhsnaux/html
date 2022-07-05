# 表单

给用户提供输入功能，并将数据发送到服务器。

例子：

```html
<form>
  <input>
</form>
```

## 输入元素

### 通用属性

* `readonly` 只读
* `disabled` 禁用，此处功能与 `readonly` 一致，还可以用到其他地方。
* `name` 表单上传时，作为参数名
* `value` 表单输入值
* `placeholder` 表单值为空时显示的内容
* `form` 如果控件在表单外部，使用此属性表示关联关系
* `autofocus` 自动聚焦

#### 表单校验相关属性

* `maxlength` 最多可输入字符数量
* `minlength` 最少可输入字符数量
* `pattern` 正则校验
* `required` 必填

### `<input>`

输入框控件

* `type` 控件类型
* `size` 设定长度
* `spellcheck` 拼写检查
* `list` 指定自动填充数据来源`<datalist>` 元素的 `id`，详见下方 `<datalist>`

#### 控件类型 -- 常见

* `text` 文本，默认为该类型
* `password` 密码
* `checkbox` 适用于开关和多选
* `radio` 适用于多选一
* `file` 文件，`accept` 限制文件格式，`multiple` 控制上传多个文件。
* `submit` 提交按钮
* `hidden` 不显示，主要用于提交表单时添加参数

#### 控件类型 -- 不常用

* `image` 需添加 `src` 属性，点击时提交表单，上传点击位置。
* `email` 邮件，可以使用 `multiple`，多个邮箱使用逗号隔开，会校验格式
* `search`，一般会有一个清空符号，搜索后内容会保存，下次搜索可用
* `tel`，手机会唤起数字键盘
* `url`，格式校验
* `number`，只允许输入数字，`min` `max`，`step`每次改变步长
* `range`，slider `min`, `max`, `step`，不会显示值，需要使用 `js`
* `time`
* `color`
* `progress`
* `meter`

### `<textarea>`

多行文字输入框，元素内容为默认值。

* `rows` 行
* `cols` 列
* `wrap` 为 `hard` 时，在达到最大宽度时，自动插入换行符

### `<select>` 选择框

下拉选择框

* `multiple` 是否多选。
* `size` 设定高度

#### 嵌套子元素

* `<option>` 下拉选项中的子元素
  * `selected` 是否选中
* `<optgroup>` 作为 `<option>` 的父元素给其分组

### `<datalist>`

自动填充数据列表。

例子：

```html
  <label for="myFruit">What's you favorite fruit?</label>
  <input type="text" name="myFruit" id="myFruit" list="mySuggestion">
  <datalist id="mySuggestion">
    <option>Apple</option>
    <option>Banana</option>
    <option>Lemon</option>
  </datalist>
```

## 结构元素

### `<form>`

作为表单输入元素的容器，包含以下两个属性

* `action` 属性，表单提交的地址
* `method` 方法，`http methods get/post...`

### `<label>`

控件文字描述，点击会聚焦对应的控件。

* 表单输入元素一般与 `<label>` 元素并列，在 `<label>` 中使用 `for` 属性对应表单输入元素的 `id`
* 也可以将表单输入元素放到 `<label>` 内部，

### `<button>`

按钮

* `type` 按钮类型
  * `reset` 重置为默认值
  * `submit` 提交表单

`<input type="submit" />` 与 `<button type="submit"></button>` 相比，
`<input>` 元素内容只能是纯文本，而 `<button>` 内容没有限制。

### `<fieldset>` 分组

使用 `<fieldset>` 对将控件分组，`<legend>` 中显示分组名。

每次使用 `radio` 或 `checkbox` 都应该放到 `<fieldset>` 中。

例子：

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small">
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium">
      <label for="size_2">Medium</label>
    </p>
  </fieldset>
</form>
```
