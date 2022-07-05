# 多媒体

视频和音频，分别对应 `<video>` 和 `<audio>`

例子：

```html
<video src="rabbit320.webm" controls>
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p>
</video>
```

内部的文字会在浏览器不支持 `video` 标签时显示。

## 属性

* `src` 属性指向媒体 `URL`。
* `controls` 表明用户是否可以控制文件，比如播放，暂停，调节音量等。
* `width` & `height` 宽高，宽高比不会变，根据情况留白。
* `autoplay` 自动播放。目前浏览器在用户未操作页面的情况下会阻止自动播放。
* `loop` 循环播放
* `muted` 静音
* `poster` 封面海报图片
* `preload`
  * `none` 不缓冲
  * `auto` 自动缓冲
  * `metadata` 只缓冲元数据

## 兼容

为解决兼容性问题，我们可以这样写：

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

## 字幕 `<track>`

字幕文件保存为 `.vtt` 文件，包括时间和文字，格式如下：

```vtt
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

  ...
```

### 字幕属性

* `src` 指定资源文件
* `kind`
  * `subtitles` 翻译
  * `captions` 对话转录或重要声音的描述
  * `timed descriptions` 媒体播放器使用的文件，为盲人描述视觉效果
* `srclang` 字母语言类型，缩写
* `label` 字幕语言类型，会出现在页面上，用于用户切换
* `default` 默认使用文件
