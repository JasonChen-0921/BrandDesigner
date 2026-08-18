import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('德康当家详情页包含二十四张追加图片且不含 image10', async () => {
  const page = await readFile(new URL('../src/pages/OtherWorkDetailPage.tsx', import.meta.url), 'utf8')
  const expectedImages = [
    'dekang-gallery-07.png',
    'dekang-gallery-08.png',
    'dekang-gallery-09.png',
    'dekang-gallery-01.png',
    'dekang-gallery-02.png',
    'dekang-gallery-05.png',
    'dekang-gallery-06.png',
    'dekang-gallery-11.png',
    'dekang-gallery-12.png',
    'dekang-gallery-13.png',
    'dekang-gallery-15.png',
    'dekang-gallery-16.png',
    'dekang-gallery-18.png',
    'dekang-gallery-20.png',
    'dekang-gallery-21.png',
    'dekang-gallery-22.png',
    'dekang-gallery-26.png',
    'dekang-gallery-37.png',
    'dekang-gallery-38.png',
    'dekang-gallery-39.png',
    'dekang-gallery-40.png',
    'dekang-gallery-42.png',
    'dekang-gallery-43.png',
    'dekang-gallery-44.png',
  ]

  for (const image of expectedImages) {
    assert.match(page, new RegExp(image))
  }

  assert.doesNotMatch(page, /dekang-gallery-10\.png/)
  assert.ok(page.indexOf('aria-label="德康当家项目视频"') < page.indexOf('德康当家追加项目图片'))
})

test('德康当家详情页以四栏静音循环方式展示八个视频', async () => {
  const page = await readFile(new URL('../src/pages/OtherWorkDetailPage.tsx', import.meta.url), 'utf8')

  for (let index = 1; index <= 8; index += 1) {
    assert.match(page, new RegExp(`dekang-video-0${index}\\.mp4`))
  }

  assert.match(page, /xiduoduo-gallery--four-column/)
  assert.match(page, /<video muted autoPlay loop playsInline/)
})

test('德康当家四栏视频使用紧凑的放大布局', async () => {
  const styles = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8')

  assert.match(styles, /\.xiduoduo-gallery--four-column\{[^}]*gap:4px[^}]*margin-inline:calc\(-1 \* clamp\(18px,2\.5vw,28px\)\)/)
})
