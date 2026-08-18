# 聚小鲜追加图库 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在聚宝金昊项目详情页的既有 18 张图片后，追加 22 张聚小鲜图片，并以全幅原比例显示。

**Architecture:** 新图片复制到 `src/assets` 并以具名导入的方式加入 `ProjectPage.tsx` 的聚宝图库数组。新增部分复用该页现有的纵向图库容器，但通过专用类覆盖原有 16:9 裁切，令每个图片按自身尺寸自然撑开。

**Tech Stack:** React、TypeScript、Vite、CSS。

## Global Constraints

- 保留原有 18 张聚宝金昊图库图片及其顺序。
- 新图严格按照用户给出的 22 个文件顺序追加。
- 所有新增图片全幅展示、无并排布局、无裁切。
- 不修改其他项目页面。

---

### Task 1: 添加聚小鲜素材与图库数据

**Files:**
- Create: `src/assets/juxiaoxian-gallery-01.png` through `src/assets/juxiaoxian-gallery-22.png`
- Modify: `src/pages/ProjectPage.tsx`

**Interfaces:**
- Consumes: 用户在 `E:/工作/作品集网页/聚小鲜/` 提供的 22 个文件。
- Produces: `juxiaoxianGalleryImages: string[]`，按给定顺序返回图片模块。

- [ ] **Step 1: 复制并规范命名素材**

将 22 个用户提供文件复制为连续编号的 `juxiaoxian-gallery-01` 至 `juxiaoxian-gallery-22`，保留原始扩展名。

- [ ] **Step 2: 将素材加入详情页数组**

```ts
const jubaoGalleryImages = [
  // 保留既有 18 项
  ...juxiaoxianGalleryImages,
]
```

- [ ] **Step 3: 构建验证素材导入**

Run: `pnpm run build`

Expected: 构建成功，且没有 missing module 或 missing asset 错误。

### Task 2: 保持新增图片全幅原比例

**Files:**
- Modify: `src/pages/ProjectPage.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: `juxiaoxianGalleryImages` 和既有 `jubaoGalleryImages`。
- Produces: `xiduoduo-gallery--natural` 容器，其中每个图像宽度为 100%、高度为 auto。

- [ ] **Step 1: 为追加部分使用自然比例图库容器**

```tsx
<section className="xiduoduo-gallery xiduoduo-gallery--natural">
  {juxiaoxianGalleryImages.map((image, index) => (
    <figure key={image}>
      <img src={image} alt={`聚小鲜项目图片 ${index + 1}`} />
    </figure>
  ))}
</section>
```

- [ ] **Step 2: 覆盖裁切规则**

```css
.xiduoduo-gallery--natural figure { margin: 0; }
.project-detail--xiduoduo .xiduoduo-gallery--natural img {
  display: block;
  position: static;
  width: 100%;
  height: auto !important;
  object-fit: contain;
}
```

- [ ] **Step 3: 构建与页面验证**

Run: `pnpm run build`

Expected: 构建成功；`/projects/jubao-jinhao` 中新图出现在原有 18 张图片之后，且无裁切和横向溢出。
