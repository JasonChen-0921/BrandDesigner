# 喜多多末尾视频 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在喜多多二级页末尾显示一个可播放的视频。

**Architecture:** 将源视频复制为 `src/assets/xiduoduo-closing-video.mp4`，在喜多多条件分支最后渲染原生视频元素，复用既有视频全宽规则。

**Tech Stack:** React 18、TypeScript、Vite、CSS

## Global Constraints

- 视频必须位于喜多多最后一张已有图片之后。
- 使用 `controls`、`playsInline` 和 `preload="metadata"`。

---

### Task 1: 接入末尾视频

**Files:**
- Create: `src/assets/xiduoduo-closing-video.mp4`
- Modify: `src/pages/ProjectPage.tsx`
- Test: `npm run build`

- [ ] 复制用户提供的 `媒体1.mp4` 到项目资源目录。
- [ ] 在 `ProjectPage.tsx` 导入视频，并在喜多多分支最后追加 `<video controls playsInline preload="metadata">`。
- [ ] 运行 `npm run build`，确认 Vite 能打包视频资源。
