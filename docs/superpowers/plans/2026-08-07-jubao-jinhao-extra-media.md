# 聚宝金昊追加媒体 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在聚宝金昊项目二级页原有素材序列末尾展示 5 张新图片和 1 个可播放视频。

**Architecture:** 在既有 `jubao-jinhao` 条件分支中引入并渲染新增本地资源。图片复用自然比例单列画廊，视频使用原生播放器和同宽容器，避免影响其他项目页。

**Tech Stack:** React 18、TypeScript、Vite、CSS

## Global Constraints

- 新增素材顺序固定为 `jubao-extra-01.jpg` 至 `jubao-extra-06.mp4`。
- 图片必须保持自然比例且全宽显示；视频启用 `controls`、`playsInline` 与 `preload="metadata"`。
- 仅修改媒体接入所需文件，不改动既有素材或其他项目页面。

---

### Task 1: 接入聚宝金昊追加媒体

**Files:**
- Modify: `src/pages/ProjectPage.tsx`
- Modify: `src/styles/global.css`
- Test: `npm run build`

**Interfaces:**
- Consumes: `src/assets/jubao-extra-01.jpg` 至 `src/assets/jubao-extra-06.mp4`
- Produces: `/projects/jubao-jinhao` 末尾的单列图片与视频媒体流

- [ ] **Step 1: 写入构建期回归检查**

通过接入后运行 Vite TypeScript 构建检查 JSX 属性、资源导入与视频 `source` 类型：

```bash
npm run build
```

预期：当前代码尚未导入或渲染新增资源，因此构建能够通过，但页面尚不存在新增媒体，随后使用浏览器页面检查验证新增内容。

- [ ] **Step 2: 记录功能缺失状态**

在 `/projects/jubao-jinhao` 的 `ProjectPage.tsx` 分支中，当前仅渲染 `juxiaoxianGalleryImages`，没有 `jubao-extra-01.jpg` 至 `jubao-extra-06.mp4` 的导入、数组或 `video` 元素；这构成新增媒体尚未展示的失败条件。

- [ ] **Step 3: 最小化实现媒体流**

在 `src/pages/ProjectPage.tsx` 新增以下导入，并将 5 张图片组成 `jubaoExtraImages`：

```tsx
import jubaoExtra01 from '../assets/jubao-extra-01.jpg'
import jubaoExtra02 from '../assets/jubao-extra-02.jpg'
import jubaoExtra03 from '../assets/jubao-extra-03.jpg'
import jubaoExtra04 from '../assets/jubao-extra-04.jpg'
import jubaoExtra05 from '../assets/jubao-extra-05.jpg'
import jubaoExtra06 from '../assets/jubao-extra-06.mp4'

const jubaoExtraImages = [
  jubaoExtra01,
  jubaoExtra02,
  jubaoExtra03,
  jubaoExtra04,
  jubaoExtra05,
]
```

在现有聚小鲜自然比例图片画廊之后渲染：

```tsx
<section className="xiduoduo-gallery xiduoduo-gallery--natural" aria-label="聚宝金昊追加项目图片">
  {jubaoExtraImages.map((image, index) => (
    <figure key={image}>
      <img src={image} alt={`聚宝金昊追加项目图片 ${index + 1}`} />
    </figure>
  ))}
  <figure className="xiduoduo-gallery-video">
    <video controls playsInline preload="metadata">
      <source src={jubaoExtra06} type="video/mp4" />
      您的浏览器不支持视频播放。
    </video>
  </figure>
</section>
```

在 `src/styles/global.css` 增加：

```css
.project-detail--xiduoduo .xiduoduo-gallery-video video{display:block;width:100%;height:auto}
```

- [ ] **Step 4: 运行构建验证实现**

运行：

```bash
npm run build
```

预期：命令以退出码 0 完成，并生成生产构建。

- [ ] **Step 5: 手动验证页面内容**

打开 `http://127.0.0.1:5173/projects/jubao-jinhao`，滚动至页面末尾，确认按 `jubao-extra-01` 到 `jubao-extra-05` 的顺序显示五张完整图片，且最后显示带播放控件的视频。

- [ ] **Step 6: 提交前检查**

运行：

```bash
git diff --check
git status --short
```

预期：无空白错误；只报告本任务新增或变更的素材接入文件与文档。由于仓库已有用户未提交改动，不执行提交。
