# 事件

## 拖拽

* draggable 将元素标记为可拖拽

| 事件 | 触发元素 | 触发时机 |
| :--  | :-- | :-- |
| ondragstart | 被拖动的HTML元素 | 开始拖动 |
| ondrag | 被拖动的HTML元素 | 拖动时 |
| ondragend | 被拖动的HTML元素 | 拖动结束 |
| ondragenter | 拖动经过的元素 | 拖动进入 |
| ondragover | 拖动经过的元素 | 拖动时 |
| ondragleave | 拖动经过的元素 | 拖动出 |
| ondrop | 拖动经过的元素 | 拖动结束并放到本元素 |

注意：拖动事件需使用 `preventDefault` 阻止 `ondrag` 和 `ondragover` 的默认事件

## 过渡

* `transitionrun` 过渡触发
* `transitionstart` 过渡开始执行（延迟后）
* `transitionend` 过渡结束，如果过渡取消，则不会触发

## 动画

* `animationstart` 动画开始
* `animationend` 动画结束
* `animationiteration` 动画每次循环
