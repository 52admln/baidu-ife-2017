## 学习心得

1. 菜单的宽度及高度如果不显式声明,无法通过 `getBoundingClientRect()`、`getComputedStyle()` 方法获取
2. 当窗口改变的时候,需要重新获取 `window.innerWidth` 和 `window.innerHeight`