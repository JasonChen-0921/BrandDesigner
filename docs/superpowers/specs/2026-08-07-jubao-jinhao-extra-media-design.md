# 聚宝金昊追加媒体设计

## 目标

在 `projects/jubao-jinhao` 二级页的既有聚小鲜图片序列之后，追加用户提供的 5 张图片与 1 个视频。

## 展示顺序

1. `jubao-extra-01.jpg`（白山公社）
2. `jubao-extra-02.jpg`（礼盒）
3. `jubao-extra-03.jpg`（礼盒4）
4. `jubao-extra-04.jpg`（礼盒效果图4）
5. `jubao-extra-05.jpg`（米粉包装图）
6. `jubao-extra-06.mp4`（聚小鲜秀稿视频）

## 实现

- 复用现有 `xiduoduo-gallery--natural` 的单列、全宽、原始比例图片样式；不裁切、不新增标题或网格。
- 视频放在图片之后，使用同样的全宽容器；启用原生播放控件与 `playsInline`，并以 `preload="metadata"` 避免首屏下载 403 MB 媒体文件。
- 仅修改 `src/pages/ProjectPage.tsx` 和为视频补充一条局部 CSS 规则；不改动现有图片和其他项目页。

## 验收

- 打开 `/projects/jubao-jinhao`，原有聚小鲜图片之后按上述顺序可见 5 张新增图片和视频。
- 新增图片完整显示原始比例。
- 视频可由用户手动播放，移动端内嵌播放。
- `npm run build` 成功。
