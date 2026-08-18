# 作品详情页首屏进入设计

## 目标

进入「喜多多」和「聚宝金昊」项目详情页时，页面立即定位到首屏顶部。

## 方案

在路由层观察 `location.pathname`。当路径恰好为 `/projects/xiduoduo` 或 `/projects/jubao-jinhao` 时，调用 `window.scrollTo({ top: 0, left: 0, behavior: 'auto' })`。

不对首页、厚承项目页或其他路径重置滚动位置。

## 验收

- 从首页滚动到任意位置后，进入喜多多详情页显示首屏。
- 从首页滚动到任意位置后，进入聚宝金昊详情页显示首屏。
- 其他路由的现有滚动行为不变。
