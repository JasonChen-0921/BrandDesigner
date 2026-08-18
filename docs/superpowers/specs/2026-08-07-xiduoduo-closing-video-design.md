# 喜多多末尾视频设计

在 `/projects/xiduoduo` 的现有图片序列最后追加 `媒体1.mp4`。视频复用全宽单列媒体流，使用 `controls`、`playsInline` 与 `preload="metadata"`，不自动播放，不改动已有图片或其他项目页面。

验收：视频位于喜多多页面最后，能够手动播放；`npm run build` 成功。
