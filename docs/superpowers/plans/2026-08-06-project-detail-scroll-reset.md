# 作品详情页首屏进入 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让喜多多和聚宝金昊详情页在进入时从首屏顶部显示。

**Architecture:** 在 `App.tsx` 新增一个只渲染 `null` 的 `ProjectDetailScrollReset` 组件。该组件通过 `useLocation` 监听路径变更，仅在两个指定项目路径调用浏览器滚动 API。

**Tech Stack:** React、React Router、TypeScript、Vite。

## Global Constraints

- 仅匹配 `/projects/xiduoduo` 与 `/projects/jubao-jinhao`。
- 使用 `behavior: 'auto'`，不出现平滑滚动动画。
- 不改变其他路由的滚动位置。

---

### Task 1: 重置指定详情页的滚动位置

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `useLocation(): Location` 返回的 `pathname`。
- Produces: `ProjectDetailScrollReset(): null`，在指定路径切换时调用 `window.scrollTo`。

- [ ] **Step 1: 添加路由位置依赖与目标路径集合**

```ts
import { Route, Routes, useLocation } from 'react-router-dom'

const detailPathsThatStartAtTop = new Set([
  '/projects/xiduoduo',
  '/projects/jubao-jinhao',
])
```

- [ ] **Step 2: 添加滚动重置组件**

```tsx
function ProjectDetailScrollReset() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (detailPathsThatStartAtTop.has(pathname)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}
```

- [ ] **Step 3: 在路由前渲染组件**

```tsx
export default function App() {
  return <><ProjectDetailScrollReset /><Routes>...</Routes></>
}
```

- [ ] **Step 4: 构建验证**

Run: `pnpm run build`

Expected: `✓ built`，且没有 TypeScript 错误。

- [ ] **Step 5: 浏览器验证**

从首页滚动到非零位置，依次进入 `/projects/xiduoduo` 和 `/projects/jubao-jinhao`；每次读取 `window.scrollY`，预期为 `0`。
