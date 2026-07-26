# 陈见晟品牌设计师作品集

## 启动

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 内容与资源替换

- 个人简介、联系方式、社交链接、服务、专业能力、项目文案与视频地址：`src/data/portfolio.ts`
- 头像占位图：`src/assets/portrait-placeholder.svg`
- 项目封面：`src/assets/project-01.svg` 至 `src/assets/project-06.svg`
- 视频降级海报：`src/assets/hero-poster.svg`
- Hero 视频：将自己的 `hero-loop.mp4` 放到 `public/media/hero-loop.mp4`。如视频缺失或无法播放，页面自动显示本地静态渐变海报。

所有当前项目封面都是本地 SVG 占位素材，可直接以同名文件替换，或在数据文件中改为新的导入路径。项目详情页面已预置为 `/projects/:slug`。
